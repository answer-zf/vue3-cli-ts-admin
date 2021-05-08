<template>
  <div class="p20">
    <el-card class="outsideCard">
      <el-alert type="success" :closable="false" style="margin:15px 0 10px;">
        <template #title>
          <div class="title">
            <i class="el-icon-s-opportunity"></i>
            <span>
              使用 cli 脚手架，搭建的 vue3 框架。
            </span>
          </div>
        </template>
      </el-alert>

      <div class="zBlock">
        <p class="zHead">运行 开发环境 - <span>本地mock</span></p>
        <el-card :body-style="{ padding: '15px' }" class="zContent">
          npm start <span style="color:#409EFF">/</span> npm run dev-local
        </el-card>
      </div>
      <div class="zLine"></div>
      <div class="zBlock">
        <p class="zHead">运行 开发环境 - <span>连接后端接口</span></p>
        <el-card :body-style="{ padding: '15px' }" class="zContent">
          npm run dev-remote
        </el-card>
      </div>
      <div class="zLine"></div>

      <div class="zBlock">
        <p class="zHead">运行 生产环境 - <span>项目打包</span></p>
        <el-card :body-style="{ padding: '15px' }" class="zContent">
          npm run build
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common.scss';

.title {
  font-size: 14px;
  padding: 3px 0;
  font-weight: 600;
  i {
    font-size: 18px;
  }
  span {
    color: $black-normal;
  }
}

::v-deep(.outsideCard.el-card.is-always-shadow) {
  box-shadow: none;
}

.zBlock {
  margin-top: 10px;
  padding: 16px 0;
  .zHead {
    font-size: 14px;
    font-weight: 600;
    color: $black-dark;
    margin-bottom: 20px;

    span {
      color: $blue;
    }
  }
  .zContent {
    font-size: 14px;
    color: $black-normal;
  }
}

.zLine {
  margin-top: 14px;
  width: 100%;
  border-top: 1px dashed $black-lightest;
}
</style>
