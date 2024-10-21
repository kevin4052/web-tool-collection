"use client";
import { LetterTextIcon } from "lucide-react";
import { useState } from "react";

export default function ToolsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(true);

	const handleSideNavToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex">
			<aside className={`flex flex-row border-r-2`}>
				<div className={`px-2 w-11 h-full ${isOpen && "border-r-2"}`}>
					<LetterTextIcon
						className="w-6 h-6 my-4 hover:cursor-pointer"
						onClick={handleSideNavToggle}
					/>
				</div>
				<div className={`${isOpen ? "w-52" : "hidden"}`}>
					<p>Tool list</p>
				</div>
			</aside>
			<main className="flex flex-1">{children}</main>
		</div>
	);
}
