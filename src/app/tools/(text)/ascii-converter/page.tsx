"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function AsciiConverterPage() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;
		setInput(value);
		setOutput(toAscii(value));
	};

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
					<Input
						title="Input"
						value={input}
						onChange={handleInputChange}
						className="flex-1 bg-background dark:bg-background"
					/>
					<Input
						title="Output"
						value={output}
						className="flex-1 bg-background dark:bg-background"
						readOnly
					/>
				</CardContent>
			</Card>
		</div>
	);
}
