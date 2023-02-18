import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const getYear = () => {
  let year = new Date();
  return year.getFullYear();
}

let lorenIpsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. 
`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main title="Ejercicio React" description={ lorenIpsum }></Main>
      <Footer year={ getYear() }></Footer>
    </div>
  );
}

export default App;