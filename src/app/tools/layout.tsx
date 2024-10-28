"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ToolsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex">
			<SidebarProvider>
				<AppSidebar />
				<main className="flex flex-col flex-1">
					<NavBar useSideBarToggle={true} />
					{children}
					<Footer />
				</main>
			</SidebarProvider>
		</div>
	);
}
