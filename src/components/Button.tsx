import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnColor?: 'primary' | 'secondary' | 'success' | 'info' | 'danger';
    btnType?: 'solid' | 'outline' | 'text';
    rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({ btnColor = 'primary', btnType = 'solid', className, rounded = true, ...props }) => {

    const getClassName = (): string => {
        const classes = ["btn", `btn__${btnColor}--${btnType}`];
        if (rounded) classes.push("btn--rounded");
        if (btnType === "solid") classes.push("btn--shadow");
        classes.push(className);
        return classes.join(' ');
    }

    return (
        <button className={getClassName()} {...props} />
    );
}

export default Button;
