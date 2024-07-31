import React, { useEffect, useState } from "react";

import { FilterProps } from "@/interfaces/interfaces";

// Filter for Results Page
const Filter: React.FC<FilterProps> = ({
	filters,
	onFilterChange,
	jurisdictions,
}) => {
	const [city, setCity] = useState(filters.city);
	const [keyword, setKeyword] = useState(filters.keyword);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			onFilterChange({ city, keyword });
		}, 300);

		return () => clearTimeout(delayDebounceFn);
	}, [city, keyword, onFilterChange]);

	const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.target.value.toLowerCase());
	};

	const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCity(event.target.value);
	};

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Trigger search logic
		onFilterChange({ city, keyword });
	};

	return (
		<div >
			<form
				onSubmit={handleSearch}
				className="flex items-center space-x-4 border-b-4 border-[#0B6836] pb-2 w-full"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 text-black ml-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				<input
					type="text"
					placeholder="Find Your Dream Home!"
					value={keyword}
					onChange={handleKeywordChange}
					className="outline-none text-black lg:text-4xl text-xl w-full placeholder-black"
				/>
			</form>
		</div>
	);
};

export default Filter;
