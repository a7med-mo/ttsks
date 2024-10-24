import { NavLink } from "react-router-dom"
import "../services/services.css"

export default function servicesNav() {
    return (
        <>
            <div className="nav">
                <ul>
                    <NavLink to={""}>Contact Us Form</NavLink>
                    <NavLink to={"/service/emails"}>Emails</NavLink>
                    <NavLink to={"/service/locations"}>Locations</NavLink>
                    <NavLink to={"/service/phone-number"}>Phone Number</NavLink>
                </ul>
            </div>
        </>
    )
}
