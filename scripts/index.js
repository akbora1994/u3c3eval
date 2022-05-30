// Add the coffee to local storage with key "coffee"

var productsdata = JSON.parse(localStorage.getItem("coffee"))||[];
const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(url).then(function(res){
    return res.json();
    
}).then(function(res){
    console.log(res.menu.data);
     append(res.menu.data)
}).catch(function(err){
    console.log(err);
})


function append(data){
    data.map(function(e){
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = e.image;
        img.style.height = "250px";
        img.style.width = "100%";

        let title = document.createElement("p");
        title.innerText = e.title;

        let price = document.createElement("p");
        price.innerText = e.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to Bucket";
        btn.addEventListener("click", function(){
            addToBucket(e)
        })
        box.append(img,title,price,btn);
        document.getElementById("menu").append(box);


    })
}

function addToBucket(e){
    productsdata.push(e);
    localStorage.setItem("coffee", JSON.stringify(productsdata));
    window.location.reload()
}

let counter = document.getElementById("coffee_count");
let count = document.createElement("P");
count.innerText = productsdata.length;
counter.append(count);

