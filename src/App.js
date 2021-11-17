import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './Component/About';
import Competition from './Component/Competition';
import Typeword from './Component/Typeword';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Signup from './Component/Signup';
import Alert from './Component/Alert';
import Account from './Component/Account';
import ContentState from './context/content/contentState';

function App() {

  const [progress, setProgress] = useState(0);
  const [navstop, setnavstop] = useState('notset');
  const [stopinterval, setStopinterval] = useState('notset');

  const [alert, setAlert] = useState('notset');

  return (<>
  <ContentState>
    <Router>
      <LoadingBar color='yellowgreen' progress={progress} height={3} onLoaderFinished={() => setProgress(0)} />

      <Alert alert={alert} setAlert={setAlert} />

      <Switch>

        <Route exact path="/">
          <Navbar progress={setProgress} />
          <Home progress={setProgress} setAlert={setAlert} />
          <Footer />
        </Route>

        <Route exact path="/about">
          <Navbar progress={setProgress} />
          <About />
          <Footer />
        </Route>

        <Route exact path="/competition">
          <Navbar progress={setProgress} />
          <Competition />
          <Footer />
        </Route>

        <Route exact path="/typeword">
          <Navbar progress={setProgress} nav={navstop}/>
          <Typeword setnav={setnavstop} setinv={setStopinterval} valueinv={stopinterval}/>
        </Route>

        <Route exact path="/signup" >
          <Navbar progress={setProgress} />
          <Signup setAlert={setAlert}/>
        </Route>

        <Route exact path="/account" >
          <Navbar progress={setProgress} />
          <Account setAlert={setAlert} />
          <Footer />
        </Route>



      </Switch>

    </Router>
    </ContentState>

  </>
  );
}

export default App;
