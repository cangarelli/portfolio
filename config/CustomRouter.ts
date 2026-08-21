"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { rateLimitContolller } from "@/backEnd/functionLibrary/functiónBarrel";

class CustomRouter {
  init = async (req: NextApiRequest, res: NextApiResponse) => {
    await rateLimitContolller(req, res);
  };
  fileHandler = async (req: NextApiRequest, res: NextApiResponse) => {};
}

const customRouteSettings = new CustomRouter();

export default customRouteSettings;
