import "../services/services.css"
import { Outlet } from "react-router-dom";

export default function servicesDesc() {
    return (
        <>
            <div>
                <h3 className="servicesDesc"><Outlet /></h3>
            </div>
        </>
    )
}
