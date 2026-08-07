import Link from "next/link";

interface ButtonProps {
    buttonText: string;
    link: string;
    size?: "small" | "medium" | "large";
    buttonStyle: "onLightBackground" | "onDarkBackground";
    hoverStyle: "oliveFill" | "redFill";
    filledFromStart?: boolean;
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
    small: "text-[12.5px] px-4 py-2.5",
    medium: "text-[14px] px-8 py-4",
    large: "text-[16px] px-10 py-5",
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
        border: "border-red",
    },
};

const hoveredButtonStyles: { [key: string]: HoveredButtonStylesType } = {
    oliveFill: {
        hoverTextColor: "hover:text-cream",
        hoverBackgroundColor: "hover:bg-olive",
        hoverBorder: "hover:border-olive",
        textColor: "text-cream",
        backgroundColor: "bg-olive",
        border: "border-olive",
    },
    redFill: {
        hoverTextColor: "hover:text-cream",
        hoverBackgroundColor: "hover:bg-red",
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

export default function Button({ buttonText, link, size = "medium", buttonStyle, hoverStyle, filledFromStart = false }: ButtonProps) {
    const { textColor, backgroundColor, border, hoveredTextColor, hoveredBackgroundColor } = getButtonStyles(buttonStyle, hoverStyle, filledFromStart);

    return (
        <Link
            href={link}
            className={`self-start tracking-wide rounded-full no-undeline transition-colors ${sizeClasses[size]}
            ${textColor}  ${backgroundColor} border ${border} 
            ${hoveredBackgroundColor} 
            ${hoveredTextColor} ${sizeClasses[size]} hover:font-bold`}
        >
            {buttonText}
        </Link>
    )
}

