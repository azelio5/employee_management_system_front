import type {Axios} from "axios";
import type {GlobalContextReducers} from "./GlobalContext.tsx";
import {useState} from "react";

export type AuthenticationServiceType = {
    loadingEmployeeInformation: boolean;
    employeeAuthenticationError: boolean;
    submitLogin: (email: string, password: string) => void;
}

export default function useAuthenticationService(request: Axios,
                                                 reducers: GlobalContextReducers): AuthenticationServiceType {
    const {updateEmployee} = reducers;

    const [loadingEmployeeInformation, setLoadingEmployeeInformation] = useState<boolean>(false);
    const [employeeAuthenticationError, setEmployeeAuthenticationError] = useState<boolean>(false);

    const submitLogin = async (email: string, password: string) => {
        try {
            setLoadingEmployeeInformation(true);
            setEmployeeAuthenticationError(false);

            const response = await request.post("auth/login", {email, password});

            updateEmployee(response.data);
        } catch (error) {
            console.error(error);
            setEmployeeAuthenticationError(true);
        } finally {
            setLoadingEmployeeInformation(false);
        }
    }
    return {
        loadingEmployeeInformation,
        employeeAuthenticationError,
        submitLogin
    }
}