import React from "react";
import ToolWrapper from "@/app/tools/_components/tool-wrapper";
import { Card, CardContent } from "@/components/ui/card";

const toolData = {
	name: "JSON Formatter",
	description: "Checks and formats JSON text in real time.",
};

export default function JSONFormatterPage() {
	return (
		<ToolWrapper name={toolData.name} description={toolData.description}>
			<Card>
				<CardContent>JSON formatter input and output</CardContent>
			</Card>
		</ToolWrapper>
	);
}
