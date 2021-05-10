<template>
  <el-card class="outsideCard m20">
    <z-alert :options="alertOptions" />
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

    <div class="test">
      <p>dddd</p>
      <p>3333</p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import { AlertOptions } from '@/type/component/zalert'
import ZAlert from '@/component/ZAlert.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    ZAlert,
  },
  setup() {
    const alertOptions = reactive<AlertOptions>({
      zicon: 'el-icon-s-opportunity',
      zspan: '使用 cli 脚手架，搭建的 vue3 框架。',
    })

    return { alertOptions }
  },
})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common.scss';

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
      opacity: 0.4;
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

.test {
  display: flex;
  transform: translateX(200px);
}
</style>
