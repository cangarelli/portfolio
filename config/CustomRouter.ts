"use server"

import { NextApiRequest, NextApiResponse } from "next";
import { rateLimitContolller } from "@/backEnd/functionLibrary/functiónBarrel";

class CustomRouter {
  init = async (req: NextApiRequest, res: NextApiResponse) => {
    await rateLimitContolller(req, res);
  };


  
}


const customRouteSettings = new CustomRouter()

export default customRouteSettings