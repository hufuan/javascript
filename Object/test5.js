let obj = {a: {b: {c:1}}}
//console.log(obj.a.b.c);

const  {a: {b: {c}}} = obj;
console.log(c);