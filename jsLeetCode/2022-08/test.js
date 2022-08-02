const arr =[
    { data :1 },
    { data : 1}
]
const newArray = arr.map( item =>{
    // ...item,
    item.data = item.data +2
    return item
})

console.log(arr)
console.log(newArray)