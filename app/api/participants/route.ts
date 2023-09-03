import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import participants from "@/data/participants";

export async function GET(req: NextApiRequest, res: NextResponse) {
  return new Response(JSON.stringify(participants), {
    status: 200,
  });
}
