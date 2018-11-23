
/* jshint esversion: 6 */

/* 定义一个栈类 */
function stack(){
    // 栈
    let arr = [];          //私有属性，只有类里面的方法可以方法
    // 查看栈
    this.getArr = ()=>{
        return arr;
    },
    // 进栈push()
    this.push = (element)=>{
        arr.push(element);
    },
    // 出栈pop()
    this.pop = ()=>{
        return arr.pop();
    },
    // 查看栈顶peek()
    this.peek = ()=>{
        return arr[arr.length-1];    // 倒数第一个元素        
    },
    // 查看栈是否为空isEmpty()
    this.isEmpty = ()=>{
        return arr.length == 0;
    },
    // 查看栈元素个数size()
    this.size = ()=>{
        return arr.length;
    },
    // 清空栈clear()
    this.clear = ()=>{
        arr = [];
    }

}

/* 十进制转二进制 */
function decimalToBinary(num){
    let s = new stack();
    let remainder;
    while(num>0){
        remainder = num%2;
        s.push(remainder);
        num = Math.floor(num/2);  //向下取整，如5÷2=2.5向下取整2
    }
    return s.getArr().join('');
}
