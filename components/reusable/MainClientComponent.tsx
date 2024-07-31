"use client";

import React, { useEffect, useState } from "react";

import Filter from "./Filter";
import { House } from "@/interfaces/interfaces";
import HouseCard from "./HouseCard";
import MenuFilter from "./Menu";
import PropertyCardSkeleton from "./PropertyCardSkeleton";

interface MainClientComponentProps {
	data: House[];
	jurisdictions: string[];
	loading: boolean;
}

const MainClientComponent: React.FC<MainClientComponentProps> = ({
	data,
	jurisdictions,
	loading,
}) => {
	const [filters, setFilters] = useState<{ city: string; keyword: string }>({
		city: "",
		keyword: "",
	});

	const [filteredData, setFilteredData] = useState<House[]>(data);

	useEffect(() => {
		const filtered = data.filter((house) => {
			return (
				(!filters.city || house.city === filters.city) &&
				(!filters.keyword || house.address.includes(filters.keyword))
			);
		});
		setFilteredData(filtered);
	}, [filters, data]);
	const [menufilters, setMenufilters] = useState({});

	return (
		<>
			<div className="p-12 w-full mx-auto mb-8">
				<div className="flex items-center justify-center space-y-4">
					<Filter
						filters={filters}
						onFilterChange={setFilters}
						jurisdictions={jurisdictions}
					/>
					<div className="ml-4"></div>
				</div>
				<div className="mt-4 ">
					<MenuFilter />
				</div>
			</div>
			{loading ? (
				<div className="flex justify-center items-center h-full">
					<PropertyCardSkeleton />
				</div>
			) : (
				<HouseCard data={filteredData} filters={filters} />
			)}
		</>
	);
};

export default MainClientComponent;
