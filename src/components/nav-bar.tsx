import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { BracketsIcon } from "lucide-react";

export function NavBar() {
	return (
		<header className="py-3 px-2 flex sticky top-0 border-b-2 backdrop-blur-sm">
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
