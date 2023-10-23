# BCrud

BCrud 是 BeeComponents 核心组件，他是集网络请求，列表展示，分页器为一体的组件，让您无关注重复的列表请求，分页的操作，只需要关注 table 表格的显示即可

```vue
<BCrud :table-config="tableColums" :search-config="searchConfig"></BCrud>
```

该组件需要传入两个 prop，一个`searchConfig`，一个`tableConfig`

## 其他属性

| name      |    description     |   type   | defaulrValue |
| --------- | :----------------: | :------: | :----------: |
| mainColor | BeeComponents 主色 | `string` |  `rgb(64, 158, 255)`  |
