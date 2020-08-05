/**
 * APP下砸
*/
import React from 'react';
import './app.css'

import { Layout, Menu, Breadcrumb, SubMenu, Button} from 'antd';
const { Header, Content, Footer,Sider,} = Layout;

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div>
          <section className="s1">
            <div class="down-wrap">
                <img class="app-home" src={require("../../images/app-home.png")}></img>
                <div class="down-right">
                    <h1>这一次</h1>
                    <h2>试试使用聊天的方式找工作</h2>
                    <div class="wechart-wrap">
                        <div class="button-wrap">
                            <a class="button">iPhone</a>
                            <a class="button">Android</a>
                        </div>
                        <img class="wechart" src={require("../../images/me.png")}></img>
                    </div>
                </div>
            </div>
          </section>

          <section id="softwareUsingWays-container">    
            <div class="pay-left">
                <h1>知识胶囊的<span>高薪</span></h1>
                <h5>除了真人在线之外，BOSS们认为最能表现诚意的是可观的薪资</h5>
            </div>
            <div class="pay-right">
                <img  src={require("../../images/down1.png")}></img>
            </div>
          </section>

          <section
            className="s1"
          >s1</section>
      </div>
    )
  }
componentDidMount() {
    this.checkScrollHeightAndLoadAnimation(); //初始化就动画呢
    window.addEventListener('scroll', this.bindHandleScroll); //监听滚动事件
}
componentWillUnmount() {
     window.removeEventListener('scroll', this.bindHandleScroll);
}

bindHandleScroll = (event) => {
    this.checkScrollHeightAndLoadAnimation();
 }
checkScrollHeightAndLoadAnimation() {
    const windowHeight = window.innerHeight; //获取浏览器窗口高度
    //最外层
    let parentEelement = document.getElementById("softwareUsingWays-container");
    //最外层距离顶部距离
    const parentOffsetTop = parentEelement.offsetTop;
    //获取内部的左边元素
    let leftElement = parentEelement.getElementsByClassName("pay-left")[0];

    //滚动的距离>当前元素的距离顶部高度
    if (window.pageYOffset  > leftElement.offsetTop  -150) {
                leftElement.style.animation = "showLeft .6s forwards" //添加动画  
            } else {
        //  leftElement.style.animation = "hideLeft 0s forwards" //隐藏动画 
    }

    let rightElement = (parentEelement.getElementsByClassName("pay-right"))[0];
    if (window.pageYOffset  > leftElement.offsetTop  -150) {
              rightElement.style.animation = "showRight .6s forwards" //添加动画  
    } else {
        //    rightElement.style.animation = "hideRight 0s forwards" //隐藏动画 
    }

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
