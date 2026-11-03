import Link from "next/link";

interface ButtonProps {
    buttonText: string;
    link: string;
    size?: "small" | "medium" | "large" | "header";
    buttonStyle: "onLightBackground" | "onDarkBackground";
    hoverStyle: "oliveFill" | "redFill";
    filledFromStart?: boolean;
    onClick?: () => void;
}

interface ButtonStylesType {
    textColor: string;
    backgroundColor: string;
    border: string;
}

interface HoveredButtonStylesType extends ButtonStylesType {
    hoverTextColor: string;
    hoverBackgroundColor: string;
    hoverBorder: string;
}

const sizeClasses = {
    small: "text-caption px-4 py-2.5",
    medium: "text-small px-8 py-4",
    large: "text-body px-10 py-5",
    /** Same text size as the desktop header links (17px), with less vertical padding so the header keeps its height. */
    header: "text-lead px-7 py-3 whitespace-nowrap",
};

const buttonStyles: { [key: string]: ButtonStylesType } = {
    onLightBackground: {
        textColor: "text-ink",
        backgroundColor: "bg-transparent",
        border: "border-olive",
    },
    onDarkBackground: {
        textColor: "text-cream",
        backgroundColor: "bg-transparent",
        border: "border-olive",
    },
};

// Each hover class has a focus-visible twin, so keyboard users see the same change as mouse users.
const hoveredButtonStyles: { [key: string]: HoveredButtonStylesType } = {
    oliveFill: {
        hoverTextColor: "hover:text-cream focus-visible:text-cream",
        hoverBackgroundColor: "hover:bg-olive focus-visible:bg-olive",
        hoverBorder: "hover:border-olive",
        textColor: "text-cream",
        backgroundColor: "bg-olive",
        border: "border-olive",
    },
    redFill: {
        hoverTextColor: "hover:text-cream focus-visible:text-cream",
        hoverBackgroundColor: "hover:bg-red focus-visible:bg-red",
        hoverBorder: "hover:border-red",
        textColor: "text-cream",
        backgroundColor: "bg-red",
        border: "border-red",
    },
};

const getButtonStyles = (buttonStyle: string, hoverStyle: string, filledFromStart: boolean) => {
    const textColor = `${filledFromStart ? hoveredButtonStyles[hoverStyle].textColor : buttonStyles[buttonStyle].textColor}`;
    const backgroundColor = `${filledFromStart ? hoveredButtonStyles[hoverStyle].backgroundColor : buttonStyles[buttonStyle].backgroundColor}`;
    const border = `${filledFromStart ? hoveredButtonStyles[hoverStyle].border : buttonStyles[buttonStyle].border}`;
    const hoveredTextColor = `${hoveredButtonStyles[hoverStyle].hoverTextColor}`;
    const hoveredBackgroundColor = `${hoveredButtonStyles[hoverStyle].hoverBackgroundColor}`;

    return {
        textColor,
        backgroundColor,
        border,
        hoveredTextColor,
        hoveredBackgroundColor
    };
}

export default function Button({ buttonText, link, size = "medium", buttonStyle, hoverStyle, filledFromStart = false, onClick }: ButtonProps) {
    const { textColor, backgroundColor, border, hoveredTextColor, hoveredBackgroundColor } = getButtonStyles(buttonStyle, hoverStyle, filledFromStart);

    return (
        <Link
            href={link}
            onClick={onClick}
            className={`self-start tracking-wide rounded-full no-underline transition-colors ${sizeClasses[size]}
            ${textColor}  ${backgroundColor} border ${border} 
            ${hoveredBackgroundColor} 
            ${hoveredTextColor} hover:font-bold focus-visible:font-bold`}
        >
            {/* An invisible bold copy reserves the bold width, so the button doesn't grow (and push its neighbours) on hover */}
            <span className="inline-grid justify-items-center">
                <span className="col-start-1 row-start-1 invisible font-bold" aria-hidden="true">{buttonText}</span>
                <span className="col-start-1 row-start-1">{buttonText}</span>
            </span>
        </Link>
    )
}

