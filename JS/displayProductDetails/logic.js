

let list =  JSON.parse(localStorage.getItem("listOfProduct"));



function search(list , text){
    list = list.filter((val,index)=>{
            if(text == list[index].NameCar.slice(0,text.length)){
                return val
            }
    }) 
    return list;
} 







// let notd = ali.filter((val,ind)=>{
    // if(ali[ind] !== ali[ind+1]){
    //     console.log( ali[ind]);
    // return ali[ind];
    // }
// });