// string number boolean any void never...
// 通过基本类型声明
var num;
var str;
var boo;
//  any 等于关闭类型检测 （ 不建议使用 ）
// let any:any  // 表示任意类型 可以赋值给任意变量
var any; // 声明变量不赋值，就默认判断类型为any
any = '123';
any = 123;
any = false;
// unknown 未知类型 不能直接赋值给其他变量  类型安全的 any
var u;
var s;
// s = any
// s = u
// 解决方案 一
if (typeof u === 'string') {
	s = u;
}
// 解决方案 二 类型断言：用来定义变量实际类型
// s = u as 'string'
s = u;
// 通过字面量直接声明
// 可以使用 | 连接多个类型 （联合类型）
// sex 值只能为 man 或者 woman
var sex;
sex = 'man';
sex = 'woman';
// sex = 'hello'
var type;
type = 'string';
type = 123;
// type = false
// 函数无返回值  void:函数没有返回值
function add() {
	// ...
	// return false // 报错
}
//  never 表示永远不会有返回结果
function nev() {
	throw new Error('报错！');
}
