export const runtime = 'experimental-edge';

import { GetServerSideProps } from "next";
import { House } from "@/interfaces/interfaces";
import MainServerComponent from "@/components/reusable/MainServerComponent";
import { fetchResults } from "@/kerkesa/fetchResults";

interface PageProps {
	data: House[];
	jurisdictions: string[];
	loading: boolean;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
	let data: House[] = [];
	let jurisdictions: string[] = [];
	let loading = true;

	try {
		const result = await fetchResults();
		console.log("Response from fetch", result.data)
		if (Array.isArray(result.data)) {
			jurisdictions = Array.from(
				new Set(result.data.map((house: House) => house.city))
			);
			data = result.data;
			loading = false;
		} else {
			console.error(
				"Fetched result data is not an array:",
				result ? result.data : result
			);
		}
	} catch (error) {
		console.error("Error fetching jurisdictions:", error);
	}

	return {
		props: {
			data,
			jurisdictions,
			loading,
		},
	};
};

const SearchPage: React.FC<PageProps> = ({ data, jurisdictions, loading }) => {
	return (
		<MainServerComponent
			data={data}
			jurisdictions={jurisdictions}
			loading={loading}
		/>
	);
};

export default SearchPage;
