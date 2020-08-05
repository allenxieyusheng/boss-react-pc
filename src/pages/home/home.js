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
          <Header className="header">
            <a class="logo"></a>
            <div className="header-warp">
              <div className="header-left">
                <Menu>
                    <Menu.Item>首页</Menu.Item>
                    <Menu.Item>职位</Menu.Item>
                    <Menu.Item>资讯</Menu.Item>
                    <Menu.Item>
                      {/* <Link to="/app">APP</Link> */}
                      APP
                    </Menu.Item>
                </Menu>
              </div>
              <div className="header-right">
                righr
              </div>
            </div>
          </Header>

          {/* <Content>
            <div className="fast-boss">
              <img className="fast-img" src={this.state.fastImage}></img>
            </div>
          </Content> */}
        
          <Footer className="footer">React 高级仿造BOSS直聘官网</Footer>
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

