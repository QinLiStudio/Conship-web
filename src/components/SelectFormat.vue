<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2022-06-20 16:45:00
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2022-06-26 10:36:02
 * @FilePath: \Conship-web-main\src\components\SelectFormat.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by wangbyyds 1362872827@qq.com, All Rights Reserved. 
-->
<template>
  <div class="m-select-wrap">
    <input
      :class="['u-select-input f16', color === 'blue' ? '' : 'white-color']"
      type="text"
      readonly
      @click="openSelect"
      @blur="onBlur"
      v-model="selectName"
    />
    <div :class="['triangle-down', { rotate: rotate }]" @click="openSelect"></div>
    <div
      :class="['m-options-panel f16', showOptions ? 'show' : 'hidden']"
      :style="`height: ${selectData.length * 40}px;`"
    >
      <p
        class="u-option"
        @mousedown="getValue(item.name, item.value, index)"
        v-for="(item, index) in selectData"
        :key="index"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelectFormat',
  props: {
    selectData: {
      type: Array,
      default: () => {
        return []
      },
    },
    selValue: {
      // 将该prop值作为selV的初始值
      type: [Number, String],
      default: null,
    },
    color: {
      type: String,
      default: 'blue',
    },
  },
  computed: {
    selectName() {
      for (const item of this.selectData) {
        if (item.value === this.selectValue) {
          return item.name
        }
      }
      return ''
    },
  },
  data() {
    return {
      selectValue: this.selValue,
      rotate: false,
      showOptions: false,
    }
  },
  methods: {
    openSelect() {
      this.showOptions = !this.showOptions
      this.rotate = !this.rotate
    },
    getValue(name, value, index) {
      this.selectValue = value
      this.$emit('getValue', name, value, index)
    },
    onBlur() {
      this.showOptions = false
      this.rotate = false
    },
  },
}
</script>
<style lang="less" scoped>
.m-select-wrap {
  margin: 20px;
  width: 135px;
  height: 40px;
  line-height: 40px;
  position: relative;
  .u-select-input {
    width: 105px;
    background: #3a79ee;
    color: #ffffff;
    box-shadow: 0px 10px 20px 0px rgba(144, 119, 222, 0.2);
    border-radius: 20px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    cursor: pointer;
    border: none;
  }
  .white-color {
    background: #ffffff;
    color: #3a79ee;
  }
  .triangle-down {
    // 下三角样式
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #333;
    position: absolute;
    top: 18px;
    right: 15px;
    transition: transform 0.3s ease-in-out;
  }
  .rotate {
    transform: rotate(180deg);
  }
  .m-options-panel {
    position: absolute;
    background: #ffffff;
    border-radius: 8px;
    width: 133px;
    border: 1px solid #e3e3e3;
    top: 46px;
    left: 0;
    color: #706f94;
    .u-option {
      padding: 0 15px;
      cursor: pointer;
    }
    .u-option:hover {
      color: #3a79ee;
      background: #eef1fa;
    }
  }
  .show {
    display: block;
  }
  .hidden {
    display: none;
  }
}
</style>
