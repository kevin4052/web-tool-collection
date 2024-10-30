"use client";

import { CircleX, Copy } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
	title: string;
	textValue: string;
	className: string;
	hideCopy?: boolean;
	hideclear?: boolean;
	onTextChange: (input: string) => void;
};

export default function InputComponent({
	title = "",
	textValue = "",
	className = "",
	hideCopy = false,
	hideclear = false,
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
				{!hideCopy && (
					<Copy
						className="w-6 h-6 mr-2 hover:cursor-pointer"
						onClick={async () => navigator.clipboard.writeText(value)}
					/>
				)}
				{!hideclear && (
					<CircleX
						className="w-6 h-6 hover:cursor-pointer"
						onClick={() => setValue("")}
					/>
				)}
			</div>
			<Input
				className="min-h-6 bg-background dark:bg-background"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
