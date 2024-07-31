// components/MetaTags.js

import { FC } from "react";
import Head from "next/head";

interface MetaTagsProps {
	title?: string;
	description?: string;
	image?: string | null;
	index?: boolean;
}

const MetaTags: FC<MetaTagsProps> = ({
	title = "Federa",
	description = "Federa - Your Description Here",
	image = "image link",
	index = true,
}) => {
	const siteName = "Federa";
	const siteTitle = title ? `${title} - ${siteName}` : siteName;

	return (
		<Head>
			<title>{siteTitle}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={siteTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image || "image thumbnail"} />
			<link rel="icon" href="/favicon.ico" />
			{index === true && <meta name="robots" content="index" />}
		</Head>
	);
};

export default MetaTags;
