"use client";

import React, { useEffect, useState } from "react";
import ToolWrapper from "@/app/tools/_components/tool-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import InputTextArea from "@/components/input-text-area";
import ReadyOnlyTextArea from "@/components/readonly-text-area";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import dynamic from "next/dynamic";

// const ReactJson = dynamic(() => import("react-json-view"));

const toolData = {
	name: "JSON Formatter",
	description: "Checks and formats JSON text in real time.",
};

export default function JSONFormatterPage() {
	const [text1, setText1] = useState("{}");
	const [text2, setText2] = useState("{}");
	const [spaces, setSpaces] = useState(2);
	// const [json, setJson] = useState({});

	const tryParseJson = (value: string): string => {
		try {
			const parsedJSON = JSON.parse(value);
			if (typeof parsedJSON !== "object") {
				return "{}";
			}

			return parsedJSON;
		} catch (error) {
			const msg = error instanceof Error ? error.message : "";
			return `{errorMessage: ${msg}}`;
		}
	};

	useEffect(() => {
		const parsedJSON = tryParseJson(text1);
		const jsonString = JSON.stringify(parsedJSON, null, spaces);
		setText2(jsonString);
		// setJson(parsedJSON);
	}, [text1, spaces]);

	return (
		<ToolWrapper name={toolData.name} description={toolData.description}>
			<Card className="mb-4">
				<CardContent className="flex flex-col gap-4 py-4">
					<div>
						<Label>Indent Spaces</Label>
						<RadioGroup
							defaultValue={spaces.toString()}
							className="flex flex-row gap-4 py-2"
							onValueChange={(value) => setSpaces(Number(value))}
						>
							{["2", "4", "6", "8"].map((spacing) => (
								<div
									className="flex items-center space-x-2"
									key={`${spacing}indents`}
								>
									<RadioGroupItem value={spacing} id={`r${spacing}`} />
									<Label htmlFor={`r${spacing}`}>{spacing}</Label>
								</div>
							))}
						</RadioGroup>
					</div>
					<div className="flex sm:flex-row flex-col gap-4 min-h-[400px]">
						<InputTextArea
							title="Input"
							textValue={text1}
							className="flex-1"
							height="xl"
							resize={false}
							onTextChange={(value) => setText1(value)}
						/>
						<ReadyOnlyTextArea
							title="Output"
							textValue={text2}
							className="flex-1"
							height="xl"
							resize={false}
							onTextChange={(value) => setText2(value)}
						/>
					</div>
					{/* <div>
						<ReactJson
							src={json}
							theme={"bright"}
							enableClipboard={false}
							displayDataTypes={false}
							indentWidth={spaces}
						/>
					</div> */}
				</CardContent>
			</Card>
		</ToolWrapper>
	);
}
