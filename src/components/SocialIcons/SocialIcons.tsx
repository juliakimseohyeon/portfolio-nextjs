"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons({
	containerClassName,
	iconClassName,
}: {
	containerClassName?: string;
	iconClassName?: string;
}) {
	const links = [
		{
			href: "https://github.com/juliakimseohyeon",
			label: "GitHub",
			icon: <FaGithub className="size-5" />,
		},
		{
			href: "https://www.linkedin.com/in/julia-kim-seo-hyeon",
			label: "LinkedIn",
			icon: <FaLinkedin className="size-5" />,
		},
		{
			href: "mailto:juliakimseohyeon@gmail.com",
			label: "Email",
			icon: <FaEnvelope className="size-[1.1rem]" />,
		},
	];

	return (
		<div className={cn("flex flex-row gap-3", containerClassName)}>
			{links.map(({ href, label, icon }) => (
				<Link
					key={label}
					href={href}
					target={href.startsWith("mailto") ? undefined : "_blank"}
					rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
					className={cn("icon-link", iconClassName)}
					title={label}
					aria-label={label}
				>
					{icon}
				</Link>
			))}
		</div>
	);
}
