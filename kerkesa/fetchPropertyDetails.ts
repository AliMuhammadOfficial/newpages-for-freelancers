export const runtime = "experimental-edge";

export async function fetchPropertyDetails(id: string) {
	const url = `/api/fetchPropertyDetails?id=${id}`; // The URL should point to your API route

	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			} as HeadersInit,
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch data: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Error fetching property details:", error);
		throw error;
	}
}
