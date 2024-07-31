"use client";

import React, { useState } from "react";

import Image from "next/image";

const MenuFilter: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed lg:top-28 lg:right-80 top-24 right-0 m-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none z-50"
			></button>

			{isOpen && (
				<div className="mt-4 bg-white p-6 rounded-md transition-all duration-300 ease-in-out w-[94%] mx-auto  border-solid border border-gray-200">
					<div className="flex flex-wrap gap-4 justify-center items-center">
						<div className="flex-1 min-w-[200px]">
							<label
								htmlFor="location"
								className="block text-sm font-medium text-gray-700"
							>
								Location
							</label>
							<input
								type="text"
								id="location"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#0B6836] focus:border-[#0B6836] sm:text-sm"
								placeholder="Enter location"
							/>
						</div>
						<div className="flex-1 min-w-[200px]">
							<label
								htmlFor="price"
								className="block text-sm font-medium text-gray-700"
							>
								Price
							</label>
							<input
								type="text"
								id="price"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#0B6836] focus:border-[#0B6836] sm:text-sm"
								placeholder="Enter price range"
							/>
						</div>
						<div className="flex-1 min-w-[200px]">
							<label
								htmlFor="propertyType"
								className="block text-sm font-medium text-gray-700"
							>
								Property Type
							</label>
							<select
								id="propertyType"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#0B6836] focus:border-[#0B6836] sm:text-sm"
							>
								<option>House</option>
								<option>Apartment</option>
								<option>Condo</option>
								<option>Townhouse</option>
							</select>
						</div>
						<div className="flex-1 min-w-[200px]">
							<label
								htmlFor="utilities"
								className="block text-sm font-medium text-gray-700"
							>
								Utilities
							</label>
							<select
								id="utilities"
								className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#0B6836] focus:border-[#0B6836] sm:text-sm"
							>
								<option>Water</option>
								<option>Electricity</option>
								<option>Gas</option>
								<option>Internet</option>
								<option>Trash Removal</option>
							</select>
						</div>
					</div>
					<div className="mt-6 flex justify-center">
						<button
							className="w-full md:w-1/4 bg-[#0B6836]   text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#0A5C2F] focus:outline-none focus:ring-2 focus:ring-[#0B6836] focus:ring-offset-2"
							onClick={() => setIsOpen(false)}
						>
							Apply Filters
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default MenuFilter;
