import { CircleX, Copy } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Props = {
	title: string;
	textValue: string;
	className: string;
	hideCopy?: boolean;
	hideclear?: boolean;
	resize?: boolean;
	height?: "sm" | "md" | "lg" | "xl";
	onTextChange: (input: string) => void;
};

export default function ReadyOnlyTextArea({
	title = "",
	textValue = "",
	className = "",
	hideCopy = false,
	hideclear = false,
	resize = true,
	height = "md",
	onTextChange,
}: Props) {
	const heights = {
		sm: "min-h-[150px]",
		md: "min-h-[250px]",
		lg: "min-h-[400px]",
		xl: "min-h-[500px]",
	};
	return (
		<div className={cn("grid gap-1.5", className)}>
			<div className="flex pr-2 gap-2 h-fit">
				<Label htmlFor="inputText" className="mb-2 flex-1">
					{title}
				</Label>
				<Badge variant="outline" className="bg-warning text-warning-foreground">
					Read-Only
				</Badge>
				{!hideCopy && (
					<Copy
						className="w-6 h-6 hover:cursor-pointer"
						onClick={async () => navigator.clipboard.writeText(textValue)}
					/>
				)}
				{!hideclear && (
					<CircleX
						className="w-6 h-6 hover:cursor-pointer"
						onClick={() => onTextChange("")}
					/>
				)}
			</div>
			<Textarea
				className={`${
					heights[height]
				} bg-background dark:bg-background shadow-sm ${
					!resize && "resize-none"
				}`}
				id="inputText"
				value={textValue}
				readOnly={true}
			/>
		</div>
	);
}
