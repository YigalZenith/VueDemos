<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>会员管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <!-- <router-link :to="{name:'ML',params:{xxx:2}}">会员等级</router-link> -->
              <router-link to="/member/level">会员等级</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/member/list">会员列表</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>商品管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">商品分类</el-menu-item>
            <el-menu-item index="2-2">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>用户中心</el-dropdown-item>
            <el-dropdown-item @click.native="ddd">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 通过store获取用户名 -->
        <span>{{ $store.getters.getUser.name }}</span>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
export default {
  name: 'Main',
  methods: {
    ddd(){
      this.$router.push('/logout')
    }
  }
}
</script>
