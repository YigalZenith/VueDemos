<template>
  <el-form ref="form" :model="form" class="login-box" :rules="rules">
    <h3 class="login-title">欢迎登录</h3>
    <el-form-item label="账号" prop="name">
      <el-input type="text" placeholder="请输入账号" v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          name: '',
          password: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push("/main")
          } else {
            this.$message({
              message: '用户名或密码不正确',
              type: 'warning'
            });
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
<!--style scoped-->
  .login-box {
    width: 350px;
    /* 居中 */
    margin: 120px auto;
    /* 边框 */
    border: 1px solid #DCDFE6;
    /* 边框圆角 */
    border-radius: 10px;
    /* 边框阴影 */
    box-shadow: 0 0 30px #909399;
    /* 边框内边距 */
    padding: 20px;
  }
  .login-title {
    text-align: center;
  }
</style>