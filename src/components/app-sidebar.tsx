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
import { Badge } from "@/components/ui/badge";
import {
	AtomIcon,
	CogIcon,
	LetterTextIcon,
	LucideProps,
	ScanTextIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tool = {
	name: string;
	url: string;
	status: "new" | "inprocess" | "normal";
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
				status: "normal",
			},
			{
				name: "Text DIFF Checker",
				url: "/tools/diff-viewer",
				status: "normal",
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
				status: "normal",
			},
			{
				name: "QR Code Generator",
				url: "/tools/qrcode-generator",
				status: "new",
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
				status: "normal",
			},
		],
		icon: CogIcon,
	},
	{
		title: "Formatters",
		tools: [
			{
				name: "JSON formatter",
				url: "/tools/json-formatter",
				status: "inprocess",
			},
		],
		icon: ScanTextIcon,
	},
];

export function AppSidebar() {
	const pathName = usePathname();
	const statusStyles = {
		new: "bg-success text-success-foreground ",
		inprocess: "bg-warning text-warning-foreground",
		normal: "",
	};
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
													<Link href={tool.url} className="w-full flex">
														<span className="flex-1">{tool.name}</span>
														{tool.status !== "normal" && (
															<Badge
																variant="outline"
																className={`${statusStyles[tool.status]}`}
															>
																{tool.status}
															</Badge>
														)}
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
