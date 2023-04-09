const product = [
    {
        id: 1,
        image: 'pic/item-01.jpg',
        title: 'RING',
        price: 1000,
        
    },
    {
        id: 1,
        image: 'pic/item-02.jpeg',
        title: 'EARRINGS',
        price: 500,
       
    },
    {
        id: 1,
        image: 'pic/item-03.avif',
        title: 'HOODIE',
        price: 2000,
      
    },
    {
        id: 2,
        image: 'pic/item-04.jpg',
        title: 'GLASSES',
        price: 1500,
     
    },
    {
        id: 2,
        image: 'pic/item-05.jpg',
        title: 'NECKLACE',
        price: 2500,
      
    },
    {
        id: 2,
        image: 'pic/item-06.jpg',
        title: 'BRACELET',
        price: 3000,
    
    },
    {
        id: 3,
        image: 'pic/item-07.jpeg',
        title: 'RING',
        price: 1500,
 
    },
    {
        id: 3,
        image: 'pic/item-08.jpg',
        title: 'TEE',
        price: 500,
        
    },
    {
        id: 3,
        image: 'pic/item-09.jpg',
        title: 'EARRINGS',
        price: 1500,
       
    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]

    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image, title, price} = item;
            return(
                `<div class='box'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div>
                    <div class='bottom'>
                        <p>${title}</p>
                        <h2>$ ${price}.00</h2>
                        <button>Add to carts</button>
                    </div>
                </div>`)
            
        }).join('');
    };

    const flterFirstCategories = categories.filter(item);
    function item(value){
        if(value.id==1){
            return(
                value.id
            )
        }
    }
    displayItem(flterFirstCategories)
    const btns=[
        {
            id:1,
            name: '<<'
        },
        {
            id:1,
            name: '1'
        },
        {
            id:2,
            name: '2'
        },
        {
            id:3,
            name: '3'
        },
        {
            id:3,
            name: '>>',
        },
    ]

    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
    }).join('');
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        displayItem(flterCategories)
    }