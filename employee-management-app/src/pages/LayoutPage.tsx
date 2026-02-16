import "./LayoutPage.css"
import {Outlet} from "react-router-dom";

export default function LayoutPage() {
    return (
        <div className="layout-page page">
            <>Layout Page</>
            <Outlet/>
        </div>
    )
}