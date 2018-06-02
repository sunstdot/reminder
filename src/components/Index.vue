<template>
    <div>
      <div class="header1">
          <div class="title">
              <div class="title1">首页</div>
              <div class="title2" @click="showUCenter">个人中心</div>
          </div>
      </div>
      <!-- Begin of timer pane -->
      <div class="pane-when " id="s-when">
        <div class="content">
          <!-- Clock -->
          <!-- 默认提醒最近的一件事儿 -->
          <div class="clock clock-countdown">
            <div class="site-config" data-date="1/15/2018 14:00:00" data-date-timezone="+8"></div>
            <div class="elem-center">
              <div class="digit">
                <span class="days">{{exactday}}</span>
                <span class="txt">天</span>
              </div>
            </div>
            <div class="elem-bottom">
              <div class="deco"></div>
              <span class="hours">{{hour}}</span>
              <span class="thin">小时</span>
              <span class="minutes">{{minute}}</span>
              <span class="thin">分钟</span>
              <span class="seconds">{{second}}</span>
              <span class="thin">秒</span>
            </div>
          </div>
          <footer>
            <p>{{year}}年
              <strong>{{month}}月{{date}}日</strong>
            </p>
          </footer>
        </div>
      </div>
      <!-- End of timer pane -->

      <!-- BEGIN OF site main content content here -->
      <main class="page-main" id="mainpage">

        <!-- Begin of home page -->
        <div class="section page-home page page-cent" id="s-home">

          <!-- Content -->
          <section class="content">
            <header class="header">
              <div class="h-left">
                <h2>{{title}}
                </h2>
              </div>
              <div class="h-right">
                <h3>{{content}}
                </h3>
              </div>
              <div class="h-bottom">
                  <h4 class="subhead">
                    <a href="javascript:(void);" @click="setReminder" >设置提醒</a>

                    <!-- <div class="searchbox"></div><div class="dosearch"></div> -->
                  </h4>
              </div>
              
            </header>
          </section>
        </div>
        <!-- End of home page -->
        <!-- End of Contact page  -->

      </main>

      <div class="searchbox">
          <input class="searchinput" placeholder="输入地址查询最近提醒" v-model="searchword"/>
          <div class="searchbtn" @click="dosearch"></div>
      </div>
      <modal v-if="showModal" @close="showModal = false">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="close" @click="closeModal"></div>
                  <div class="installtext" v-if="installModel" @close="installModel=false">星云钱包插件未安装，请先安装<a href="https://github.com/ChengOrangeJu/WebExtensionWallet">星云钱包</a>插件</div>
                  <!-- 展示备忘录内容 -->
                  <div class="setreminder" v-if="showReminder" @close="showReminder=false">
                    
                    <div class="contentReminder">
                      <textarea class="titleReminderInput" placeholder="请输入提醒事项"  v-model="contentReminder"></textarea>
                    </div>
                    <div class="timeReminder">
                      <datepickers></datepickers>
                    </div>
                    <div class="mailReminder">
                      <input class="titleReminderInput" placeholder="请输入提醒邮箱" />
                    </div>
                    <div class="buttonReminder" @click="doconfirm">确定</div>
                  </div>
                </div>
            </div>
        </div>
      </modal>
    </div>
</template>


<script>
import { $http } from "../../lib/fetch";
import "./datepicker";
// let chainId = 1001;
// // let netWork = "https://mainnet.nebulas.io";
// var netWork = "https://testnet.nebulas.io"
// let nebPay = new NebPay();
// let neb = new Neb();
// neb.setRequest(new HttpRequest(netWork));
export default {
  name: "reminder",
  data() {
    return {
      year: 2018,
      month: 8,
      date: 15,
      exactday: 0,
      hour: 18,
      minute: 45,
      second: 36,
      title: "这一刻开始记录",
      content: "从此不再担心忘记,每一件事都有人提醒",
      searchword: "",
      showModal: false,
      installModel: false,
      showReminder: false,
      contentReminder: ''

    };
  },
  mounted() {
    // let account = createAccount();
    let nowDate = new Date();
    this.year = nowDate.getFullYear();
    this.month = nowDate.getMonth() + 1;
    this.date = nowDate.getDate();
    this.hour = nowDate.getHours();
    this.minute = nowDate.getMinutes();
    this.second = nowDate.getSeconds();
  },
  methods: {
    //设置提醒
    setReminder() {
      this.showModal = true;
      if (typeof webExtensionWallet === "undefined") {
        this.installModel = true;
        return;
      } else {
        this.showReminder = true;
      }
    },

    //设置提醒
    dosearch() {
      if (!this.searchword) {
        return;
      }
      //调用搜索接口
    },
    doconfirm() {

    },
    closeModal() {
      this.showModal = false;
      this.installModel = false;
      this.showReminder = false;
    },
    showUCenter() {
      location.href="#/usercenter";
    }
  }
};
</script>
<style>
.header1 {
  font-family:Arial, Helvetica, sans-serif;
    position: absolute;
    left: 10px;
    top: 20px;
    /* border: 1px solid red; */
    width: 300px;
    height: 50px;
    z-index: 9999;
}

