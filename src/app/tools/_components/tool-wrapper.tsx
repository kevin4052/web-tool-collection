import React from "react";

type Props = {
	name: string;
	description: string;
	children: React.ReactNode;
};

export default function ToolWrapper({ name, description, children }: Props) {
	return (
		<div className="min-h-screen w-full mx-auto max-w-[1680px] flex flex-col md:px-6 px-3">
			<div className="flex flex-col my-8">
				<h3 className="font-semibold text-2xl">{name}</h3>
				<p>{description}</p>
			</div>
			{children}
		</div>
	);
}
