import { useState } from 'react';
import SearchRecipe from './components/SearchRecipe';
import SearchResult from './components/SearchResult';
import  { Switch,BrowserRouter as Router, Route } from "react-router-dom";
import ViewDetails from './components/ViewDetails';


function App() {
  const [recipe, setRecipe] = useState([]);
  const [searchQuery, setSearchQ] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
    <Router>

     <Switch>

          <Route exact path="/">
            <SearchRecipe recipe={recipe} setRecipe={setRecipe} searchQuery={searchQuery} setSearchQ={setSearchQ} setLoading={setLoading}/>
          </Route>

          <Route path="/result">
            <SearchResult recipe= {recipe} searchQuery={searchQuery} loading={loading}/>
          </Route>

          <Route path="/view/:id">
            <ViewDetails recipe={recipe}/>
          </Route>

        </Switch>

    </Router>
      
    </>
  );
}

export default App;
