import './Form.css';
import * as React from "react";

interface FormInputProps {
    type: string;
    label: string;
    name: string;
    placeHolder: string;
    content: string | number;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> =
    ({type, label, name, placeHolder, content, handleInput}) => {
    return (
        <div>
            <label htmlFor={name} className="employee-management-form-label">
                {label}:
            </label>
            <input
                type={type}
                id={name}
                className="employee-management-form-input"
                name={name}
                placeholder={placeHolder}
                onInput={handleInput}
                value={content}/>
        </div>
    )
}