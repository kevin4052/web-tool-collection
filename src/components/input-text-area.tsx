import { CircleX, Copy } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

type Props = {
	title: string;
	textValue: string;
	onTextChange: (input: string) => void;
};

export default function InputTextArea({
	title = "",
	textValue = "",
	onTextChange,
}: Props) {
	const [value, setValue] = useState(textValue);

	useEffect(() => {
		onTextChange(value);
	}, [value, onTextChange]);

	return (
		<div className="grid w-full gap-1.5 col-span-3">
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
				className="min-h-[200px]"
				id="inputText"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
