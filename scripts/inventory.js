function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let all_products=document.getElementById("all_products");
    all_products.innerHTML=null;

    data.forEach(function(el,index){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let p=document.createElement("p");
        p.innerText=el.type;

        let p1=document.createElement("p");
        p1.innerText=el.desc;

        let p2=document.createElement("p");
        p2.innerText=el.price;

        let btn=document.createElement("button");
        btn.id=`remove_product`;
        btn.innerText="Remove"
        btn.addEventListener(`click`,function(){
            remove(index);
        });

        div.append(img,p,p1,p2,btn);
        all_products.append(div)
    });
}

append();

function remove(index){
    let data=JSON.parse(localStorage.getItem("products"))||[];

    let newData=data.filter(function(el,i){
        if(i===index){
            let daba=JSON.parse(localStorage.getItem("daba"))||[];
            daba.push(el);
            localStorage.setItem('daba',JSON.stringify(daba));
        }else{
            return i!==index;
        }
    });
    localStorage.setItem("products",JSON.stringify(newData));
    append();

    console.log(newData)
}