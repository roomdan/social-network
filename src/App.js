import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import  Loader from "./components/loader/loader";
import Home from "./views/home/home";

function App() {

  const SignUp = lazy(()=>import('./views/signUp/signUp'));
  const FiexedLayout = lazy(()=>import('./components/headers/index'))

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader/>}>
          <Route exact path='/'>
              <SignUp/>
          </Route>
          <Switch>
              <Route render={()=>true?
              <FiexedLayout children={<Home/>}/>
              :<Redirect to='/'/>} path='/home' >
              </Route>
              <Route exact  path='*'><Redirect to='/'/></Route>
          </Switch>
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App;
