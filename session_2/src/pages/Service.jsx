import ServicesDesc from "../components/services/servicesDesc";
import ServicesNav from "../components/services/ServicesNav";


export default function Service() {
    return (
        <>
            <div className="servicesBody">
                <ServicesNav />
                <ServicesDesc />
            </div>
        </>
    )
}
