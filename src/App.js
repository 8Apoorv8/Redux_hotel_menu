import Header from "./Components/Header";
import { Switch, Route } from 'react-router-dom'
import Cards from './Components/Cards'
import CardsDetails from './Components/CardsDetails'
function App() {
  return (
    <div className="App ">
      <Header />
      <Switch>
        <Route path="/" exact component={Cards} />
        <Route path="/cart/:id" exact component={CardsDetails} />
      </Switch>

    </div>
  );
}

export default App;
