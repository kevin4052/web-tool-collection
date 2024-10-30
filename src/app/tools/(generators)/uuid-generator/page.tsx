"use client";

import ReadyOnlyTextArea from "@/components/readonly-test-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SparklesIcon } from "lucide-react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function UuidPage() {
	const [quantity, setQuantity] = useState(1);
	const [outputText, setOutputText] = useState("");

	const generateUUIDs = () => {
		const uuids = [];
		const limit = quantity <= 100 && quantity >= 1 ? quantity : 1;

		for (let i = 0; i < limit; i++) {
			uuids.push(uuidv4());
		}

		setOutputText(uuids.join("\n"));
	};

	const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		const num = Number(e.target.value);
		setQuantity(num);
	};

	return (
		<div className="min-h-screen w-full mx-auto max-w-[1680px] flex flex-col md:px-6 px-3">
			<div className="flex flex-col my-8">
				<h3 className="font-semibold text-2xl">UUID Generator</h3>
				<p>Generate UUID for version 4.</p>
			</div>
			<Card>
				<CardContent className="flex flex-col gap-4 py-4 ">
					<div className="flex flex-col mb-4">
						<h4 className="mb-3 font-semibold">Generate</h4>
						<div className="flex gap-4">
							<Button onClick={generateUUIDs}>
								<SparklesIcon className="w-6 h-6" />
								Generate UUID
							</Button>
							<div className="flex gap-3 items-center">
								<span className="text-sm">X</span>
								<span>Quantity</span>
								<Input
									type="number"
									min="1"
									max="100"
									value={quantity}
									onChange={handleQuantity}
								/>
							</div>
						</div>
					</div>
					<ReadyOnlyTextArea
						title="Output"
						textValue={outputText}
						onTextChange={setOutputText}
						className="flex-1"
					/>
				</CardContent>
			</Card>
		</div>
	);
}
