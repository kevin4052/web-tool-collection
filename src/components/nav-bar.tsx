import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { BracketsIcon } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

type Props = {
	useSideBarToggle: boolean;
};

export function NavBar({ useSideBarToggle = false }: Props) {
	return (
		<header className="py-3 px-6 flex gap-4 sticky top-0 border-b-2 backdrop-blur-sm">
			{useSideBarToggle && (
				<div className="flex items-center justify-center pr-4 border-r-2">
					<SidebarTrigger />
				</div>
			)}
			<div className="flex-1 font-bold content-center">
				<Link href={"/"} className="flex flex-row gap-2">
					<BracketsIcon className="w-6 h-6" />
					<span>WebTools Collection</span>
				</Link>
			</div>
			<div>
				<ModeToggle />
			</div>
		</header>
	);
}
