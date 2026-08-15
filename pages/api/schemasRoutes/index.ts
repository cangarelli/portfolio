"use server";

import type { NextApiRequest, NextApiResponse } from "next";

async function users(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      res.status(200).json(`${req.method} automatic response`);
    } else if (req.method === "DELETE") {
      res.status(200).json(`${req.method} automatic response`);
    } else {
      res.status(400).json("Method not allowed");
    }
  } catch (error) {
    console.error(`Error in API is ${req.method} endpoint:`, error);
    res.status(500).json("Error en el sistema al procesar el pedido");
    // res.sendServerError('An error occurred on server process. Talk to the developer');
  }
}

export default users;
