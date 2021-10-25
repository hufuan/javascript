let obj = {a: {b: {c:1}}}
//console.log(obj.a.b.c);

const  {a: {b: {c}}} = obj;
console.log(c);

let obj2 = {a:{b:2}};
const {a:{b:data}} = obj2;
console.log(data);
