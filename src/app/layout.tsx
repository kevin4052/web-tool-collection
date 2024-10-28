import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
	title: "Web Tools Collection",
	description: "Collection of tools to help with web development",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider defaultOpen={false}>
						<AppSidebar />
						<main>
							{/* <SidebarTrigger /> */}
							{children}
						</main>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
