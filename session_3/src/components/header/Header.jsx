import Log from './log/Log'
import Logo from './logo/Logo'
import Nav from './nav/Nav'
import './header.css'

export default function Header() {
    return (
        <>
            <div className='header'>
                <Logo />
                <Nav />
                <Log />
            </div>
        </>
    )
}
