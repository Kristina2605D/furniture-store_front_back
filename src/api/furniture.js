const productsArray = [

    {
        id: '7',
        title: "Dinning Room",
        price: 3200,
        imgUrl: "images/dinningRoom1.jpg",
        categories: ["dinning room"]
    },

    {
        id: '8',
        title: "Dinning Room",
        price: 1500,
        imgUrl: "images/dinningRoom2.jpg",
        categories: ["dinning room"]
    },

    {
        id: '9',
        title: "Dinning Room",
        price: 2000,
        imgUrl: "images/dinningRoom3.jpg",
        categories: ["dinning room"]
    },


    {
        id: '1',
        title: "Living Room",
        price: 1300,
        imgUrl: "images/bedroom1.jpg",
        categories: ["living room"]
    },

    {
        id: '2',
        title: "Living Room",
        price: 1600,
        imgUrl: "images/bedroom2.jpg",
        categories: ["living room"]
    },

    {
        id: '3',
        title: "Living Room",
        price: 1100,
        imgUrl: "images/bedroom3.jpg",
        categories: ["living room"]
    },

    {
        id: '4',
        title: "Kitchen",
        price: 1800,
        imgUrl: "images/kitchen1.jpg",
        categories: ["kitchen"]
    },

    {
        id: '5',
        title: "Kitchen",
        price: 2100,
        imgUrl: "images/kitchen2.jpg",
        categories: ["kitchen"]
    },

    {
        id: '6',
        title: "Kitchen",
        price: 2200,
        imgUrl: "images/kitchen3.jpg",
        categories: ["kitchen"]
    },



    {
        id: '10',
        title: "Office",
        price: 1900,
        imgUrl: "images/office1.jpg",
        categories: ["office"]
    },

    {
        id: '11',
        title: "Office",
        price: 2500,
        imgUrl: "images/office2.jpg",
        categories: ["office"]
    },

    {
        id: '12',
        title: "Office",
        price: 1200,
        imgUrl: "images/office3.jpg",
        categories: ["office"]
    },

    {
        id: '13',
        title: "Bedroom",
        price: 1500,
        imgUrl: "images/bedroom1.jpg",
        categories: ["bedroom"]
    },

    {
        id: '14',
        title: "Bedroom",
        price: 1600,
        imgUrl: "images/bedroom2.jpg",
        categories: ["bedroom"]
    },

    {
        id: '15',
        title: "Bedroom",
        price: 2500,
        imgUrl: "images/bedroom3.jpg",
        categories: ["bedroom"]
    },

    {
        id: '16',
        title: "Hallway",
        price: 1800,
        imgUrl: "images/hallway1.jpg",
        categories: ["hallway"]
    },

    {
        id: '17',
        title: "Hallway",
        price: 1500,
        imgUrl: "images/hallway2.jpg",
        categories: ["hallway"]
    },

    {
        id: '18',
        title: "Hallway",
        price: 1100,
        imgUrl: "images/hallway3.jpg",
        categories: ["hallway"]
    },


]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product data does not exist for ID:' + id);
        return undefined;
    }
    return productData;
}
export { productsArray, getProductData };



