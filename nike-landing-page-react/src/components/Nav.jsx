import {headerLogo} from "../assets/images/";
import {hamburger} from "../assets/icons/";
import {navLinks} from "../constants";

const Nav = () => {
    return (
        <header className="px-10 py-8 w-full absolute z-0">
            <nav className="flex justify-between items-center bg-slate-300">
                <a href="/">
                    <img 
                        src={headerLogo} 
                        alt="Logo"     
                        className="w-28"
                    />
                </a>
                <ul className="flex justify-center items-center gap-16 max-md:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-slate-600 hover:text-orange-600 text-md">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    <img
                        src={hamburger}
                        alt="headerMenu"
                        className="w-7 hidden max-md:block"
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav;
