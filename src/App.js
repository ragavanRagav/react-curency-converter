import './App.css';
import AddCurrency from './components/addCurrency';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ConvertCurency from './components/convertCurency';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact  path="/" component={AddCurrency}/>
          <Route exact path="/convert"  component={ConvertCurency} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
