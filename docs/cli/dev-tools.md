# dev-tools

`BeeComponents`虽然好用（可能是自己觉得吧😂），但是依然要写很多配置，并且每个页面的代码也差不多，所以为了简化这部分的操作，bee-cli也提供了相应的指令辅助开发

## 创建页面

```js
create-page <pageName>
```

使用该命令可以创建一个默认的BeeComponents页面

在执行过程中您可以输入当前表格的列数，bee将会为您生成一个拥有`Number`个列的基本配置`[{label: '', prop: ''}, ....]`

也就是下面的结构：

```ts
export const getTableConfig = (): ICrudTableProps => {
  return {
    requestApi(query) {
      return API(query)
    },
    draggingMemory: false,
    showSetting: true,
    showExcelExport: true,
    name: '<Page Name>',
    options: {
      height: 600,
      border: true
    },
    handle: {
      options: {
        width: 100,
        fix: 'right'
      },
      items: []
    },

    columns: [
      {
        prop: '',
        label: '',
        dicts: [
          {
            label: '',
            value: 0
          },
        ],
        valueTypeOption: {
          type: 'danger'
        }
      }
    ],
  }
}

export const getSearchConfig = (): ICrudSearchProps => {
  return [
     // props
  ]
}
```

```vue
<template>
  <div>
    <BCrud :table-config="tableColums" :search-config="searchConfig"></BCrud>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { BCrud, ICrudTableProps } from '@/components/Crud'
import { getTableConfig, getSearchConfig } from './config'

const tableColums = ref<ICrudTableProps>(getTableConfig())
const searchConfig = getSearchConfig()

</script>

<style scoped lang="scss"></style>

```

- 修改默认创建页面地址

```
-pp --page-path <pagePath>', 'path to store pages
```

要求传入一个相对路径

```
bee create-page <page-name> -pp ./scr/pages
```