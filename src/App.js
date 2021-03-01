import { Route } from 'react-router-dom'
import {
  Main,
  Test,
  Result,
  Makers
} from './pages'

function App() {
  return (
    <div>
      <Route exact path="/" component={Main}/>
      <Route exact path="/makers" component={Makers}/>
    </div>
  );
}

export default App;
