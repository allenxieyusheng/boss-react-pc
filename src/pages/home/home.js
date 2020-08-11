/**
 * 首页
*/
import React from 'react';
import { connect } from "react-redux";
import './home.css'

import { Layout, Menu, Breadcrumb, SubMenu} from 'antd';
const { Header, Content, Footer,Sider,} = Layout;


const mapStateToProps = state => { return {
    count: state,
  };
}
const mapDispatchToProps = {
  add: () => {
  return { type: "plus" };
},

minus: () => {
  return { type: "minus" }
 },

addAync:() => dispatch => {
  setTimeout(() => {
      // 异步结束后，⼿手动执⾏行行dispatch
      dispatch({ type: "plus" }); 
    }, 1000);
  }
}

@connect(mapStateToProps,mapDispatchToProps)
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      fastImage:require("../../images/fast-reg.png"),
      activeTab:"home"
    }
  }
  
  render(){
    const { count ,add,addAync} = this.props;

    console.log("-----------------",count);
    const {num} = count

    return(
      <Layout>
        <div className="fast-boss"> 
          <span>{num}</span>
          <button onClick={add}>点击2</button>
          <button onClick={addAync}>异步</button>
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


// export default connect(
//   mapStateToProps, 
//   mapDispatchToProps,//状态映射 mapStateToProps mapDispatchToProps, //派发事件映射
//   )(Home);

export default Home;

