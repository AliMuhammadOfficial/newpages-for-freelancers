// Property Card Skeleton used when loading
import React from "react";

const PropertyCardSkeleton: React.FC = () => {
	return (
		<div className="card bg-gray-100 border border-gray-200 rounded-xl shadow-sm w-full md:w-80 mx-auto mt-4 mb-6">
			{/* Image container skeleton */}
			<div
				className="imageContainer bg-gray-200 rounded-t-xl m-2 md:m-4 overflow-hidden relative"
				style={{ paddingBottom: "108.6%" }}
			>
				<div className="animate-pulse absolute inset-0"></div>
			</div>
			{/* Content container */}
			<div className="namePriceContainer p-2 md:p-4 flex flex-col">
				{/* Price and save button skeleton */}
				<div className="flex justify-between items-center mb-2">
					<div className="w-1/4 h-3 bg-gray-200 rounded-md animate-pulse"></div>
					<button className="saveButton w-8 h-3 bg-gray-200 rounded-md animate-pulse"></button>
				</div>
				{/* Name skeleton */}
				<div className="w-2/3 h-4 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
				{/* Icons skeleton */}
				<div className="iconRow flex flex-wrap justify-between">
					<div className="icon flex items-center w-1/3 h-3 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
					<div className="icon flex items-center w-1/3 h-3 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
					<div className="icon flex items-center w-1/3 h-3 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCardSkeleton;
