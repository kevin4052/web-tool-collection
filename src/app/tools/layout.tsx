"use client";
import SideNav from "@/app/tools/_components/SideNav";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ToolsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<main className="flex flex-col flex-1">
				<div className="flex items-center">
					<SidebarTrigger />
					<NavBar />
				</div>
				{children}
				<Footer />
			</main>
		</div>
	);
}
