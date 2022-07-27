// const { default: test } = require("node:test");
const { search , category ,price ,displyListOfProduct } = require("./logic");
let listOfProduct = [
    {
        NameCar:"BMW1",
        TitleCar :"BMW2020",
        Price:28000,
        photoURL:"https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
        category : "bus",
        id:"1"

    },
    {
        NameCar:"BMW2",
        TitleCar :"BMW2021",
        Price:28000,
        photoURL:"https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
        category : "cars",
        id:"2"

    },
    {
        NameCar:"BMW3",
        TitleCar :"BMW2022",
        Price:8000,
        photoURL:"https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi nobis dignissimos veniam recusandae commodi, harum sunt alias adipisci eligendi cupiditate. Doloremque doloribus, laudantium recusandae esse rerum voluptas velit distinctio.",
        category : "cars",
        id:"3"

    }
]




describe('test', () => {
    test('one test', () => {
        
        const actual =  category(listOfProduct,"bus")[0].id;
        const expected = '1'; 
        expect(actual).toBe(expected);
    })

    test('one test', () => {
        
        const actual =  category(listOfProduct,"cars")[0].id;
        const expected = '2'; 
        expect(actual).toBe(expected);
    })


    
    test('one test', () => {
        
        const actual =  category(listOfProduct,"Jeeps");
        const expected = []; 
        expect(actual).toEqual(expected);
    })

      
    test('one test', () => {
        
        const actual =  search(listOfProduct,"Jeeps");
        const expected = []; 
        expect(actual).toEqual(expected);
    })

      
    test('one test', () => {
        
        const actual =  price(listOfProduct,100000,500000);
        const expected = []; 
        expect(actual).toEqual(expected);
    })


    test('one test', () => {
        
        const actual =  search(listOfProduct,"BMW1")[0].id;
        const expected = '1'; 
        expect(actual).toBe(expected);
    })

    test('one test', () => {
        
        const actual =  search(listOfProduct,"BM")[1].id;
        const expected = '2'; 
        expect(actual).toBe(expected);
    })

    test('one test', () => {
        
        const actual =  search(listOfProduct,"BM")[0].id;
        const expected = '1'; 
        expect(actual).toBe(expected);
    })
    test('one test', () => {
        
        const actual =  search(listOfProduct,"BM")[2].id;
        const expected = '3'; 
        expect(actual).toBe(expected);
    })



    test('one test', () => {
        
        const actual =  price(listOfProduct,0 , 9000)[0].id;
        const expected = '3'; 
        expect(actual).toBe(expected);
    })



    test('description', () => {
        
        const actual =  price(listOfProduct,9000 , 50000)[1].id;
        const expected = '2'; 
        expect(actual).toBe(expected);
    })


    
    test('description', () => {
        
        const actual =  price(listOfProduct,9000 , 50000)[0].id;
        const expected = '1'; 
        expect(actual).toBe(expected);
    })

    
})
