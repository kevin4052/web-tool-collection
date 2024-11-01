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
import { AtomIcon, CogIcon, LetterTextIcon, LucideProps } from "lucide-react";
import Link from "next/link";

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
	return (
		<Sidebar>
			<SidebarContent>
				{toolGroups.map((toolGroup: ToolGroup) => (
					<SidebarGroup key={toolGroup.title}>
						<SidebarGroupLabel>
							<toolGroup.icon className="w-6 h-6 mr-2" />
							{toolGroup.title}
						</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{toolGroup.tools.map((tool) => (
									<SidebarMenuItem key={tool.name}>
										<SidebarMenuButton asChild>
											<Link href={tool.url}>
												<span>{tool.name}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
		</Sidebar>
	);
}
