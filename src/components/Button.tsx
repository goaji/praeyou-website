type ButtonProps = {
    buttonText: string;
    link: string;
    textColor?: string;
    backgroundColor?: string;
    border?: string;
    size?: "small" | "medium" | "large";
}

const sizeClasses = {
    small: "text-[12.5px] px-4 py-2.5",
    medium: "text-[14px] px-8 py-4",
    large: "text-[16px] px-10 py-5",
};

export default function Button({ buttonText, link, textColor = "text-cream", backgroundColor = "bg-red", border = "border-red", size = "medium" }: ButtonProps) {
    return (
        <a
            href={link}
            className={`tracking-wide ${textColor} ${backgroundColor} border ${border} rounded-sm ${sizeClasses[size]}`}
        >
            {buttonText}
        </a>
    )
}