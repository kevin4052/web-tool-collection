"use client";

import React, { useRef, useState } from "react";
import ToolWrapper from "../../_components/tool-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import InputTextArea from "@/components/input-text-area";
import { QRCodeSVG } from "qrcode.react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const toolData = {
	name: "QR Code Generator",
	description:
		"Generates QR codes in real time that can be used for a variety of purposes",
};

export default function QrCodeGenerator() {
	const svgRef = useRef<SVGSVGElement>(null);
	const [input, setInput] = useState(
		"https://web-tool-collection-production.up.railway.app/"
	);
	const [imageSize, setImageSize] = useState([500]);
	const [margin, setMargin] = useState([1]);
	const [fileType, setFileType] = useState("");

	const downloadStringAsFile = (data: string, fileName: string) => {
		const a = document.createElement("a");
		a.download = fileName;
		a.href = data;
		a.click();
	};

	const downloadPNG = (svgData: string) => {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		const img = new Image();

		img.onload = () => {
			const borderSize = 10;
			const borderColor = "#ffffff";

			canvas.width = img.width + 2 * borderSize;
			canvas.height = img.height + 2 * borderSize;

			ctx!.fillStyle = borderColor;
			ctx!.fillRect(0, 0, canvas.width, canvas.height);

			const xPosition = (canvas.width - img.width) / 2;
			const yPosition = (canvas.height - img.height) / 2;
			ctx!.drawImage(img, xPosition, yPosition);

			const pngFile = canvas.toDataURL("image/png");

			downloadStringAsFile(pngFile, "qrcode.png");
		};

		img.src = `data:image/svg+xml;base64,${Buffer.from(svgData).toString(
			"base64"
		)}`;
	};

	const downloadSVG = (data: string) => {
		const fileURI =
			"data:image/svg+xml;charset=utf-8," +
			encodeURIComponent('<?xml version="1.0" standalone="no"?>' + data);

		downloadStringAsFile(fileURI, "qrcode.svg");
	};

	const handleImageDownload = () => {
		if (fileType === "") {
			return;
		}

		const svgNode = svgRef.current;
		if (svgNode === null) {
			return;
		}
		const svgData = new XMLSerializer().serializeToString(svgNode);

		switch (fileType) {
			case "SVG":
				downloadSVG(svgData);
				break;
			case "PNG":
				downloadPNG(svgData);
				break;
		}
	};

	return (
		<ToolWrapper name={toolData.name} description={toolData.description}>
			<Card>
				<CardContent className="flex md:flex-row flex-col gap-4 py-4 max-w-full">
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
											ref={svgRef}
											value={input}
											size={imageSize[0]}
											level={"L"}
											bgColor={"#FFFFFF"}
											fgColor={"#000000"}
											marginSize={margin[0]}
											className="aspect-square h-[300px] md:h-[380px]"
											id="qrSvg"
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
								<div className="mt-4">
									<Label>File type</Label>
									<Select onValueChange={(value) => setFileType(value)}>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="SVG">svg</SelectItem>
											<SelectItem value="PNG">png</SelectItem>
										</SelectContent>
									</Select>
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
