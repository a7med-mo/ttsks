import { NavLink } from 'react-router-dom'
import './nav.css'

export default function Nav() {
    return (
        <>
            <ul>
                <li><NavLink to={"/"}>home</NavLink></li>
                <li><NavLink to={"/about"}>about</NavLink></li>
                <li><NavLink to={"/posts"}>posts</NavLink></li>
                <li><NavLink to={"/contact-us"}>contact us</NavLink></li>
            </ul>
        </>
    )
}
