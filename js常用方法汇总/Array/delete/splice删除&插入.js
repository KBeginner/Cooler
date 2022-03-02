/* 
    splice（）
    用于删除原数组的一部分，并且可以在删除的位置添加新的数组成员，返回值是被删除的数组元素。（改变原数组）

    splice（t, v, s）t:被删除元素的起始位置；v：被删除元素个数；s:s以及后面的元素为被插入的新元素。
*/

const arr = [3,4,4,5,4,6,5,7];
const a = arr.splice(3, 2, 12); // [5, 4]
console.log(arr); // [3, 4, 4, 12, 6, 5, 7]

