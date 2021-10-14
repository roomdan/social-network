import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import  Loader from "./components/loader/loader";
import Home from "./views/home/home";
import { firebase } from "./firebases-all/config-general/firebase.config"

function App() {

  const SignUp = lazy(()=>import('./views/signUp/signUp'));
  const FiexedLayout = lazy(()=>import('./components/headers/index'))

  const [ state, setState] = useState('[NOT] VALIDATE')

  useEffect(()=>{
   firebase.auth().onAuthStateChanged(e=>{
     if( e && e.uid){setState(e.uid)}
      else {setState(false)}
    });
  },[])

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader/>}>
          <Route exact path='/'  
          render={()=>!state?
            <SignUp/>:<Redirect to='/home'/>
          }
          >
          </Route>
          <Switch>
              <Route render={()=>state?
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
