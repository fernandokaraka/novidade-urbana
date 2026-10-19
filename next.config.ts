import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Conteúdo removido do site: redireciona URLs antigas para as listagens
  async redirects() {
    return [
      { source: "/artistas/marcelo-aguiar", destination: "/artistas", permanent: true },
      { source: "/projetos/deus-grande", destination: "/projetos", permanent: true },
    ];
  },
};

export default nextConfig;
