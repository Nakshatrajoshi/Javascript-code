let arr =[1,2,3,4,5]

 let a = arr.map((value, index , array)=>{
    console.log(value, index , array)
    return value + 10
 })
 console.log(a)

 // creates a new array by peforming same operation on each array element


 // filter value filter kar ta hai us ko koi bhi value dege tho vo value filter kar degea for example :-

 let arr2 = [45,20 ,10, 9 , 8 ,30]

 let a2 = arr2.filter((a) =>{
    return a > 10;
 })
 console.log(a2)

const reduce_func = (h1,h2)=> {
   return h1+h2 
}

 let arr3 = arr2.reduce(reduce_func)
 console.log(arr3)
