# 表单设计器 jQuery 版
## 需求说明
编写一个表单设计器。包含如下功能：
* 添加字段
* 选择字段
* 删除字段
* 预览表单

### 添加字段
页面中有一个“添加”按钮，点击会弹出选择对话框，在选择对话框中选择要添加的字段类型后，页面中新增一个对应类型的表单元素。

### 选择字段
在选择对话框中，可以选择“文本”和“日期”两种字段类型中的一种，点击“提交”按钮确定选择，点击“关闭”按钮关闭对话框。

### 删除字段
每一个表单元素后面有一个“删除”按钮，点击即移除对应的表单元素。

### 预览表单
页面上有一个”预览“按钮，点击该按钮，文字变为”编辑“，页面变为预览模式，不显示”添加“和”删除“按钮。
点击”编辑“按钮，返回编辑模式，显示”添加“和”删除“按钮。

## 挑战
* 使用 jQuery 基本选择器
* 使用 jQuery 属性选择器
* 理解 jQuery 事件机制
* 理解并使用链式调用机制
* 用 jQuery UI 对话框选择字段类型

## 要求
* 禁止使用 `document.getElementById()`等 DOM 方法
* 将任务进行合理切分，每个任务完成后提交代码
* 提交代码时附上有意义的评论
* 使用快捷键编写代码

## 交付物
包括 HTML 和 JavaScript， CSS 为可选。

## 环境
* HTML 5
* JavaScript ES6
* jQuery 3.2.1
* jQuery UI 1.12.1

## 开始
在命令行中使用以下命令在用户本地任意目录下clone此题目库
```
git clone repo_of_this_template
```
首先初次下载完需要安装依赖：
```
npm install
```

用任意编辑器打开clone下来的文件夹，在`src/js/main.js`中编写JavaScript代码，在`src/main.html`中编写HTML代码。完成功能后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
```
 git remote set-url origin my_url
```
## 学习资源
1. [JavaScript基础](http://codefordream.com/courses/js_basic/sections)
2. [JavaScript初级训练营](http://codefordream.com/courses/js_learning_camps/sections)
3. [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
4. [Node 下载安装](https://github.com/creationix/nvm)
5. [NPM 下载安装](https://github.com/npm/npm)
6. [Git 参考手册](https://git-scm.com/docs)
7. [jQuery 教程](http://www.w3school.com.cn/jquery/)
