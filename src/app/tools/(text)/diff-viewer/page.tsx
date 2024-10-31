"use client";

import React, { useState } from "react";
import ReactDiffViewer from "react-diff-viewer-continued";
import ToolWrapper from "../../_components/tool-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import InputTextArea from "@/components/input-text-area";
import { Button } from "@/components/ui/button";
import { GitCompareArrows } from "lucide-react";
import { useTheme } from "next-themes";

const toolData = {
	name: "Text DIFF Checker",
	description:
		"Fast and secure comparison of two texts and easy verification of differences.",
};

export default function DiffViewerPage() {
	const [text1, setText1] = useState("");
	const [text2, setText2] = useState("");
	const { theme } = useTheme();

	const handleCompare = () => {
		console.log({ text1, text2 });
	};

	return (
		<ToolWrapper name={toolData.name} description={toolData.description}>
			<Card>
				<CardContent className="flex flex-col gap-4 py-4">
					<div className="flex flex-row gap-4">
						<InputTextArea
							title="Original text"
							textValue={text1}
							className="flex-1"
							onTextChange={(value) => setText1(value)}
						/>
						<InputTextArea
							title="Modified text"
							textValue={text2}
							className="flex-1"
							onTextChange={(value) => setText2(value)}
						/>
					</div>
					<div className="flex justify-center items-center">
						<Button onClick={handleCompare}>
							<GitCompareArrows className="w-6 h-6" /> Compare
						</Button>
					</div>
					<div>
						<ReactDiffViewer
							oldValue={text1}
							newValue={text2}
							splitView
							useDarkTheme={theme === "dark"}
						/>
					</div>
				</CardContent>
			</Card>
		</ToolWrapper>
	);
}
