// let obj:object
let obj:{}
obj = {}
obj = function name() {}

let obj1:{name:string}
// obj1={}
// obj1 ={ name:'Bob',age:20}
obj1 ={ name:'Bob'}

// age?:number   属性名后面接 ? 代表是可选属性
let obj2:{name:string,age?:number}
obj2={name:'Davie'}
obj2={name:'Davie',age:20}

/**
 * [propName:string]:any   属性名的类型为string 值的类型为any
 * propName 可以为任意字符
 */
let obj3:{name:string, [propName:string]:any}
obj3 = { name:'Lucy'}
obj3 = { name:'Lucy',age:20}
obj3 = { name:'Lucy',age:20,sex:'girl'}

// 声明函数   （形参:类型, 形参:类型,... ） => 返回值类型
let fn:(a:number, b:number)=>number
fn = function ( x,y ){
  // return x+y+'1'
  return x+y
}

// 数组声明   类型:[] 或者 Array<类型>

let arr1:string[]
let arr2:Array<number>


// 元组  固定长度的数组
let arr3:[number,number]
// arr3 = [1,2,3]
// arr3 = [1,'3']
arr3 = [1,2]

// 枚举  enum 列举出可能存在的类型
enum Gender {
  Male,
  Famale
}

let boy:{name:string, gender:Gender}

boy = {
  name:'Tom',
  gender:Gender.Male
}

// & 同时存在

let ab:{ name:string} & { age:number }
ab = {name:'123',age:20}

// 类型别名  type 类型别名 = 类型
type Mytype = 1|2|3|4|6
let k:Mytype
