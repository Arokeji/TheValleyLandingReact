import Enlace from "../Enlace/Enlace";
import Logo from "../Logo/Logo";
import "./Header.css";
import "../Enlace/Enlace.css"

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__links">
                <Enlace text="Facebook" url="-"></Enlace>
                <Enlace text="Instagram" url="-"></Enlace>
                <Enlace text="Twitter" url="-"></Enlace>
            </div>
            <div className="header__logo">
                <Logo></Logo>
            </div>
            <div className="header__links">
                <Enlace text="Docu React" url="-"></Enlace>
                <Enlace addedClass="purple-valley" text="Ir a The Valley" url="-" highlight="true"></Enlace>
            </div>
        </header>
    );
}

export default Header;