var data = [
    { name: 'x', id: 1 },
    { name: 'y', id: 2 }
]


var mapdd = new Map();


data.forEach(item => {
    mapdd.set(item.id, item);
})

var text = 'aa';

text.a = 'a1'
console.log(text);
console.log(text.a);