export const runtime = "experimental-edge";

import Filter from "./Filter";
import { House } from "@/interfaces/interfaces";
import HouseCard from "./HouseCard";
import MainClientComponent from "./MainClientComponent";
import PropertyCardSkeleton from "./PropertyCardSkeleton";
import React from "react";

interface MainServerComponentProps {
	data: House[];
	jurisdictions: string[];
	loading: boolean;
}

// This is a server component
const MainServerComponent: React.FC<MainServerComponentProps> = ({
	data,
	jurisdictions,
	loading,
}) => {
	return (
		<div className="flex flex-col min-h-screen">
			<MainClientComponent
				data={data}
				jurisdictions={jurisdictions}
				loading={loading}
			/>
		</div>
	);
};

export default MainServerComponent;