.title {
    position: relative;
    float: left;
    height: 50px;
    margin-left: 20px;
}
.title1 {
    position: relative;
    float: left;
    font-size: 28px;
    height: 100%;
    line-height: 50px;
    margin-left: 15px;
    color: #90EE90;
    cursor: pointer;
    font-weight: bolder;
    text-decoration: underline;
}
.title2 {
    position: relative;
    float: left;
    font-size: 28px;
    height: 100%;
    line-height: 50px;
    margin-left: 15px;
    cursor: pointer;
    color: #90EE90;
    font-weight: bolder;
    text-decoration: underline;
}
.page-home .content .header .h-bottom {
  position: absolute;
  bottom: -52px;
}
.page-home .content .header .h-bottom-bottom {
  position: absolute;
  bottom: -112px;
}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #363636;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #363636;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #363636;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #363636;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 375px;
  height: 500px;
  margin: 0px auto;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  background: url("../../static/img/warm.jpeg") no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  color: #838B83;
}
.setreminder {
  width: 100%;
  height: 100%;
  border: 1px solid black;
}

.titleReminderInput{
  width:100%;
  height: 100%;
  background: transparent;
  background-color: transparent;
  border-radius: 10px;
  outline: none;
  overflow:hidden; 
  resize:none;
  color: #838B83;
  -webkit-tap-highlight-color: rgba(0,0,0,0); 
}
.contentReminder {
  width: 280px;
  height:120px;
  left: 50%;
  position: relative;
  margin-left: -140px;
  margin-top: 70px;
}
.timeReminder {
  width: 280px;
  height:40px;
  /* border: 1px solid red; */
  left: 50%;
  position: relative;
  margin-left: -140px;
  margin-top: 30px;
}
.mailReminder {
  width: 280px;
  height:40px;
  /* border: 1px solid red; */
  left: 50%;
  position: relative;
  margin-left: -140px;
  margin-top: 30px;
}

.buttonReminder {
    width: 100px;
    height: 47px;
    /* border: 1px solid red; */
    left: 50%;
    position: relative;
    text-align: center;
    line-height: 47px;
    color: black;
    font-size: 22px;
    margin-left: -50px;
    margin-top: 60px;
    background: url("../../static/img/button.png") no-repeat center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    cursor: pointer;
}

.close {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: url("../../static/img/close.png") no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
.close:hover,
.close:active {
  background: url("../../static/img/close1.png") no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.searchbox {
    position: absolute;
    width: 400px;
    height: 50px;
    /* border: 1px solid red; */
    left: 50%;
    margin-left: -200px;
    bottom: 12%;
    z-index: 9999;
  }
  .searchinput {
    position: relative;
    height: 100%;
    width: 350px;
    color: #1c1c1c;
    font-size: 22px;
    background: transparent;
    border-radius: 10px;
    outline: none;
  }
  .searchbtn {
    position: absolute;
    /* float: left; */
    right: 0px;
    top: 3px;
    width: 44px;
    height: 44px;
    /* border: 1px solid black; */
    background: url("../../static/img/search.png") no-repeat center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    cursor: pointer;
  }
  @media screen and (max-width:600px){
    .searchbox {
      position: absolute;
      width: 300px;
      height: 50px;
      /* border: 1px solid red; */
      left: 50%;
      margin-left: -150px;
      top: 50%;
      margin-top: 25px;
    }
    .searchinput {
      position: relative;
      height: 100%;
      width: 300px;
      color: #1c1c1c;
      font-size: 22px;
      background: transparent;
      border-radius: 10px;
      outline: none;
    }
    .searchbtn {
      position: absolute;
      /* float: left; */
      right: 0px;
      top: 7px;
      width: 44px;
      height: 44px;
      cursor: pointer;
      /* border: 1px solid black; */
      background: url("../../static/img/search.png") no-repeat center center;
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      cursor: pointer;
    }
  }
</style>
