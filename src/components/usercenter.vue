<template>
    <div>
        <div class="header1">
            <div class="title">
                <div class="title1" @click="showHome">首页</div>
                <div class="title2">个人中心</div>
            </div>
        </div>
        <div class="header2" v-if="showReminder" @close="showReminder = false">您设置的备忘录:</div>
        <div class="noheader2" v-if="noshowReminder" @close="noshowReminder = false">您还没有设置备忘提醒哦!</div>
        <div class="lab-wrap" v-if="showReminder" @close="showReminder = false">
        <!-- 科技前沿列表 start -->
            <ul class="lab-main-science">
                <li class="lab-main-item">
                    <div class="reminddate">
                        2018-06-02
                    </div>
                    <div class="remindcontent">
                        你好我是孙士涛，我要吃午饭，吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛吃你嘛
                    </div>
                </li> 
                <li class="lab-main-item">
                    <div class="reminddate">
                        2018-06-02
                    </div>
                    <div class="remindcontent">
                        你好我是孙士涛，我要吃午饭
                    </div>
                </li> 
                <li class="lab-main-item">
                    <div class="reminddate">
                        2018-06-02
                    </div>
                    <div class="remindcontent">
                        你好我是孙士涛，我要吃午饭
                    </div>
                </li> 
            </ul>
            <!-- 科技前沿列表 end -->
        </div>
    </div>

</template>


<script>
import { $http } from "../../lib/fetch";
let sourceData;
export default {
  name: "HelloWorld",
  data() {
    return {
       noshowReminder:true,
       showReminder:false

    };
  },
  mounted() {},
  methods: {
      showHome() {
          location.href = "/";
      }
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .header1 {
        position: absolute;
        left: 10px;
        top: 20px;
        /* border: 1px solid red; */
        width: 300px;
        height: 50px;
    }
    .header2 {
        position: absolute;
        left: 10px;
        top: 80px;
        /* border: 1px solid red; */
        width: 200px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    .noheader2 {
        position: absolute;
        left: 50%;
        top: 50%;
        /* border: 1px solid red; */
        width: 400px;
        height: 50px;
        margin-left: -200px;
        margin-top: 25px;
        text-align: center;
        line-height: 50px;
        font-size: 24px;
        font-weight: border;
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
    .lab-wrap{
        position: absolute;
        top: 150px;
        /* border: 1px solid red; */
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .lab-main-item {
        position: relative;
        width: 100%;
        height: 50px;
        text-align: left;
        margin: 0 0 30px;
        /* border: 1px solid black */
    }
    .reminddate {
        /* border: 1px solid green; */
        width: 25%;
        height: 100%;
        line-height: 50px;
        text-align: center;
        border-radius: 10px;
        border: 2px solid #B5B5B5;
        display: inline-block;
        overflow: hidden;
    }
    .remindcontent {
        /* border: 1px solid yellow; */
        width: 65%;
        height: 100%;
        line-height: 50px;
        border: 2px solid #B5B5B5;
        text-align: left;
        margin-left: 2%;
        overflow: hidden;
        display: inline-block;
        border-radius: 10px;
    }
</style>