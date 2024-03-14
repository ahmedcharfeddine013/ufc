"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
	faCalendar,
	faNewspaper,
	faTrophy,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";

const DashboardNav = (props) => {
	const [hoveredIcon, setHoveredIcon] = useState(null);

	const handleHover = (icon) => {
		setHoveredIcon(icon);
	};

	const renderIconOrWord = (icon, word) => {
		if (hoveredIcon === icon) {
			return <span>{word}</span>;
		} else {
			return <FontAwesomeIcon icon={icon} />;
		}
	};

	const icons = {
		"/": faHouse,
		news: faNewspaper,
		rankings: faTrophy,
		schedule: faCalendar,
	};

	return (
		<>
			<h1 className="text-xl font-heading">Dashboard</h1>
			<div className="flex flex-row justify-center rounded-md overflow-clip bg-light-grey dark:bg-dark-grey shadow-inner-soft">
				{Object.entries(icons).map(([key, icon]) => (
					<Link key={key} href={`/dashboard/${key}`} className="w-full">
						<button
							className="w-full p-4 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transition-all ease-in"
							onMouseEnter={() => handleHover(icon)}
							onMouseLeave={() => setHoveredIcon(null)}
						>
							{renderIconOrWord(
								icon,
								key !== "/"
									? key.charAt(0).toUpperCase() + key.slice(1)
									: "Home"
							)}
						</button>
					</Link>
				))}
			</div>
		</>
	);
};

export default DashboardNav;
