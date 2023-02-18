import "./Footer.css";

const Footer = (props) => {
    return (
        <footer className="footer">
            Copyright { props.year }
        </footer>
    );
}

export default Footer;