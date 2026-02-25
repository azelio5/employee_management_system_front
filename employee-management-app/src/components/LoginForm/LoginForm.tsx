import * as React from "react";
import useGlobalContext, {type GlobalContextType} from "../../services/GlobalContext.tsx";
import {useState} from "react";
import {Form} from "../Form/Form";
import {Loading} from "../Loading/Loading";
import {FormInput} from "../Form/FormInput.tsx";

interface EmployeeLogin {
    email: string;
    password: string;
}

export const LoginForm: React.FC<EmployeeLogin> = () => {

    const {authenticationService} = useGlobalContext() as GlobalContextType;
    const [employeeLogin, setEmployeeLogin] = useState<EmployeeLogin>({
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmployeeLogin({
            ...employeeLogin,
            [e.target.id]: e.target.value
        })

    }

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        authenticationService.submitLogin(employeeLogin.email, employeeLogin.password);

    }

    return (
        <Form
            buttonText={"Login"}
            error={authenticationService.employeeAuthenticationError}
            errorMessage={"Invalid email or password"}
            action={handleLogin}
            width={"25rem"}
            height={authenticationService.employeeAuthenticationError ? "20rem" : "17rem"}>
            {authenticationService.loadingEmployeeInformation ?
                <Loading/>
                :
                <>
                    <FormInput type={"email"}
                               label={"Email"}
                               name={"email"}
                               placeHolder={"Employee Email"}
                               content={employeeLogin.email}
                               handleInput={handleInputChange}
                    />
                    <FormInput type={"password"}
                               label={"Password"}
                               name={"password"}
                               placeHolder={"Employee Password"}
                               content={employeeLogin.password}
                               handleInput={handleInputChange}
                    />
                </>
            }
        </Form>
    )
}