
// 声明数字类型的变量a
let a:number 

a = 123
a = 456

// a = '123' // 此行报错 无法将字符串赋值给数字类型


let b:string

b = 'hello'
// b = 123


// let c:boolean = true
// 如果变量的声明和赋值同时进行，ts可以自动对变量不行类型检测
let c = true

c = false
// c = 124


function sum( a:number, b:number):number{
  return a + b  // 函数返回值类型 number
  // return a + 'b'  
}

sum(123,456)
// sum(123,'456')

// 通过命令行编译也会提示报错，但是会编译成功，生成js文件
// 可以通过配置文件限制报错时编译失败