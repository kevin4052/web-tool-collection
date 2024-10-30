"use client";

import { Card, CardContent } from "@/components/ui/card";
import InputComponent from "@/components/input";
import React, { useEffect, useState } from "react";
import ReadyOnlyTextArea from "@/components/readonly-test-area";

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
		<div className="min-h-screen w-full mx-auto max-w-[1680px] flex flex-col md:px-6 px-3">
			<div className="flex flex-col my-8">
				<h3 className="font-semibold text-2xl">ASCII Converter</h3>
				<p>Converters input text into ASCII code</p>
			</div>
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
		</div>
	);
}
