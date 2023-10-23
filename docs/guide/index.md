# 什么是 bee-admin ？

`bee-admin` 是本人通过在工作中在工作中的总结，面对重复的 crud 业务，每天写着大量的重复代码，当页面的要显示的数据增多时，页面结构也会变得繁杂，当然我们也可以使用`v-for`进行循环渲染，但是每个页面都要重复的操作，也挺 🤢 的，再加上领导对表格操作的喜好，每个表格又要做着重复的东西
加上对 vue-admin-tempalte 的以及对和`wjc-easy-element-ui`的使用，最终实现了自己的一套 后台管理综合解决方案

<!-- ## 基本功能

本系统实现了很多 -->



## BeeComponents

用过 `vue-admin-template` 的大佬应该会很容易上手，下面简单介绍一下 `BeeComponents`，也是核心组件

BeeComponents 的灵感来源于 [wjc-easy-element-ui](https://gitee.com/jinchuanwang/wjc-easy-element-ui?_from=gitee_search)，这是一套基于 vue2 的对 element-ui 的封装，通过对这套组件的使用，可以很快和迅速的搭建出一个 crud 页面，95%的场景下都是符合领导的需求的，但是直到领导要求拖拽排序，excel 导出就很麻烦了，原作者没有对这些需求进行封装，以至于我要自己去修改其源代码，最后萌生了自己去实现的想法

## 配置风格

配置风格沿用了 wjc-easy-element-ui 的配置风格，但是在后期2.0的版本我会加入 配置 和 props 共存的风格

下面是 wjc-easy-element-ui 的一个简单的例子

```js
{
  async requestApi(query)
      return testApi(query)
  },
  name: "tablename",
  useSetting: true,
  handle: {
    options: {
      width: "200px"
    },
    items: [
      {
        name: "详情",
        click: viewOrderDetail
      }
    ]
  },
  columns: [
      {
        label: "创建时间",
        prop: "createTime",
        width: 200
      },
      ...
    }
}
```

这样你就可以很容易的搭建出一个页面，你甚至不需要管请求后数据怎么处理，怎么渲染，分页器的操作，甚至搜索也很容易

```js
 {
    items: [
      {
        prop: "search",
        label: "收款人姓名",
        component: "input",
        width: 200
      },
      "createTime",
    ]
  };
```

通过这样的配置你就可以迅速实现一个带有收款人姓名，创建时间的搜索栏目，自带重置功能


## 什么时候使用？

BeeComponents 几乎包含了所有的表格操作，他有点像 antDesign 的 `ProComponent`，不通点就是 ProComponent 是通过组件进行配置的，而BeeComponents主要是通过一个prop的配置，如果一个页面的操作过多，那么就会使得 `tableConfig` 的配置变得复杂，甚至繁琐，所以就看个人洗喜好了。BeeComponents 在一定程度上确实会减轻一些重复的操作和不必要的心智负担。当然目前的 BeeComponents 还是处于测试阶段，仅供学习交流