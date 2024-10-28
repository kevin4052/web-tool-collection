import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	CalendarIcon,
	HomeIcon,
	InboxIcon,
	LucideProps,
	SearchIcon,
	SettingsIcon,
} from "lucide-react";

type Item = {
	title: string;
	url: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};

// Menu items.
const items: Item[] = [
	{
		title: "Home",
		url: "#",
		icon: HomeIcon,
	},
	{
		title: "Inbox",
		url: "#",
		icon: InboxIcon,
	},
	{
		title: "Calendar",
		url: "#",
		icon: CalendarIcon,
	},
	{
		title: "Search",
		url: "#",
		icon: SearchIcon,
	},
	{
		title: "Settings",
		url: "#",
		icon: SettingsIcon,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
