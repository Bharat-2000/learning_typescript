import './App.css';
import {Greet} from "./components/Greet";
import {Status} from './components/Status';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import {User} from './components/state/User';

function App() {
  return (
    <div className="App">
      {/* <Greet name="bharat" age={22}/> */}
      {/* <Status status="success"/> */}
      {/* <Button 
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      /> */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}
      {/* <LoggedIn /> */}
      <User />
    </div>
  );
}

export default App;
 