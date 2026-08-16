"use server";

import config from "@/config/configData";

const contentSecurityPolicyBuilder = (): {
  policyValue: string;
  nonce: string;
} => {
  const nonce = crypto.randomUUID();

  const cspHeader =
    config.security.enviroment !== "lazy"
      ? `
      default-src 'self';
      connect-src 'self';
      frame-src 'self';
      script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
      style-src 'self' 'unsafe-inline';
      img-src 'self';
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
  `
      : `
      default-src 'self' ;
      connect-src 'self';
      frame-src 'self';
      script-src 'self' 'unsafe-eval' 'nonce-${nonce}' 'strict-dynamic' ;
      style-src 'self' 'unsafe-inline';
      img-src 'self';
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
  `;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();
  return { policyValue: contentSecurityPolicyHeaderValue, nonce: nonce };
};

export default contentSecurityPolicyBuilder;
