import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");

	if (!id) {
		return NextResponse.json(
			{ message: "Missing id parameter" },
			{ status: 400 }
		);
	}

	const url = process.env.NEXT_PUBLIC_FETCH_PROPERTY_DETAILS_URL;

	if (!url) {
		return NextResponse.json(
			{
				message:
					"NEXT_PUBLIC_FETCH_PROPERTY_DETAILS_URL environment variable is not defined",
			},
			{ status: 500 }
		);
	}

	const headers: HeadersInit = {
		"Access-Control-Allow-Methods": "GET",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*", // Adjust as per your CORS policy
	};

	if (process.env.NEXT_PUBLIC_ENVIRONMENT) {
		headers["ENVIRONMENT"] = process.env.NEXT_PUBLIC_ENVIRONMENT;
	}

	if (process.env.NEXT_PUBLIC_SECRET) {
		headers["SECRET"] = process.env.NEXT_PUBLIC_SECRET;
	}

	try {
		const response = await fetch(`${url}/?id=${id}`, {
			method: "GET",
			headers,
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch data: ${response.status}`);
		}

		const data = await response.json();
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error("Error fetching property details:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
