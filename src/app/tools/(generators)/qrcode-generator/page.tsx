"use client";

import React, { useState } from "react";
import ToolWrapper from "../../_components/tool-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import InputTextArea from "@/components/input-text-area";
import { QRCodeSVG } from "qrcode.react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const toolData = {
	name: "QR Code Generator",
	description:
		"Generates QR codes in real time that can be used for a variety of purposes",
};

export default function QrCodeGenerator() {
	const [input, setInput] = useState(
		"https://web-tool-collection-production.up.railway.app/"
	);
	const [imageSize, setImageSize] = useState([256]);
	const [margin, setMargin] = useState([1]);

	// useEffect(() => {
	// 	handleImageUpdate();
	// }, []);

	// const handleImageUpdate = () => {
	// 	const svgNode = document.getElementById("qrSvg");
	// 	const svgString = new XMLSerializer().serializeToString(
	// 		svgNode as HTMLElement
	// 	);
	// 	const svgUrl = `data:image/svg+xml;charset=utf-8;base64,${btoa(svgString)}`;
	// 	const image = new Image();
	// };

	const handleImageDownload = () => {};

	return (
		<ToolWrapper name={toolData.name} description={toolData.description}>
			<Card>
				<CardContent className="flex md:flex-row flex-col gap-4 py-4">
					<div className="flex flex-col flex-1 gap-4">
						<InputTextArea
							title="QR Code Text"
							className=""
							textValue={input}
							onTextChange={(value) => setInput(value)}
							resize={false}
						/>
						<Card>
							<CardContent className="flex flex-col gap-4 py-4">
								<div>
									<Label>Error Correction Level</Label>
									<RadioGroup defaultValue="M" className="flex flex-row gap-4">
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="L" id="r1" />
											<Label htmlFor="r1">L</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="M" id="r2" />
											<Label htmlFor="r2">M</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="H" id="r3" />
											<Label htmlFor="r3">H</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Q" id="r4" />
											<Label htmlFor="r4">Q</Label>
										</div>
									</RadioGroup>
								</div>
								<div>
									<Label>Margin</Label>
									<Slider
										defaultValue={margin}
										max={20}
										min={0}
										step={1}
										onValueChange={(value) => setMargin(value)}
									/>
								</div>
								<div>QR Code Color</div>
							</CardContent>
						</Card>
					</div>
					<div className="w-full md:w-[400px]">
						<Card className="mb-4">
							<CardContent className="p-4">
								<div className="aspect-square flex justify-center items-center">
									{input && (
										<QRCodeSVG
											value={input}
											size={imageSize[0]}
											level={"L"}
											bgColor={"#FFFFFF"}
											fgColor={"#000000"}
											marginSize={margin[0]}
											className="h-[300px] md:h-[380px]"
										/>
									)}
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="py-4">
								<div>
									<Label>Image Size {imageSize[0]}</Label>
									<Slider
										defaultValue={imageSize}
										max={1024}
										min={50}
										step={1}
										onValueChange={(value) => setImageSize(value)}
										className="my-2"
									/>
								</div>
							</CardContent>
						</Card>
						<div className="w-full py-4 px-2">
							<Button className="w-full" onClick={handleImageDownload}>
								<DownloadIcon className="w-6 h-6" />
								Download
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</ToolWrapper>
	);
}
