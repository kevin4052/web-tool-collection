import { cn } from "@/lib/utils";
import { LetterTextIcon } from "lucide-react";
import React, { useState } from "react";

type Props = {
	isOpen: boolean;
	className: string;
};

export default function SideNav({ isOpen, className }: Props) {
	const [isNavOpen, setIsNavOpen] = useState(isOpen);

	return (
		<aside className={cn(`flex flex-row border-r-2`, className)}>
			<div className={`px-2 w-11 h-full ${isNavOpen && "border-r-2"}`}>
				<LetterTextIcon
					className="w-6 h-6 my-4 hover:cursor-pointer"
					onClick={() => setIsNavOpen(!isNavOpen)}
				/>
			</div>
			<div className={`${isNavOpen ? "w-52" : "hidden"}`}>
				<p>Tool list</p>
			</div>
		</aside>
	);
}
