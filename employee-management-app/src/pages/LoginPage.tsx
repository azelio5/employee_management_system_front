import useGlobalContext, {type GlobalContextType} from "../services/GlobalContext.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {LoginForm} from "../components/LoginForm/LoginForm.tsx";
import '../App.css'


export default function LoginPage(){

    const {employee} = useGlobalContext() as GlobalContextType;
    const navigate = useNavigate();

    const navigateEmployeePortal = () => {
        navigate('/portal/admin/myself');
    }

    useEffect(() => {
        if(employee){
            navigateEmployeePortal();
        }
    },[employee])

    return(
        <div className="page">
            <div className="page-content-center">
                <h1>Company Portal</h1>
                <LoginForm/>
            </div>

        </div>
    )
}
