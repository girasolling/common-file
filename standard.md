## <font color=#E06C69>一、项目结构</font>

```
|-- public/
    |-- index.html
|-- src/
    |-- api/
        |-- sys.js
    |-- assets/
        |-- style/
            |-- public.scss
        |-- image/
            |-- icon.png
    |-- components/
        |-- my-components.vue
    |-- mixins/
        |-- my-mixins.js
    |-- pages/
        |-- page1/
            |-- index.vue
        |-- page2/
            |-- index.vue
    |-- plugins/
        |-- axios/
            |-- index.js
    |-- router/
        |-- router.js
    |-- store/
        |-- index.js
        |-- modules/
            |-- module1.js
    |-- App.vue
    |-- main.js
|-- .env
|-- .eslintrc.js
|-- babel.config.js
|-- package.json
|-- vue.config.js
```

## <font color=#E06C69>二、组件命名</font>
+ 组件命名参考:

  [vue.js风格指南--组件文件](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
+ 我们统一使用 kebab-case 命名方式。

## <font color=#E06C69>三、函数命名、变量命名</font>
+ 使用语义化、通用的命名方式， 使用 Camel 命名法；
+ 多个相似组件中具有相同命名的变量和函数要具有相同的含义。


## <font color=#E06C69>四、注释</font>
### 1、原则 
+ 如无必要，勿增注释。简单的函数和变量可以不用添加注释。
+ 如有必要，尽量详尽。复杂的函数和有特殊意义的变量需要添加注释。
### 2、函数注释
+ 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识。
+ 参数和返回值注释必须包含说明信息，类型信息根据情况添加。

```

/**
 * 函数描述
 *
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长
 *     那就换行了.
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */
function foo(p1, p2, p3) {
    var p3 = p3 || 10;
    return {
        p1: p1,
        p2: p2,
        p3: p3
    };
}

```

### 3、文件注释
+ 文件注释用于告诉不熟悉这段代码的读者这个文件中包含哪些东西。必须包含文件的大体内容和作者。
+ 通用组件必须添加文件注释，普通页面根据情况添加。


## <font color=#E06C69>五、CSS</font>

+ 使用语义化、通用的命名方式；
+ 使用连字符 - 作为 ID、Class 名称界定符，***不要驼峰命名法和下划线***；
+ 避免选择器嵌套层级过多，尽量少于 3 级；
+ 避免选择器和 Class、ID 叠加使用；
+ public.scss中的通用样式必须添加注释；
+ 组件中的样式必须添加 scoped
+ 非特殊场景尽量少使用!important，如果使用须添加必要的注释。
+ @mixin 函数必须添加注释。
