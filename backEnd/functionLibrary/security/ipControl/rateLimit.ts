"use server";
import { rateLimit } from "express-rate-limit";
import ipGetter from "./ipGetter";
import { NextApiRequest, NextApiResponse } from "next";

const rateLimitConfig = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: "Demasiadas solicitudes, por favor intenta de nuevo más tarde",
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: ipGetter,
});

const rateLimitContolller = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  await rateLimitConfig(req, res, (result: Error | string) => {
    if (result instanceof Error) {
      return res
        .status(429)
        .json({ status: "error", payload: "Execeso de intentos de acceso" });
    }
  });
};
export default rateLimitContolller;
