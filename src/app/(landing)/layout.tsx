import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import React, { ReactNode } from "react";

export default function Landinglayout({ children }: { children: ReactNode }) {
	return (
		<div>
			<NavBar useSideBarToggle={false} />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
