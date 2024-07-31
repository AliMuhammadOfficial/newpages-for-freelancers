export const runtime = "edge";

import { NextResponse } from "next/server";
import { fetchResults } from "../../../kerkesa/fetchResults";

export async function GET() {
  try {
    const result = await fetchResults();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data from the server" + error });
  }
}
