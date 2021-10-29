import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Component/About';
import Competition from './Component/Competition';
import Typeword from './Component/Typeword';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
 
  return (<>
    <Router>
    <LoadingBar color='yellowgreen' progress={progress} height={3}  onLoaderFinished={() => setProgress(0)}  />
       
      <Navbar progress={setProgress} />
      <Switch>

        <Route exact path="/">
          <Home progress={setProgress} />
          <Footer />
        </Route>

        <Route exact path="/about">
          <About />
          <Footer />
        </Route>

        <Route exact path="/competition">
          <Competition />
          <Footer />
        </Route>

        <Route exact path="/typeword">
          <Typeword />
        </Route>

      </Switch>
     
    </Router>

  </>
  );
}

export default App;
