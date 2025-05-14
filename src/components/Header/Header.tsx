import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";
import logoJulia from "../../../public/logos/logo-julia.svg";

export default function Header() {
	return (
		<header className="p-4">
			<nav className="flex flex-row justify-between items-center">
				<Link href="/" className="flex flex-row items-center">
					<Image src={logoJulia} alt="Julia Logo" className="max-w-16" />
					<p className="font-bold transition text-left leading-5">Julia Kim</p>
				</Link>
				<div className="flex flex-row gap-4 lg:flex-row-reverse lg:gap-10">
					{/* <Toggle toggle={toggle} theme={theme} toggleTheme={toggleTheme} /> */}

					{/* {!isDesktop && !hamburgerOpen && ( */}

					<Menu />

					{/* )} */}

					{/* {(isDesktop || hamburgerOpen) && (
						<HamburgerMenu
							hamburgerOpen={hamburgerOpen}
							setHamburgerOpen={setHamburgerOpen}
						/>
					)} */}
				</div>
			</nav>
		</header>
	);
}
