import {ReactEventHandler} from "react";

export const imageOnError: ReactEventHandler<HTMLImageElement> = ({ currentTarget}) => {
	currentTarget.alt = `Placeholder image for ${currentTarget.src}`;
	console.warn(`Missing ${currentTarget.src}. Using placeholder image instead.`)
	currentTarget.onerror = null;
	currentTarget.src = "assets/placeholder.png";
}