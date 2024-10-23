import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-5 items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-15 font-[family-name:var(--font-geist-sans)]">
			<div className="row-span-3">
				<h1>
					<span>Web Tool Collection</span>
				</h1>
				<p>Collection of tools to help with web development</p>
				<div>
					<Link href={"/tools/word-counter"}>
						<Button>Tools</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
