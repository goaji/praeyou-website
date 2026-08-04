type ButtonProps = {
    buttonText: string;
    link: string;
    textColor?: string;
    backgroundColor?: string;
    border?: string;
}

export default function Button({ buttonText, link, textColor = "text-cream", backgroundColor = "bg-gold", border = "border-gold" }: ButtonProps) {
    return (
        <a
            href={link}
            className={`text-[14px] tracking-wide ${textColor} ${backgroundColor} border ${border} px-8 py-4 rounded-sm`}
        >
            {buttonText}
        </a>
    )
}