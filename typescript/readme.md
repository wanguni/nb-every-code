### 环境搭建
1. 安装nodejs

2. npm 安装 typescript 编译器

   - 打开命令行工具
   - 全局安装 typescript

   ``` js
   npm i -g typescript
   ```

3. 创建一个ts文件

4. 使用命令进行编译

   ```js
   tsc xxx.ts
   ```

   编译成功后会生成同名的js文件

5. 生成配置文件 `tsconfig.json`
   生成文件后会解决或者新增一些错误提示。
   ```js
   tsc --init
   ```



### 变量类型声明

- 基本语法

``` ts
let 变量:类型

let 变量:类型 = 值

function sum(参数:类型, 参数:类型):类型{
  ...
}
```

- 自动类型检测

```ts
let a = false // 自动检测a为布尔值

a = 1 // 报错
```

### 类型断言

用来定义变量实际类型

```ts
变量 as 类型
<类型>变量
```





