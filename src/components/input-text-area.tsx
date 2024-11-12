import { CircleX, Copy } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
	title: string;
	textValue: string;
	className: string;
	readonly?: boolean;
	resize?: boolean;
	height?: "xs" | "sm" | "md" | "lg" | "xl";
	onTextChange: (input: string) => void;
};

export default function InputTextArea({
	title = "",
	textValue = "",
	className = "",
	readonly = false,
	resize = true,
	height = "md",
	onTextChange,
}: Props) {
	const [value, setValue] = useState(textValue);
	const heights = {
		xs: "min-h-[70px]",
		sm: "min-h-[150px]",
		md: "min-h-[250px]",
		lg: "min-h-[400px]",
		xl: "min-h-[500px]",
	};

	useEffect(() => {
		onTextChange(value);
	}, [value, onTextChange]);

	return (
		<div className={cn("grid gap-1.5", className)}>
			<div className="flex pr-2">
				<Label htmlFor="inputText" className="mb-2 flex-1">
					{title}
				</Label>
				<Copy
					className="w-6 h-6 mr-2 hover:cursor-pointer"
					onClick={async () => navigator.clipboard.writeText(value)}
				/>
				<CircleX
					className="w-6 h-6 hover:cursor-pointer"
					onClick={() => setValue("")}
				/>
			</div>
			<Textarea
				className={`${
					heights[height]
				} bg-background dark:bg-background shadow-sm ${
					!resize && "resize-none"
				}`}
				id="inputText"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				readOnly={readonly}
			/>
		</div>
	);
}
