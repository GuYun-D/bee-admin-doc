# project-tools

## 格式化代码

代码格式化支持三种形式，即`lint`，`prettier`, `prettier + lint`

可以通过一个 option 进行输入指定

```
-ft --fomat-type <type>               format code type, lint、prettier、all
```

## 提交代码

bee-ts-admin 使用了`husky` + `commitlint` 进行规划化提交。您可以使用`git cz`提交，也可以使用命令行提交

```js
bee commit
```

## 格式并提交代码

有可能您会觉得这样做还是比较麻烦，所以 bee-cli 还提供了一个命令，可以将格式化和提交的动作放在一起

```js
bee fcommit

bee fcommit -ft lint

bee fcommit -ft prettier
```
