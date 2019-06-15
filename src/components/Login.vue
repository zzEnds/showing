<template>
  <!-- 登录表单 -->

<div class="containerT">
  <el-form :model="login" status-icon :rules="rule" ref="login">
      <el-form-item prop="username">
          <el-input prefix-icon="el-icon-ump-yonghu" v-model="login.username"
                    auto-complete="off"/>
      </el-form-item>
      <el-form-item prop="password">
          <el-input prefix-icon="el-icon-ump-mima" type="password" v-model="login.password"
                    auto-complete="off"/>
      </el-form-item>
      <el-form-item>
          <el-checkbox class="check" v-model="checked">记住我</el-checkbox>
      </el-form-item>
      <el-form-item>
          <el-button class="btn" type="primary" @click="submitForm('login')">登录</el-button>
      </el-form-item>
  </el-form>
</div>
<!-- <div>
    <p><a href="#" class="tips">还没有账号？点我去注册</a></p>
</div> -->
</template>

<script>
export default {
  name: 'login',
  data () {
    var checkUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input username'))
      } else {
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input password'))
      } else {
        callback()
      }
    }
    return {
      checked: false,
      token: '',
      login: {
        username: '',
        password: ''
      },
      rule: {
        username: [
          {validator: checkUsername, trigger: 'blur'}
        ],
        password: [
          {validator: checkPassword, trigger: 'blur'}
        ]
      }
      // msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    submitForm (login) {
      this.$axios.post(this.rootUrl + 'login', {
        username: this.login.username,
        password: this.login.password
      },{
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(result => {
        console.log(result)
        if (result.bodyText === 'main') {
          this.$router.push({
            path: 'home'
          })
        } else {
          console.log('Login failed!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
