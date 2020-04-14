/*
 * @Descripttion: 
 * @version: 
 * @Author: wuna
 * @Date: 2020-04-14 22:20:15
 * @LastEditors: wuna
 * @LastEditTime: 2020-04-14 23:16:08
 */
// let Animal=function(type){
//     this.type=type
//     // this.eat=function(){}
// }
// Animal.prototype.eat=()=>{
//     Animal.walk() //静态方法引用
//     console.log("i am eat")
// }
// // 静态方法
// Animal.walk=()=>{
//     console.log("i am walk")
// }
// let Dog= function(){
//     Animal.call(this,'dog')
// }
// Dog.prototype=Animal.prototype
// Dog.prototype.run=function(){
//     console.log("i am run")
// }
// let dog=new Dog("dog")
// dog.run()


// let _age=4
class Animal{
    constrctor(type){
        this.type=type
    }
    eat(){
        Animal.walk()
        console.log("i am eat")
    }
    // get age(){
    //    return _age
    // }
    // set age(val){
    //     if(val <7 && val >4){
    //         _age=val
    //     }
    // }
    static walk(){
        console.log("i am walk")
    }
    
}
class Dog extends Animal{
 constructor(type,age){
        super(type)  //  Anmal.call(this,'dog')
        this.age=age
    }
}
let dog = new Dog('dog',3)
dog.age