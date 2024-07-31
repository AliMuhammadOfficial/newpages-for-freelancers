import React, { useEffect, useState } from "react";

// import { HouseCardProps } from "@/interfaces/interfaces";
import PropertyCard2 from "./PropertyCard";
import PropertyCardSkeleton from "./PropertyCardSkeleton";
import { useRouter } from "next/router";

// Displays the Properties and Gets the data from the API

export interface HouseCardProps {
	data: {
		address: string;
		city: string;
		zip: string;
		originalLoanAmount: number;
		status: string;
		id: string;
	}[];
	filters: {
		city: string;
		keyword: string;
	};
}

const HouseCard: React.FC<HouseCardProps> = ({ data, filters }) => {
	const ITEMS_PER_PAGE = 16; // Number of items per page
	const [filteredData, setFilteredData] = useState<
		{
			status: string;
			address: string;
			city: string;
			zip: string;
			originalLoanAmount: number;
			id: string;
		}[]
	>([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setLoading(true);
		const filterData = () => {
			const filtered = data.filter((house) => {
				const matchesCity = filters.city
					? house.city.toLowerCase().includes(filters.city.toLowerCase())
					: true;
				const matchesKeyword = filters.keyword
					? (house.address &&
							house.address.toLowerCase().includes(filters.keyword)) ||
					  (house.city &&
							house.city.toLowerCase().includes(filters.keyword)) ||
					  (house.zip && house.zip.toLowerCase().includes(filters.keyword))
					: true;
				return matchesCity && matchesKeyword;
			});
			setFilteredData(filtered);
			setLoading(false);
			setCurrentPage(1); // Reset pagination to first page after filtering
		};

		filterData();
	}, [data, filters]);

	const router = useRouter();

	const handleCardClick = (id: string) => {
		router.push(`/details/${id}`);
	};

	// Pagination
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top of the page
	};

	// Calculate items to display on the current page
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const paginatedData = filteredData.slice(startIndex, endIndex);

	// Determine number of pagination buttons needed
	const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
	return (
		<div className="min-h-screen w-full -mt-20 bg-white ctrl">
			<div className="w-[90%] mx-auto mt-8">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-start">
					{loading ? (
						Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
							<div key={index}>
								<PropertyCardSkeleton />
							</div>
						))
					) : paginatedData.length > 0 ? (
						paginatedData.map((property, index) => (
							<div
								key={property.id}
								onClick={() => handleCardClick(property.id)}
							>
								<PropertyCard2
									imageSrc={["/image2.jpg", "/image3.jpg", "/image4.jpeg"]}
									name={property.city || ""}
									rooms={3}
									bathrooms={1}
									garages={1}
									price={property.originalLoanAmount || 1000000}
									squareMeters={400}
									address={property.address || ""}
									status={property.status || ""}
								/>
							</div>
						))
					) : (
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="bg-white p-8 rounded-lg shadow-md text-center">
								<h2 className="text-3xl font-bold text-gray-800 mb-4">
									No Property Found
								</h2>
								<p className="text-gray-600">
									Please refine your search criteria or check back later.
								</p>
							</div>
						</div>
					)}
				</div>

				{/* Pagination controls */}
				{totalPages > 1 && (
					<div className="flex justify-center mt-4 space-x-2">
						<button
							className={`px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none ${
								currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-200"
							}`}
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
						>
							&lt; Prev
						</button>
						<span className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700">
							Page {currentPage} of {totalPages}
						</span>
						<button
							className={`px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none ${
								currentPage === totalPages
									? "cursor-not-allowed"
									: "hover:bg-gray-200"
							}`}
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
						>
							Next &gt;
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
export default HouseCard;
