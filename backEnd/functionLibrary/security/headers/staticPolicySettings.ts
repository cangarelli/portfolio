"use server";
const securityHeaders = [
  {
    // Obligan HTTPS
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Evitan sniffing de MIME types
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Bloquean iframes
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Controlan privacidad del referer
    key: "Referrer-Policy",
    value: "no-referrer",
  },
  {
    // Restringen permisos del navegador
    key: "Permissions-Policy",
    value: "microphone=()",
  },
];
export default securityHeaders;
