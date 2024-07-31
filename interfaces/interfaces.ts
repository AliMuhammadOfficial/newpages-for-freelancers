import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export interface PropertyCardProps {
	imageSrc: string[]; // Array of image sources
	name: string;
	rooms: number;
	bathrooms: number;
	garages: number;
	price: number;
	squareMeters: number;
	address: string;
	status: string;
}
export interface SectionTitleProps {
	align?: "left" | "center";
	title?: string;
	children?: ReactNode;
}

export interface ScrollingCallToActionButtonProps {
	startListingText: string;
	link: string;
}
export interface NavItem {
	label: string;
	link?: string;
	children?: {
		label: string;
		link?: string;
		iconImage?: string;
	}[];
}

export interface Bullet {
	title: string;
	desc: string;
}

export interface BenefitProps {
	title: React.ReactNode;
	children: React.ReactNode;
}

export interface BenefitsProps {
	data: {
		title: string;
		desc: string;
		image: string | StaticImageData;
		bullets: Bullet[];
		button: string;
	};
	imgPos?: string;
}

export interface ContainerProps {
	className?: string;
	children: React.ReactNode;
}
export interface Benefit {
	title: string;
	desc: string;
	image: string | StaticImageData;
	bullets: Bullet[];
	button: string;
}

export interface AvatarProps {
	name: string;
	title?: string;
}

export interface TestimonialsProps {
	reviews: { text: string; name: string }[];
	reviewsPerPage: number;
}

export interface Listing {
	id: number;
	name: string;
	rooms: number;
	bathrooms: number;
	garages: number;
	price: number;
	squareMeters: number;
}

export interface ListingsResponse {
	listings: Listing[];
}
export interface House {
	address: string;
	city: string;
	zip: string;
	originalLoanAmount: number;
	status: string;
	id: string;
}

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

export interface FilterProps {
	filters: {
		city: string;
		keyword: string;
	};
	onFilterChange: (filters: { city: string; keyword: string }) => void;

	jurisdictions: string[];
}
