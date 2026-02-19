import useGlobalContext, {type GlobalContextType} from "../services/GlobalContext.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function loginPage(){

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
            <div className="page-container-center">
                <h1>Company Portal</h1>
                <>Login Form</>
            </div>

        </div>
    )
}