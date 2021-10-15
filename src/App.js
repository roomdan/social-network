import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import  Loader from "./components/loader/loader";
import {useSelector} from "react-redux"

function App() {

  const SignUp = lazy(()=>import('./views/signUp/signUp'));
  const FiexedLayout = lazy(()=>import('./components/headers/index'))
  const Home = lazy(()=>import('./views/home/home'))
  const {GoogleUser}= useSelector(e=>e);

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader/>}>
          <Route exact  path='/'  
          render={()=>!GoogleUser.credential.accessToken?
            <SignUp/>:<Redirect  to='/home'/>
          }
          >
          </Route>
          <Switch>
              <Route exact render={()=>GoogleUser.credential.accessToken?
              <FiexedLayout children={<Home/>}/>
              :<Redirect to='/'/>} path='/home' >
              </Route>
              <Route exact path='*'>
                <Redirect to={GoogleUser.credential.accessToken?'/home':'/'}/>
                </Route>
          </Switch>
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App;
