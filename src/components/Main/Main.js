import "./Main.css";

const Main = (props) => {
    return (
        <main className="main">
            <h1>
                { props.title }
            </h1>
            <p>
                { props.description }
            </p>
        </main>
    );
}

export default Main;