import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';


import store from './redux/store'
import { render } from '@testing-library/react';

import { plus } from './redux/actions' 


import { connect } from "react-redux";

const witiRoot = Component => props =>{
  return(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Component {...props}/>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>
  )
}

@witiRoot
class Root extends React.Component{
  componentDidMount(){
    //监听,每次更新后都会触发监听,这里注意this指向问题
    store.subscribe(()=>this.listener())
  }
  listener(){
    const current = store.getState();
    this.setState({
      count:current
    })
  }
  constructor(props){
    super(props);
    this.state={
      count:store.getState()
    }
  }
  clickPlus(){
    store.dispatch(plus)
  }
  render(){
    return(
      <div>
          <span>{this.state.count}</span>
          <button onClick={()=>this.clickPlus()}>点击</button>
          <App/>
      </div>
    )
  }
}


ReactDOM.render(<Root/>,
  document.getElementById('root')
);
serviceWorker.unregister();
