# handle 表格操作

handle 的配置就是表格每列的操作栏，即 action

```js
{
  options: {
    width?: number
    fix?: 'left' | 'right'
  },
  label?: string
  items: ICrudHandleItems[]
}
```

## width

`numer`

该列的宽度，同 el-table 的 width


## fix 

`'left' | 'right'`

列的固定位置，默认值为 `right`

## label 

`string`

该列的列名，同 el-table 的 label


## items

`ICrudHandleItems[]`

配置操作按钮，一个对象就是一个按钮

```ts
interface ICrudHandleItems {
  name: string
  click: (rowData: any) => void
  options?: Partial<ButtonProps>
  dynamicLoad?: (rowData: any, staticOptions: Partial<ButtonProps>) => DynamicLoadOptions
  show?: boolean | ((rowData: any) => boolean)
}
```

目前action的元素都是`el-button`,暂不支持其他元素。

## name 

`string`

按钮名称

## click

`(row) => void`

当前按钮点击后触发的回调，回调参数就是当前列的数据

## options

`Partial<ButtonProps>`

给按钮绑定的属性，详情请看 <a href="https://element-plus.org/zh-CN/component/button.html#button-attributes" target="__blank">el-button</a>


## dynamicLoad

`(rowData: any, staticOptions: Partial<ButtonProps>) => DynamicLoadOptions`

动态更改button的options，很多时候我们都会根据当前数据的内容来动态设置操作按钮的状态，参数会传入当前列的数据和设置的options，需要返回一个新的options，最后绑定到button上。原理就是使用的`v-bind`指令，也就意味着你返回的对象可以是包含任意的属性的，但是前提你需要保证可以在el-button上生效

```js
items: [
  {
    name: '删除',
    click: function (data) {
      console.log("点击了", data)
    },
    options: {
      type: 'danger'
    },
    dynamicLoad(rowData) {
      return {
        type: 'info',
        class: 'delete-btn'
      }
    }
  }
]
```

## show 

`boolean | ((rowData: any) => boolean)`

show属性的结果是一个布尔值，默认是`true`，它将决定当前的button是否会被显示出来，也可以传入一个函数，参数就是当前列的数据，返回值必须是一个布尔值，不然默认就是false，有了show和dynamicLoad属性，你可以方便的对button就行控制