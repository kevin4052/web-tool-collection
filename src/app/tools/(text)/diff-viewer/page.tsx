"use client";

import React, { useEffect, useState } from "react";
import ReactDiffViewer from "react-diff-viewer-continued";
import ToolWrapper from "@/app/tools/_components/tool-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import InputTextArea from "@/components/input-text-area";
import { Button } from "@/components/ui/button";
import { GitCompareArrows } from "lucide-react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";

const toolData = {
	name: "Text DIFF Checker",
	description:
		"Fast and secure comparison of two texts and easy verification of differences.",
};

export default function DiffViewerPage() {
	const [text1, setText1] = useState("");
	const [text2, setText2] = useState("");
	const [isCompareHidden, setIsCompareHidden] = useState(true);
	const { theme } = useTheme();

	const handleCompare = () => {
		if (text1 !== "" && text2 !== "") {
			setIsCompareHidden(false);
		}
	};

	useEffect(() => {
		if (text1 === "" || text2 === "") {
			setIsCompareHidden(true);
		}
	}, [text1, text2]);

	return (
		<ToolWrapper name={toolData.name} description={toolData.description}>
			<Card className="mb-4">
				<CardContent className="flex flex-col gap-4 py-4">
					<div className="flex sm:flex-row flex-col gap-4">
						<InputTextArea
							title="Original text"
							textValue={text1}
							className="flex-1"
							resize={false}
							onTextChange={(value) => setText1(value)}
						/>
						<InputTextArea
							title="Modified text"
							textValue={text2}
							className="flex-1"
							resize={false}
							onTextChange={(value) => setText2(value)}
						/>
					</div>
					<div className="flex flex-col justify-center items-center">
						<Button onClick={handleCompare}>
							<GitCompareArrows className="w-6 h-6" /> Compare
						</Button>
						<p className="text-sm my-2">Text is not sent to the server</p>
					</div>
					{!isCompareHidden && (
						<div>
							<Separator className="mb-4" />
							<ReactDiffViewer
								oldValue={text1}
								newValue={text2}
								splitView
								useDarkTheme={theme === "dark"}
							/>
						</div>
					)}
				</CardContent>
			</Card>
		</ToolWrapper>
	);
}
