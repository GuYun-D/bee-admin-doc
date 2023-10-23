# 介绍

经过前面的介绍你或许也会发现，频繁的写`tableConfig` 配置也是在做着重复的工作，所以我编写了一个命令行工具，辅助我们进行项目开发

## 全局安装

```js
npm i @bee/bee-cli -g
```

安装完成之后你就有两个命令可以使用了一个是`bee`，为了简化还有一个命令就是`b`


## 查看版本号

```js
bee -v
```

## 创建项目

通过脚手架可以快速创建出项目

```js
bee create [project-name]
```

::: warning

- 在使用这个命令之前您需要确保配置了 github `SSH keys`, 免密码拉取

- 如果还是创建失败，你可以尝试查看 `.gitconfig`(C:\Users\Administrator)文件是否添加了`[credential "https://github.com"]`


:::