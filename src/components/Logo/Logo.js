import "./Logo.css";
import valleyLogo from "../../assets/images/thevalley-logo-negro.png";

const Logo = (props) => {
    return <img className="header__logo" src={valleyLogo} alt="logo"></img>;
}

export default Logo;