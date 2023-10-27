import { cn } from "@/libs/utils";
import { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type="button",
    ...props
}, ref) => {
    return(
        <button
        ref={ref}
        className={cn(
            `w-auto rounded-full bg-black text-white border-transparent px-5 py-3
            disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition
            `,
            className
        )}
        {...props}
        >
            {children}
        </button>
    )
})


Button.displayName = "Button"


export default Button