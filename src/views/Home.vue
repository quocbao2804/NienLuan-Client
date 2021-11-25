  <template>
    <div>
      <el-container>
        <el-header>
          <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-submenu index="2">
              <template slot="title">Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>Info</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
            <el-menu-item>
              <el-button type="primary"  @click="loginClick()">Login</el-button>
            </el-menu-item>
          </el-menu>
        </el-header>

        <el-main>
          <h1>Tờ Khai Y Tế/ Giấy Đi Đường</h1>
          <el-row>
            <el-col :span="12">
              <el-button type="success" size="medium" plain  @click="notification">  Khai Báo Y Tế </el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="success" size="medium" plain   @click="notification"> Giấy Đi Đường </el-button>
            </el-col>
          </el-row>
          <h1>Vui lòng truy cập : https://tokhaiyte.vn/</h1>
        </el-main>
        <el-footer>Copyright ® 2021 - Nguyen Quoc Bao</el-footer>
      </el-container>

  <!--    <div>-->
  <!--      <div v-if="!this.isLogged">-->
  <!--        <small>Not Loged In?</small><br /><button-->
  <!--          type="button"-->
  <!--          @click="loginClick()"-->
  <!--        >-->
  <!--          Login-->
  <!--        </button>-->
  <!--      </div>-->
  <!--      <div v-else>-->
  <!--        <small>You are logged In</small>-->
  <!--        <button @click="logOut()">LogOut</button>-->
  <!--      </div>-->
  <!--    </div>-->
    </div>
  </template>
  <script>
  import { login, isLogged, logUserOut } from '../utils/auth';
  export default {
    name: 'Home',
    components: {},
    methods: {
      loginClick() {
        login();
      },
      logOut() {
        this.isLogged = false;
        logUserOut();
      },
      notification() {
        this.$message({
          message: 'Please click login to use the service !!! ',
          type: 'warning'
        });
        login();
      },
    },
    data: () => {
      return {
        isLogged: isLogged(),
      };
    }
  };
  </script>
  <style scoped>
  .el-header, .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 320px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-main h1{
    line-height:60px;
    margin-top: -50px;
    /*background-color: red;*/
    margin-bottom: -80px;
  }
  h3 {
    /*margin-top: -100px;*/
    /*background-color: red;*/
  }
  .el-row .el-col .el-button{
    align-content: center ;
    color:black;
    margin-bottom: 200px;
    line-height: 50px;
    width:100%;
  }

  .el-col p  {
    margin-top: -280px;
    margin-bottom: -250px;
    margin-right: 200px;
    /*mả*/
    text-align: center;
  }
.el-input{
  /*margin-right: 200px;*/
  /*background-color: red;*/
}
  </style>