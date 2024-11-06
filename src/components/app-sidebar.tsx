import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { AtomIcon, CogIcon, LetterTextIcon, LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tool = {
	name: string;
	url: string;
};

type ToolGroup = {
	title: string;
	tools: Tool[];
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
};

const toolGroups: ToolGroup[] = [
	{
		title: "Text",
		tools: [
			{
				name: "Word Counter",
				url: "/tools/word-counter",
			},
			{
				name: "Text DIFF Checker",
				url: "/tools/diff-viewer",
			},
		],
		icon: LetterTextIcon,
	},
	{
		title: "Generators",
		tools: [
			{
				name: "UUID Generator",
				url: "/tools/uuid-generator",
			},
			{
				name: "QR Code Generator",
				url: "/tools/qrcode-generator",
			},
		],
		icon: AtomIcon,
	},
	{
		title: "Converters",
		tools: [
			{
				name: "ASCII Converter",
				url: "/tools/ascii-converter",
			},
		],
		icon: CogIcon,
	},
];

export function AppSidebar() {
	const pathName = usePathname();
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{toolGroups.map((toolGroup) => (
								<SidebarMenuItem key={toolGroup.title}>
									<SidebarMenuButton>
										<toolGroup.icon className="w-6 h-6" />
										{toolGroup.title}
									</SidebarMenuButton>
									<SidebarMenuSub>
										{toolGroup.tools.map((tool) => (
											<SidebarMenuSubItem key={tool.name}>
												<SidebarMenuSubButton
													className={`${
														pathName === tool.url && "bg-sidebar-accent"
													} `}
												>
													<Link href={tool.url}>
														<span>{tool.name}</span>
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
