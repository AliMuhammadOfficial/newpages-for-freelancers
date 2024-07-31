import Image from "next/image";
import React from "react";

type Property = {
	url: string;
	jurisdiction: string;
	fileId: string;
	saleDate: string;
	saleTime: string;
	address: string;
	city: string;
	zip: string;
	originalLoanAmount: string;
	images: string[];
	videos: string[];
	source: string;
	id: string;
	checksum: string;
	propertyId: string;
};

interface DetailedPropertyProps {
	property: {
		data: Property; // Update the type to include the nested 'data' property
		status: number;
		ok: boolean;
	};
}

const DetailedProperty: React.FC<DetailedPropertyProps> = ({ property }) => {
	// Check console log for property data
	console.log("Property data:", property);

	// Ensure property object exists and has necessary data
	if (!property || !property.data) {
		return <div>No property data available</div>;
	}

	const { data } = property;

	return (
		<div className="w-full h-full bg-white ">
			{/* Container */}
			<div className="lg:w-[90%]  mx-auto  pl-4">
				<div className="py-2 mt-8 flex justify-between">
					<div className="flex items-center">
						<h2
							className="font-bold text-black mr-4"
							style={{ fontSize: "24px" }}
						>
							{data.city}, {data.zip}
						</h2>
						<h2 className="font-bold text-[rgba(11,104,54,1)] text-[20px]">
							Active
						</h2>
					</div>
				</div>

				{/* Images Div */}
				<div className="w-full flex flex-col lg:flex-row">
					{/* Main Image */}
					<div className="lg:w-2/3 relative" style={{ paddingTop: "40%" }}>
						<Image
							src="/image4.jpeg"
							alt="Main"
							layout="fill"
							objectFit="cover"
							className=" pr-4"
						/>
					</div>
					{/* Side Images */}
					<div className="lg:w-1/3 flex flex-col">
						<div className="w-full relative" style={{ paddingTop: "60%" }}>
							<Image
								src="/image2.jpg"
								alt="Top Side"
								layout="fill"
								objectFit="cover"
								className="pb-4"
							/>
						</div>
						<div className="w-full relative" style={{ paddingTop: "60%" }}>
							<Image
								src="/image3.jpg"
								alt="Bottom Side"
								layout="fill"
								objectFit="cover"
								className=""
							/>
						</div>
					</div>
				</div>

				<div className="w-full py-2 px-8 mt-8 flex justify-between">
					<div style={{ width: "50%", marginRight: "3%" }}>
						<h2
							className="font-bold text-[rgba(11,104,54,1)]"
							style={{ fontSize: "32px" }}
						>
							Overview
						</h2>
						<div className="w-full my-8 flex justify-between">
							<h3 className="text-[20px] font-medium">1200 ft </h3>
							<span style={{ color: "gray" }}>
								&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
							<h3 className="text-[20px] font-medium"> 3 Bedrooms </h3>
							<span style={{ color: "gray" }}>
								&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
							<h3 className="text-[20px] font-medium"> 2 Bathrooms </h3>
							<span style={{ color: "gray" }}>
								&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							</span>
							<h3 className="text-[20px] font-medium"> 1 Kitchen </h3>
						</div>
						<p style={{ color: "gray" }}>
							<span className="font-bold text-gray-600">
								SHORT DESCRIPTION:
							</span>
							&nbsp;&nbsp;Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Ex, eaque nisi corporis non molestias quas et nam amet ipsum
							rerum unde. Corporis quo reiciendis quia incidunt aut numquam,
							animi odio. Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Ut hic ullam libero. Delectus doloremque adipisci saepe
							quidem quas aliquid quam iusto assumenda. Laborum aspernatur
							molestias nulla deserunt harum. Assumenda, error.
						</p>
						<div className="w-full my-8 flex justify-between">
							<h3 className="text-[16px] text-[rgba(11,104,54,1)] font-bold">
								CONTACT{" "}
							</h3>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<h3 className="text-[16px]"> Source: {data.source} </h3>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<h3 className="text-[16px]"> Listing: {data.fileId} </h3>
						</div>
						<h2
							className=" font-bold text-[rgba(11,104,54,1)] mt-16 mb-8"
							style={{ fontSize: "32px" }}
						>
							Location
						</h2>
						<div className="w-1/2">
							<div className="flex justify-between">
								<h4 className="text-gray-600">Conutry:</h4>
								<h4 className="font-bold">{data.jurisdiction}</h4>
							</div>
							<div className="flex justify-between">
								<h4 className="text-gray-600">City:</h4>
								<h4 className="font-bold">{data.city}</h4>
							</div>
							<div className="flex justify-between">
								<h4 className="text-gray-600">Addres:</h4>
								<h4 className="font-bold">{data.address}</h4>
							</div>
							<div className="flex justify-between">
								<h4 className="text-gray-600">Zip:</h4>
								<h4 className="font-bold">{data.zip}</h4>
							</div>
						</div>
						<h2
							className=" font-bold text-[rgba(11,104,54,1)] mt-16 mb-8"
							style={{ fontSize: "32px" }}
						>
							Interiors Features
						</h2>
						<div className="flex w-full">
							<div className="w-1/3">
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
							</div>
							<div className="ml-10 w-1/3">
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
							</div>
						</div>
						<h2
							className=" font-bold text-[rgba(11,104,54,1)] mt-16 mb-8"
							style={{ fontSize: "32px" }}
						>
							Exterior Features
						</h2>
						<div className="flex w-full">
							<div className="w-1/3">
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
							</div>
							<div className="ml-10 w-1/3">
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
								<div className="flex justify-between">
									<h4 className="text-gray-600">Cooling:</h4>
									<h4 className="font-bold">Yes</h4>
								</div>
							</div>
						</div>
						<h2
							className=" font-bold text-[rgba(11,104,54,1)] mt-16 mb-8"
							style={{ fontSize: "32px" }}
						>
							Important Notification
						</h2>
					</div>
					<div style={{ width: "45%", marginLeft: "3%" }}>
						<div className="w-full py-2 border-2 border-[rgba(11,104,54,1)] rounded-xl">
							<div className="w-full flex justify-center text-center items-center ">
								<div className="w-full flex flex-col text-center items-center">
									<h2
										className="font-bold text-black "
										style={{ fontSize: "32px" }}
									>
										{data.originalLoanAmount}
									</h2>
									<h4 className="font-bold mb-6" style={{ color: "gray" }}>
										List Price
									</h4>
									<form className="w-[75%] flex flex-col mt-8 justify-center h-full">
										<div className="w-full flex justify-between my-2">
											<label className="font-semibold text-black">
												Full Name:
											</label>
											<input
												className="border border-black rounded-md"
												type="text"
											/>
										</div>
										<div className="w-full flex justify-between my-2">
											<label className="font-semibold text-black">
												Contact:
											</label>
											<input
												className="border border-black rounded-md"
												type="text"
											/>
										</div>
										<div className="w-full flex justify-between my-2">
											<label className="font-semibold text-black">Price:</label>
											<input
												className="border border-black rounded-md"
												type="text"
											/>
										</div>
										<div className="w-full flex justify-center items-center text-center">
											<button
												style={{
													backgroundColor: "rgba(11,104,54,1)",
													fontSize: "16px",
												}}
												className="mt-16 mb-10 py-2 font-bold text-white rounded-md px-8"
											>
												MAKE AN OFFER
											</button>
										</div>
									</form>
									<h3 className="mt-4 font-semibold text-[14px]">
										Get{" "}
										<span className="text-[18px] text-[rgba(11,104,54,1)]">
											2% CASH BACK
										</span>{" "}
										when you close with SmartBuy DIY.
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-between px-8">
					<div className="items-center text-center">
						<div className="flex justify-between">
							<h4 className="text-gray-600">Federa Last Checked:</h4>
						</div>
						<div className="flex justify-between">
							<h4 className="text-gray-600">Date Listing Updated:</h4>
						</div>
						<div className="flex justify-between">
							<h4 className="text-gray-600">Listing Courtesy of:</h4>
						</div>
						<div className="flex justify-between">
							<h4 className="text-gray-600">Source:</h4>
						</div>
					</div>
					<div className="items-center text-center">
						<div className="flex justify-between">
							<h4 className="font-bold">6 Hours Ago</h4>
						</div>
						<div className="flex justify-between">
							<h4 className="font-bold">{data.saleDate}</h4>
						</div>
						<div className="flex justify-between">
							<h4 className="font-bold">
								Monique Margret, Investment Realty, (790) 128 1823:
							</h4>
						</div>
						<div className="flex justify-between">
							<h4 className="font-bold">Bright MLS, MLS#: DCD2176182</h4>
						</div>
					</div>
					<Image
						src={"/brightMLS.png"}
						width={0}
						height={0}
						sizes="100vw"
						className="w-1/4 h-full"
						alt="not found"
					/>
				</div>
				<div className="w-full px-8 mt-8">
					<p>
						{" "}
						<span className="font-bold text-black">Disclaimer:</span>
						This home sale information is not to be construed as an appraisal
						and may not be used as such for any purpose. Bright MLS is the
						provider of this home sale information and has compiled content from
						various sources. Some properties represented may not have actually
						sold due to reporting errors.
					</p>
					<p>
						©2024 BRIGHT MLS, All rights reserved. Information deemed reliable
						but not guaranteed. The data relating to real estate for sale on
						this website appears in part through the Bright MLS Internet Data
						Exchange program, a voluntary cooperative exchange of property
						listing data between licensed real estate brokerage firms in which
						participates and is provided by Bright MLS through a licensing
						agreement. The information provided by this website is for the
						personal, non-commercial use of consumers and may not be used for
						any purpose other than to identify prospective properties consumers
						may be interested in purchasing. Some properties which appear for
						sale on this website may no longer be available because they are
						under contract, have Closed or are No Longer being offered for sale.
						Some real estate firms do not participate in IDX and their listings
						do not appear on this website. Some properties listed with
						participating firms do not appear on this website at the request of
						the seller.
					</p>
				</div>
				{/* Similar Listings Function */}
				{/* To add Filter for this section */}
				<div>
					<h2
						className=" font-bold text-[rgba(11,104,54,1)] mt-16 mb-8"
						style={{ fontSize: "32px" }}
					>
						Similar Listings
					</h2>
				</div>
			</div>

			<div>
				<p>
					{data.city}, {data.zip}, {data.address}, {data.jurisdiction},{" "}
					{data.saleDate}
				</p>
			</div>
		</div>
	);
};

export default DetailedProperty;
