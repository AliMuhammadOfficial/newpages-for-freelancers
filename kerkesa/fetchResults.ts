// Ensure this line is at the top of your file
// fetch results

export const runtime = "edge";

export async function fetchResults() {
	const url = process.env.NEXT_PUBLIC_FETCH_ALL_LISTINGS_URL;
	if (!url) {
		throw new Error(
			"NEXT_PUBLIC_FETCH_ALL_LISTINGS_URL environment variable is not defined"
		);
	}

	const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
	const secret = process.env.NEXT_PUBLIC_SECRET;

	if (!environment || !secret) {
		throw new Error(
			"Environment variables for environment or secret are not defined"
		);
	}

	try {
		console.log("here url ", url);

		const response = await fetch(url, {
			method: "GET",
			cache: "no-store",
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
			// Log the raw response
			throw new Error("Network response was not ok");
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
