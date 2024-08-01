// app/api/fetchResults/route.ts

import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_FETCH_ALL_LISTINGS_URL;
  if (!url) {
    return NextResponse.json({
      error: "Environment variable for fetch all listings URL is not defined",
    });
  }

  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
  const secret = process.env.NEXT_PUBLIC_SECRET;

  if (!environment || !secret) {
    return NextResponse.json({
      error: "Environment variable for environment or secret is not defined",
    });
  }

  try {
    console.log("Fetching data from URL:", url);

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Content-Type": "application/json",
        Environment: environment,
        Secret: secret,
        "Access-Control-Allow-Origin": "*",
      },
    });

    console.log("Response received:", response.ok);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `Failed to fetch data: ${response.status} ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    const text = await response.text();
    console.log("Raw response:", text);

    const result = JSON.parse(text);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      {
        error: "Error fetching data from the server",
      },
      { status: 500 }
    );
  }
}
