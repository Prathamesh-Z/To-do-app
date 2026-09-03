let btn = document.querySelector("button");

btn.addEventListener("click", ()=> {
    let inp = document.querySelector("input");
    let uList = document.querySelector("ul");

    let li = document.createElement("li");
    li.innerText = inp.value;
    uList.appendChild(li);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);

});

let ul = document.querySelector("ul");

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
});