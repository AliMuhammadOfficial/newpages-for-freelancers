import React, { useState } from "react";

import Image from "next/image";
import { PropertyCardProps } from "@/interfaces/interfaces";
import styles from "./propertycard.module.css";

const PropertyCard2: React.FC<PropertyCardProps> = ({
	imageSrc,
	name,
	rooms,
	bathrooms,
	garages,
	price,
	squareMeters,
	address,
	status,
}) => {
	const [bookmarked, setBookmarked] = useState(false);

	const arrowButtonStyle: React.CSSProperties = {
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		color: "#fff",
		fontSize: "24px",
		borderRadius: "50%",
		width: "40px",
		height: "40px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
		zIndex: 1,
	};

	const indicatorContainerStyle: React.CSSProperties = {
		position: "absolute",
		left: "0",
		right: "0",
		bottom: "10px",
		textAlign: "center",
	};

	const indicatorStyle: React.CSSProperties = {
		width: "10px",
		height: "10px",
		borderRadius: "50%",
		backgroundColor: "#ccc",
		margin: "0 5px",
		display: "inline-block",
		cursor: "pointer",
	};

	const activeIndicatorStyle: React.CSSProperties = {
		...indicatorStyle,
		backgroundColor: "#ffffff",
	};
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleNextImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
	};

	const handlePrevImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + imageSrc.length) % imageSrc.length
		);
	};

	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<div className="absolute bottom-2 right-2 z-50 text-black bg-white px-2 text-[12px] rounded">
					<h2>{status}</h2>
				</div>
				<Image
					src={imageSrc[currentImageIndex]}
					alt={`${name}-${currentImageIndex}`}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{ objectFit: "cover" }}
					priority={true}
				/>

				<div style={indicatorContainerStyle}>
					{imageSrc.map((_, index) => (
						<div
							key={index}
							style={
								index === currentImageIndex
									? activeIndicatorStyle
									: indicatorStyle
							}
							onClick={(e) => {
								e.stopPropagation();
								setCurrentImageIndex(index);
							}}
						/>
					))}
				</div>
			</div>
			<div className={styles.namePriceContainer}>
				<div className={styles.priceButtonContainer}>
					<h2 className={styles.price}>{price}</h2>
					<button
						className={styles.saveButton}
						onClick={(e) => {
							e.stopPropagation();
							setBookmarked(!bookmarked);
						}}
					>
						<Image
							src={bookmarked ? "/saved.svg" : "/unsaved.svg"}
							alt="Bookmark"
							width="24"
							height="24"
						/>
					</button>
				</div>
				<div className={styles.name}>
					<h2>
						{name}
						<span>, </span>
						{address}
					</h2>
				</div>
			</div>
		</div>
	);
};
export default PropertyCard2;
