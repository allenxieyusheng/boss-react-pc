import React from 'react';
import { Button,Empty } from 'antd';
import { BrowserRouter, Link, Route, Switch, Redirect,} from "react-router-dom";

import HOME from './pages/home/home'
import APP from './pages/app/app'

import Header from './components/header/header'
import Footer from './components/footer/footer'

const NoMatch = ()=>{
  return(
    <div style={{display:"flex",flex:1,justifyContent:"center"}}>
      <img src={require('./images/404.png')}/>
    </div>
  )
}

function App() {
  return (  
    <div>
         {/*header*/}
         <Header/>
         {/*Switch*/}   
          <Switch>
            <Route exact path="/" component={HOME} />
            <Route path="/app" component={APP} />
            {/*404*/}
            <Route component={NoMatch} />
          </Switch>
        <Footer/>
    </div>  
  )
}

export default App;