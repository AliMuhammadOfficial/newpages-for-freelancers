// pages/[id].tsx

import { useEffect, useState } from "react";

import DetailedProperty from "../../components/reusable/DetailedProperty"; // Adjust the import path as per your project structure
import { fetchPropertyDetails } from "../../kerkesa/fetchPropertyDetails";
import { useRouter } from "next/router";

const DetailsPage: React.FC = () => {
	const router = useRouter();
	const { id } = router.query;
	const [property, setProperty] = useState<any | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return;
			setLoading(true);
			setError(null);
			try {
				const response = await fetchPropertyDetails(id as string);
				setProperty(response);
			} catch (err) {
				setError("Failed to fetch property details");
				console.error("Error fetching property details:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!property) {
		return <div>No property found</div>;
	}

	return (
		<div>
			<DetailedProperty property={property} />
		</div>
	);
};

export default DetailsPage;
