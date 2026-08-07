import Link from "next/link";

type ButtonProps = {
    buttonText: string;
    link: string;
    size?: "small" | "medium" | "large";
    buttonStyle: "onLightBackground" | "onDarkBackground";
    hoverStyle: "oliveFill" | "redFill";
    filledFromStart?: boolean;
}

type ButtonStylesType = {
    textColor: string;
    backgroundColor: string;
    border: string;
}

type HoveredButtonStylesType = {
    hoverTextColor: string;
    hoverBackgroundColor: string;
}

const sizeClasses = {
    small: "text-[12.5px] px-4 py-2.5",
    medium: "text-[14px] px-8 py-4",
    large: "text-[16px] px-10 py-5",
};

const buttonStyles: { [key: string]: ButtonStylesType } = {
    onLightBackground: { textColor: "ink", backgroundColor: "transparent", border: "olive" },
    onDarkBackground: { textColor: "cream", backgroundColor: "transparent", border: "red" },
}

const hoveredButtonStyles: { [key: string]: HoveredButtonStylesType } = {
    oliveFill: { hoverTextColor: "cream", hoverBackgroundColor: "olive" },
    redFill: { hoverTextColor: "cream", hoverBackgroundColor: "red" }
};

const getButtonStyles = (buttonStyle: string, hoverStyle: string, filledFromStart: boolean) => {
    const textColor = `text-${filledFromStart ? hoveredButtonStyles[hoverStyle].hoverTextColor : buttonStyles[buttonStyle].textColor}`;
    const backgroundColor = `bg-${filledFromStart ? hoveredButtonStyles[hoverStyle].hoverBackgroundColor : buttonStyles[buttonStyle].backgroundColor}`;
    const border = `border-${filledFromStart ? hoveredButtonStyles[hoverStyle].hoverBackgroundColor : buttonStyles[buttonStyle].border}`;
    const hoveredTextColor = `hover:text-${hoveredButtonStyles[hoverStyle].hoverTextColor}`;
    const hoveredBackgroundColor = `hover:bg-${hoveredButtonStyles[hoverStyle].hoverBackgroundColor}`;

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

