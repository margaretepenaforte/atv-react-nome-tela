import logo from './logo.svg';
import './App.css';

import FirsComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import Fragment from './components/Fragment';
import Container from './components/Container';


function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <FirsComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <Fragment />
      <Container>
        <h1>Este é filho container!</h1>
      </Container>
    </div>
  );
}

export default App;
