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
	onTextChange: (input: string) => void;
};

export default function InputTextArea({
	title = "",
	textValue = "",
	className = "",
	readonly = false,
	onTextChange,
}: Props) {
	const [value, setValue] = useState(textValue);

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
				className="min-h-[200px] bg-background dark:bg-background"
				id="inputText"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				readOnly={readonly}
			/>
		</div>
	);
}
