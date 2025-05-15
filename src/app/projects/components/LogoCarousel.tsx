import Image from "next/image";
import { carouselImages } from "./CarouselImages";

const CarouselItem = () => {
	return carouselImages.map((image) => (
		<div
			className="flex flex-row w-full h-full transition duration-200"
			key={image}
		>
			<div className="h-16 w-16 flex items-center justify-center">
				<Image src={image} alt={image} />
			</div>
		</div>
	));
};

export default function LogoCarousel() {
	return (
		<div className="overflow-hidden flex flex-row relative h-24 w-full">
			<div className="flex flex-row gap-4 absolute left-0 w-auto animate-slide">
				<CarouselItem />
				<CarouselItem />
			</div>
		</div>
	);
}
