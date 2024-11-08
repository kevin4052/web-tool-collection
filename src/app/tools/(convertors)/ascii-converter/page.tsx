"use client";

import { Card, CardContent } from "@/components/ui/card";
import InputComponent from "@/components/input";
import React, { useEffect, useState } from "react";
import ReadyOnlyTextArea from "@/components/readonly-text-area";
import ToolWrapper from "@/app/tools/_components/tool-wrapper";

const toolData = {
	name: "ASCII Converter",
	description: "Converters input text into ASCII code",
};

export default function AsciiConverterPage() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	useEffect(() => {
		setOutput(toAscii(input));
	}, [input]);

	const toAscii = (inputValue: string): string => {
		let result = "";

		for (let i = 0; i < inputValue.length; i++) {
			const ascii = inputValue.charCodeAt(i);
			result += `${ascii} `;
		}

		return result;
	};

	return (
		<ToolWrapper name={toolData.name} description={toolData.description}>
			<Card>
				<CardContent className="flex flex-col gap-4 py-4">
					<InputComponent
						title="Input"
						textValue={input}
						onTextChange={(value) => setInput(value)}
						className="flex-1"
						hideCopy={true}
					/>
					<ReadyOnlyTextArea
						title="Output"
						textValue={output}
						onTextChange={setOutput}
						className=""
						hideclear={true}
					/>
				</CardContent>
			</Card>
		</ToolWrapper>
	);
}
