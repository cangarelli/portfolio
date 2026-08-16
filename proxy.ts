"use server";

import {
  contentSecurityPolicyBuilder,
  securityHeaders,
} from "@/backEnd/functionLibrary/functiónBarrel";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // Definición de politicas dinamicas sobre contenido en transito
  const dinamicPolicyObject = contentSecurityPolicyBuilder();

  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  });

  // Set de politicas dinamicas
  response.headers.set("x-nonce", dinamicPolicyObject.nonce);
  response.headers.set(
    "Content-Security-Policy",
    dinamicPolicyObject.policyValue,
  );

  // Set de politicas estaticas
  securityHeaders.forEach((policy) => {
    response.headers.set(policy.key, policy.value);
  });

  return response;
}
