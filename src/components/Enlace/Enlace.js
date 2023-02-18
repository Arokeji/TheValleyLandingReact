import "./Enlace.css";

let defaultClass = "header__link";

const Enlace = (props) => {
    return (
            <a className={ props.addedClass ? 
                        defaultClass + " " + props.addedClass : 
                        defaultClass } 
            href={props.url} alt="">{ props.text }</a>
            );
}

export default Enlace;