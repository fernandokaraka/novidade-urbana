import type { Metadata } from "next";
import { inter, ttRuns, pacifico, poppins, yellowtail } from "@/lib/fonts";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { ToastProvider } from "@/contexts/ToastContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Novidade Urbana | Gestao e Agenciamento Artistico",
    template: "%s | Novidade Urbana",
  },
  description:
    "Novidade Urbana - Empresa de gestao e agenciamento artistico com reconhecimento internacional. Conectamos talentos ao mundo.",
  keywords: [
    "gestao artistica",
    "agenciamento artistico",
    "musica",
    "artistas",
    "shows",
    "eventos",
  ],
  authors: [{ name: "Novidade Urbana" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Novidade Urbana",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${ttRuns.variable} ${pacifico.variable} ${poppins.variable} ${yellowtail.variable} antialiased`}>
        <SessionProvider>
          <ToastProvider>{children}</ToastProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
