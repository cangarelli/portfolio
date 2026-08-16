"use server";

import { NextApiRequest, NextApiResponse } from "next";

const ipGetter = (req: NextApiRequest, res: NextApiResponse) => {
  const forwarded = req.headers["x-forwarded-for"];

  let ip: string | undefined;

  if (Array.isArray(forwarded)) {
    ip = forwarded[0];
  } else if (typeof forwarded === "string") {
    ip = forwarded.split(",")[0].trim();
  } else {
    ip = req.socket.remoteAddress || undefined;
  }

  if (!ip) {
    throw new Error("Could not determine IP address");
  }

  return ip;
};

export default ipGetter;
