// On clicking remove button the item should be removed from DOM as well as localstorage.

var bucketdata = JSON.parse(localStorage.getItem("coffee"))||[];
var total = bucketdata.reduce(function(sum,e){
    return sum + e.price;
},0);

document.getElementById("total_amount").innerText = `${total}`


bucketdata.map(function(e,i){
    let box = document.createElement("div");
    let img = document.createElement("img");
        img.src = e.image;
        img.style.height = "270px";
        img.style.width = "100%";

        let title = document.createElement("p");
        title.innerText = e.title;

        let price = document.createElement("p");
        price.innerText = e.price;

        let btn = document.createElement("button");
        btn.innerText = "remove";
        btn.setAttribute("id","remove_coffee");
        btn.addEventListener("click", function(){
            removeItem(i)
        })
        box.append(img,title,price,btn);
        document.getElementById("bucket").append(box);
    
})

function removeItem(i){
    bucketdata.splice(i,1);
    localStorage.setItem("coffee", JSON.stringify(bucketdata));
    window.location.reload();
}

