/**
 * 首页
*/
import React from 'react';
import './home.css'

import { Layout, Menu, Breadcrumb, SubMenu} from 'antd';
const { Header, Content, Footer,Sider,} = Layout;
// import { Router, Route, Link } from 'react-router'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fastImage:require("../../images/fast-reg.png"),
      activeTab:"home"
    }
  }
  render(){
    return(
      <Layout>
        <div className="fast-boss"> 
        
        </div>        
      </Layout>
    )
  }
  /**
   * @param tabType
  */
  clickTab(tap){
    this.setState({
      activeTab: tap
    })
  }
}


export default Home;

