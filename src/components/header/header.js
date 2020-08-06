
/**
 * Header Component
*/
import React from 'react';
import './header.css'

import { Layout, Menu, Breadcrumb, SubMenu} from 'antd';
import { Link} from "react-router-dom";

const { Header, Content, Footer,Sider,} = Layout;

class BHeader extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activeTab:"home"
    }
  }
  changeTab(pe){
     this.setState({
      activeTab:pe
     }) 
  }
  render(){
    return(
      <Layout>
          <Header className="header">  
                <a class="logo"></a>
                <div className="header-warp">
                  <div className="header-left">
                      <Menu>
                          <Menu.Item>
                            <Link className={['link',this.state.activeTab == 'home'?'active-header':null].join(' ')} to="/" onClick={()=>this.changeTab('home')}>首页</Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link className="link" to="/position">职位</Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link className="link" to="/info">资讯</Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link  className={['link',this.state.activeTab == 'app'? 'active-header':null].join(' ')} onClick={()=>this.changeTab('app')}  to="/app">APP</Link> 
                          </Menu.Item>
                      </Menu>
                  </div>
                  <div className="header-right">
                      righrt
                  </div>
                </div>
            </Header>
        </Layout>
    )
  }

}


export default BHeader;

