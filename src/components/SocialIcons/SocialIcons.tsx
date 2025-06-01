"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";

export default function SocialIcons({
	containerClassName,
	buttonClassName,
	variant,
}: {
	containerClassName?: string;
	buttonClassName?: string;
	variant?: "ghost" | "default";
}) {
	return (
		<div className={cn("flex flex-row gap-4", containerClassName)}>
			<Link href="https://github.com/juliakimseohyeon" target="_blank">
				<Button
					className={cn("size-12 cursor-pointer", buttonClassName)}
					variant={variant}
				>
					<FaGithub className="size-6" />
				</Button>
			</Link>
			<Link
				href="https://www.linkedin.com/in/julia-kim-seo-hyeon"
				target="_blank"
			>
				<Button
					className={cn("size-12 cursor-pointer", buttonClassName)}
					variant={variant}
				>
					<FaLinkedin className="size-6" />
				</Button>
			</Link>
			<Link href="mailto:juliakimseohyeon@gmail.com" target="_blank">
				<Button
					className={cn("size-12 cursor-pointer", buttonClassName)}
					variant={variant}
				>
					<FaEnvelope className="size-5" />
				</Button>
			</Link>
		</div>
	);
}
