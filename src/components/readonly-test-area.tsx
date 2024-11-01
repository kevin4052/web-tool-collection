import { CircleX, Copy } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Props = {
	title: string;
	textValue: string;
	className: string;
	hideCopy?: boolean;
	hideclear?: boolean;
	onTextChange: (input: string) => void;
};

export default function ReadyOnlyTextArea({
	title = "",
	textValue = "",
	className = "",
	hideCopy = false,
	hideclear = false,
	onTextChange,
}: Props) {
	return (
		<div className={cn("grid gap-1.5", className)}>
			<div className="flex pr-2 gap-2">
				<Label htmlFor="inputText" className="mb-2 flex-1">
					{title}
				</Label>
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
				className="min-h-[200px] bg-background dark:bg-background shadow-sm"
				id="inputText"
				value={textValue}
				readOnly={true}
			/>
		</div>
	);
}
