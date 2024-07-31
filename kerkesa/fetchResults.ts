import { NextResponse } from "next/server";

export const runtime = "edge";

export async function fetchResults() {
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
		console.log("here url ", url);

		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
				"Content-Type": "application/json",
				Environment: environment,
				Secret: secret,
				"Access-Control-Allow-Origin": "*",
			} as HeadersInit,
		});

		console.log("heree 2", response);
		console.log("heree 2", response.ok);

		if (!response.ok) {
			return NextResponse.json({
				error: "Failed to fetch data: " + response.status,
			});
		}

		const text = await response.text();
		console.log("Raw response:", text);

		// Parse the JSON
		const result = JSON.parse(text);
		return result;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error; // Propagate the error for handling in the component
	}
}
