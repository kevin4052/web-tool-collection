"use client";

import InputTextArea from "@/components/input-text-area";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function WordCounter() {
	const [textData, setTextData] = useState("");
	const [wordsCounted, setWordsCounted] = useState(0);
	const [characters, setCharacters] = useState(0);

	useEffect(() => {
		const totalWords = textData.split(" ").filter((x) => x !== "").length;
		const totalCharacters = textData.length;

		setWordsCounted(totalWords);
		setCharacters(totalCharacters);
	}, [textData]);

	return (
		<div className="min-h-screen mx-8">
			<div className="flex flex-col my-4">
				<h3 className="font-semibold text-2xl">Word Counter</h3>
				<p>
					Counts the number of words and characters that are typed in the text
					area
				</p>
			</div>
			<Card>
				<CardContent className="grid grid-cols-4 gap-4 py-4">
					<InputTextArea
						title="Enter text data"
						textValue={textData}
						onTextChange={(value) => setTextData(value)}
					/>
					<Card>
						<CardContent>
							<div className="flex items-center justify-between gap-3 py-2">
								<div>
									<h4>Words</h4>
									<p className="mt-0.5 text-xs">Total words</p>
								</div>
								<div className="font-semibold">{wordsCounted}</div>
							</div>
							<div className="flex items-center justify-between gap-3 py-2">
								<div>
									<h4>Characters</h4>
									<p className="mt-0.5 text-xs">Total characters</p>
								</div>
								<div className="font-semibold">{characters}</div>
							</div>
						</CardContent>
					</Card>
				</CardContent>
			</Card>
		</div>
	);
}
