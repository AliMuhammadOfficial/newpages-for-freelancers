import Image from "next/image";
import Link from "next/link";

// this page redirects to marketing pages and properties search

function Home() {
	return (
		<div className="flex justify-center items-center  ">
			<ul className="flex flex-col items-center justify-center space-y-4">
				<li className="btn border-[#0B6836] p-4 border hover:border-none hover:text-white hover:bg-[#0B6836] bg-white text-[#0B6836] mt-6">
					<Link href="/search">Search Properties</Link>
				</li>
			</ul>
		</div>
	);
}

export default Home;
