module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
  parserOptions: { // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    parser: 'babel-eslint', // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    // "ecmaVersion": 6,
  },
  env: { // 此项指定环境的全局变量，下面的配置指定为浏览器环境
    "node": true,
  },
  extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
	],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-multi-spaces": 1, // 不能用多余的空格
    "key-spacing": [1, {  // 对象字面量中冒号的前后空格
      "beforeColon": false,
      "afterColon": true
    }],
    "no-multi-spaces": 1, //不能用多余的空格
    "vue/html-self-closing":"off",
    "vue/order-in-components":"off",
    "vue/html-closing-bracket-spacing":"off",
    "vue/singleline-html-element-content-newline":"off",
    "vue/multiline-html-element-content-newline":"off",
    "no-undef":"off",
    "vue/max-attributes-per-line":"off",
    "vue/attributes-order":"off",
    "vue/no-unused-components":"off"
  }
}

