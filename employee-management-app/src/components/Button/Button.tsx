import './Button.css';
import * as React from "react";

interface ButtonProps {
    type: 'primary' | 'secondary' | 'error' | 'transparent';
    children: React.ReactNode;
    height: string;
    width: string;
    id: string;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button:React.FC<ButtonProps> = ({type, children, height="fit-content", width="100%", id="", handleClick}) =>{

}
