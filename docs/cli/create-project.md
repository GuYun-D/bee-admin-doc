# 创建项目

bee-cli 提供了从项目初始化到依赖安装再到自动运行项目的功能，让你无感操作

为了便于定制我提供了两种创建方式

## 简单安装

```js
bee create <project-name>
```

项目名称是必填的，您无需事先创建一个文件夹，bee-cli 会自动为您创建

## 使用 options

在键入命令的时候传入相应的 options 可以实现自定义一些配置，如`使用什么包管理器`、`是否自动运行项目`

| 简写 |       详细       |            描述            |
| ---- | :--------------: | :------------------------: |
| -a   |      --auto      |   自动安装依赖，运行项目   |
| -p   | --packageManager |  使用什么包管理器安装依赖  |
| -c   |    --custorm     | 以步骤的方式自定义项目创建 |

- 自动运行项目

包含自动`install`和`run`的步骤

```
bee create test -a
```

- 自定义包管理器

```
bee create test-project -a -p yarn
```

默认的包管理器是`yarn`(因为我喜欢用 😂)，目前仅支持`yarn`、`npm`、`pnpm`

如果你不喜欢这种方式，您还可以使用步骤条的方式来进行创建

```
bee create test-project -c
```

![create-projec-c](/public/create-project.png)

在步骤中项目文件夹依然可以配置，默认的名字就是当前你在命令中填写的`projectName`