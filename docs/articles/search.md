# 列表搜索

列表搜索也是一个表格的关键一环，但是有时候我们在编写搜索时也会写一些重复的逻辑，和没有必要的代码，所以您还可以为 BeeTable 传入一个`search-config`配置，他可以大大简化我们的操作以及快速实现搜索功能

```ts
interface ICrudSearch {
  style?: CSSProperties;
  options?: typeof ElForm;
  items: ICurdSearchItem[];
}
```

## items

搜索栏的关键配置

`string | ISearch`

- string

得益于 table-config 的 columns 配置，如果你要搜索的内容在`tableConfig.columns`已经配置过，那么您可以直接传入该属性的 prop

即

`tableConfig.columns`

```ts
[
  {
    label: "名字",
    prop: 'name',
    ...
  }
]
```

那么你的搜索 items 就可以直接写成

```ts
searchConfig = {
  item: ["name"],
};
```

点击搜索之后在`tableConfig.requestApi`中的回调参数中就会存在一个`name`的 query 属性

```ts
/**
 * query = {..., name: ''}
 */

requestApi(query) {
  return testCrudComponentsApi(query)
}
```

是不是很方便？

如果是字典数据也是没问题的，[字典数据](./%E5%88%97%E8%AE%BE%E7%BD%AE.md#dicts)的搜索会以`el-select`的方式呈现，以 label 为显示，value 为搜索的值

- ISearch

```ts
interface ISearch {
  prop: string;
  label: string;
  component?: SeachComponents;
  width?: number;
  placeholder?: string;
}
```

自定义搜索，就是你没有在`tableConfig.columns`中配置，或者上述符合你的需求时您可以自定义搜索

那么就显而易见了

| name         |                       description                        |           type            | defaulrValue |
| ------------ | :------------------------------------------------------: | :-----------------------: | :----------: |
| prop         |                   传递给后端的搜索 key                   |         `string`          |  `required`  |
| label        | label 值， placeholder 不存在时作为 placeholder 功能使用 |         `string`          |  `required`  |
| component    |                    渲染出的搜索组件 `                    | `input`、`select`、`date` |   `input`    |
| width        |                       搜索组件宽度                       |         `number`          |      -       |
| placeholder  |                         提示文本                         |         `string`          |      -       |
| defualtValue |                    当前表单项的默认值                    |         `string`          |      -       |

```ts
export const getSearchConfig = (): ICrudSearchProps => {
  return [
    {
      label: "姓名",
      prop: "name",
    },
    "role",
    "avatar",
  ];
};
```

## style

`CSSProperties`

为搜索栏添加样式

## options

即 el-form 的属性

##

::: tip
点击搜索后会将所有的搜索内容以对象的方式合并到`tableConfig.requestApi`的回调参数中去，如果您还需要对请求参数进行拼装组合格式化就可以去`requestApi`函数中进行操作
:::
