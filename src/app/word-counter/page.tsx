"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState } from "react";

export default function WordCounter() {
	const [textData, setTextData] = useState("");
	const [wordsCounted, setWordsCounted] = useState(0);

	const handleTextInput = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setTextData(e.target.value);
		setWordsCounted(textData.split(" ").length);
	};

	return (
		<div className="min-h-screen mx-8">
			<div className="flex flex-col my-4">
				<h3 className="font-semibold text-2xl">Word Counter</h3>
				<p>
					Counts the number of words and characters that are typed in the text
					area
				</p>
			</div>
			<Card className="bg-zinc-400">
				<CardContent className="grid gap-4 py-4">
					<div className="grid w-full gap-1.5">
						<Label htmlFor="inputText">Enter text data</Label>
						<Textarea
							className="min-h-[200px]"
							placeholder="Type your message here."
							id="inputText"
							onChange={handleTextInput}
							value={textData}
						/>
					</div>
					<Card>
						<CardContent>
							<div className="flex items-center justify-between gap-3 py-2">
								<div>
									<h4>Words</h4>
									<p className="mt-0.5 text-xs">Total words</p>
								</div>
								<div className="font-semibold">{wordsCounted}</div>
							</div>
						</CardContent>
					</Card>
				</CardContent>
			</Card>
		</div>
	);
}
