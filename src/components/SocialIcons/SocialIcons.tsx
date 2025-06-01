"use client";

import { cn } from "@/lib/utils";
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
			<Button
				className={cn("size-12 cursor-pointer", buttonClassName)}
				variant={variant}
				onClick={() =>
					window.open("https://github.com/juliakimseohyeon", "_blank")
				}
			>
				<FaGithub className="size-6" />
			</Button>
			<Button
				className={cn("size-12 cursor-pointer", buttonClassName)}
				variant={variant}
				onClick={() =>
					window.open(
						"https://www.linkedin.com/in/julia-kim-seohyeon/",
						"_blank",
					)
				}
			>
				<FaLinkedin className="size-6" />
			</Button>
			<Button
				className={cn("size-12 cursor-pointer", buttonClassName)}
				variant={variant}
				onClick={() =>
					window.open("mailto:juliakimseohyeon@gmail.com", "_blank")
				}
			>
				<FaEnvelope className="size-5" />
			</Button>
		</div>
	);
}
