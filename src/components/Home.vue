<template>
  <div class="home">

    <button class="button" @click="showModal = true">
      Bắt đầu !
    </button>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="slide" appear >
      <div class="modal" v-if="showModal">
        <el-container>
          <el-main class="main">
            <el-row>
                <el-button type="primary" plain v-on:click="component='healthDeclaration'">Health Declaration</el-button>
                <el-button type="primary" plain v-on:click="component='TravelPaper'">Travel Paper</el-button>
            </el-row>
            <component v-bind:is="component"  @show="show"></component>
          </el-main>
        </el-container>
      </div>
    </transition>

  </div>
</template>

<script>
import healthDeclaration from "./healthDeclaration";
import TravelPaper from "./travelPaper";
export default {
 name: 'Home',
  components: {
    TravelPaper,
    healthDeclaration
  },
  data() {
   return{
     component: '',
     showModal:false,
   }
  },
  methods:{
   show(e){
     this.showModal = e;
   }
  }
}
</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 30px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 50px;
  padding: 80px 80px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: beige;
}

.home .modal {
  background-color: beige;
  width: 700px;
  height: 95%;
}

.home .modal .main {
  width: 100%;
  height: 495px;
  padding: 0 10px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: rgba(19, 128, 206, 0.23);
}

.main .el-row .el-button{
  margin: 10px 0 0 5px;
}

.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-block;
  padding: 5px 5px;
  margin: 15px;
  margin: 2.5%;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  border-radius: 8px;
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}


.button :hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  border-radius: 16px;
  padding: 25px;

}

.modal h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

.modal p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
