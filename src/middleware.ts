import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdminPath = req.nextUrl.pathname.startsWith('/admin')
    const isLoginPath = req.nextUrl.pathname === '/admin/login'

    // Se está na rota admin (exceto login) e não está autenticado
    if (isAdminPath && !isLoginPath && !token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    // Se está no login e já está autenticado, redireciona para dashboard
    if (isLoginPath && token) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Permite acesso ao login mesmo sem token
        if (req.nextUrl.pathname === '/admin/login') {
          return true
        }
        // Requer token para outras rotas admin
        if (req.nextUrl.pathname.startsWith('/admin')) {
          return !!token
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*'],
}
