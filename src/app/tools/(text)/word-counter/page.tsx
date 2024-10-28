"use client";

import InputTextArea from "@/components/input-text-area";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

type counterStats = {
	Title: string;
	Description: string;
	Value: number;
};

export default function WordCounter() {
	const [textData, setTextData] = useState("");
	const [wordsCounted, setWordsCounted] = useState(0);
	const [characters, setCharacters] = useState(0);
	const counterStats: counterStats[] = [
		{
			Title: "Words",
			Description: "Total words",
			Value: wordsCounted,
		},
		{
			Title: "Characters",
			Description: "Total characters",
			Value: characters,
		},
	];

	useEffect(() => {
		const totalWords = textData.split(" ").filter((x) => x !== "").length;
		const totalCharacters = textData.length;

		setWordsCounted(totalWords);
		setCharacters(totalCharacters);
	}, [textData]);

	return (
		<div className="min-h-screen w-full mx-auto max-w-[1680px] flex flex-col md:px-6 px-3">
			<div className="flex flex-col my-8">
				<h3 className="font-semibold text-2xl">Word Counter</h3>
				<p>
					Counts the number of words and characters that are typed in the text
					area
				</p>
			</div>
			<Card>
				<CardContent className="flex md:flex-row flex-col gap-4 py-4 ">
					<InputTextArea
						title="Enter text data"
						textValue={textData}
						onTextChange={(value) => setTextData(value)}
						className="flex-1"
					/>
					<Card className="min-h-fit md:w-48 w-full pt-2">
						<CardContent>
							{counterStats.map((counter: counterStats, index: number) => {
								return (
									<div key={counter.Title}>
										<div className="flex items-center justify-between gap-3 py-2">
											<div>
												<h4>{counter.Title}</h4>
												<p className="mt-0.5 text-xs">{counter.Description}</p>
											</div>
											<div className="font-semibold">{counter.Value}</div>
										</div>
										{index !== counterStats.length - 1 && <Separator />}
									</div>
								);
							})}
						</CardContent>
					</Card>
				</CardContent>
			</Card>
		</div>
	);
}
