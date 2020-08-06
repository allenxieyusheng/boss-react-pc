
/**
 * Footer Component
*/
import React from 'react';
import './footer.css'

import { Layout, Menu, Breadcrumb, SubMenu} from 'antd';
import { Link} from "react-router-dom";

const { Header, Content, Footer,Sider,} = Layout;

class BFooter extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <Layout>
           <Footer className="footer">React 高级仿造BOSS直聘官网</Footer>
      </Layout>
    )
  }

}


export default BFooter;

