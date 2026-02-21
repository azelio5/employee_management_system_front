import './Button.css';
import * as React from "react";

interface ButtonProps {
    type: 'primary' | 'secondary' | 'error' | 'transparent';
    children: React.ReactNode;
    height?: string;          // сделали optional
    width?: string;
    id?: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
                                                  type,
                                                  children,
                                                  height = "fit-content",
                                                  width = "100%",
                                                  id = "",
                                                  handleClick,
                                              }) => {
    return (
        <button
            id={id}
            type="button"                    // ← добавили
            className={`employee-management-button employee-management-button-${type}`}
            style={{ height, width }}        // ← правильный объект
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
