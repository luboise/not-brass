import { ReactEventHandler } from "react";

export const imageOnError: ReactEventHandler<HTMLImageElement> = ({ currentTarget }) => {
    currentTarget.alt = `Placeholder image for ${currentTarget.src}`;
    console.warn(`Missing ${currentTarget.src}. Using placeholder image instead.`)
    currentTarget.onerror = null;
    currentTarget.src = "assets/placeholder.png";
}

export default function Image(props: { src: string, align?: string, width?: string, height?: string }) {
    const imgStyle: React.CSSProperties = {};

    if (props.height) {
        imgStyle.height = props.height;
    };

    if (props.width) {
        imgStyle.width = props.width;
    }

    if (props.align) {
        const lower = props.align.toLowerCase();
        imgStyle.position = "absolute";

        if (lower.includes("l")) {
            imgStyle.left = 0;
        }
        if (lower.includes("r")) {
            imgStyle.right = 0;
        }
        if (lower.includes("t")) {
            imgStyle.top = 0;
        }
        if (lower.includes("b")) {
            imgStyle.bottom = 0;
        }
    }

    return (
        <>
            <img src={props.src} onError={imageOnError} style={imgStyle} />
        </>
    )
}
