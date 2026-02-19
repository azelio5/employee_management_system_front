import type {Employee} from "../types.ts";
import {createContext, useContext, useState} from "react";
import * as React from "react";
import useAuthenticationService, {type AuthenticationServiceType} from "./AuthenticationService.ts";
import useAxios from "./useAxios.ts";

export type GlobalContextType = {
    employee: Employee | undefined;
    employees: Employee[];
}

export type GlobalContextReducers = {
    updateEmployee: (employee: Employee) => void;
    updateEmployees: (employees: Employee[]) => void;
    authenticationService: AuthenticationServiceType;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

function GlobalContextProvider(props: { children: React.ReactNode }) {

    const axiosRequest = useAxios();

    const [employee, setEmployee] = useState<Employee | undefined>(undefined);
    const [employees, setEmployees] = useState<Employee[]>([]);


    const updateEmployee = (employee: Employee) => {
        setEmployee(employee);
    }
    const updateEmployees = (employees: Employee[]) => {
        setEmployees(employees);
    }

    const reducers: GlobalContextReducers = {
        updateEmployee,
        updateEmployees
    }

    const authenticationService = useAuthenticationService(axiosRequest, reducers);

    return (
        <GlobalContext.Provider value={{
            employee,
            employees,
            authenticationService
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export {useGlobalContext as default, GlobalContextProvider};