// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',          // genera HTML estático
  images: { unoptimized: true }, // si usas next/image
  assetPrefix: './',         // para que carguen los assets en Pages
  trailingSlash: true        // evita 404 al navegar
};
