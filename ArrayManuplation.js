// A Javascript function that takes an array of integers as input  and returns a new array containing only unique
//elements in the orignal array 

// using Map method
function uniqueELements(arr){
    let map = new Map()
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }
        else{
            map.set(arr[i],1)
        }
    }
    let uniquearr = []
    for(let [key,value] of map){
        if(value==1){
            uniquearr.push(key)
        }
    }
  return uniquearr
}
console.log(uniqueELements([1,2,3,4,1,2,4,8,9,10]))

// step by step explanation of above approach
// 1)create a function named uniqueELements
// 2) Declare a new Hash map
// 3)iterate over the elements in array and see if the elements in present in hashmap or not
// 4) if present increase the value of element by 1 or else make the value of element as 1 
//  like this Map(7) { 1 => 2, 2 => 2, 3 => 1, 4 => 2, 8 => 1, 9 => 1, 10 => 1 }
// 5) Iterate over the hash map and push the values in uniquearr whose value are 1 
//   and return the uniqarr

// using object method

function uniqueELements2(arr){
    let obj = {}
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]=obj[arr[i]]+1
        }
        else{
            obj[arr[i]]=1
        }
    }
     
    let uniquearr = []
    for(let key in obj){
         if(obj[key]==1){
            uniquearr.push(parseInt(key))
         }
    }
   return uniquearr

}

console.log(uniqueELements2([1,2,3,4,1,2,4,8,9,10]))


// step by step explanation of above approach
// 1)create a function named uniqueELements2
// 2) Declare a new obj
// 3)iterate over the elements in array and see if the elements in present in object or not
// 4) if present increase the value of element by 1 or else make the value of element as 1 
//  like this { '1': 2, '2': 2, '3': 1, '4': 2, '8': 1, '9': 1, '10': 1 }
// 5) Iterate over the obj and push the values in uniquearr whose value are 1 
//   and return the uniqarr