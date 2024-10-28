import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CopyrightIcon } from "lucide-react";
import Link from "next/link";

type Props = {
	siteName: string;
};

export function Footer({ siteName }: Props) {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="flex py-3 px-2 border-t-2">
			<div className="flex items-center gap-2 flex-1 p-4">
				<span>
					<CopyrightIcon className="w-3 h-3" />
				</span>
				<span>{currentYear}</span>
				{siteName}
			</div>
			<div className="flex items-center p-4 gap-2">
				<Link
					href={"https://github.com/kevin4052/web-tool-collection"}
					target="_blank"
				>
					<GitHubLogoIcon className="w-6 h-6" />
				</Link>
			</div>
		</footer>
	);
}
