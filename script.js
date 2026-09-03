let btn = document.querySelector("button");

btn.addEventListener("click", ()=> {
    let inp = document.querySelector("input");
    let uList = document.querySelector("ul");

    let li = document.createElement("li");
    li.innerText = inp.value;
    uList.appendChild(li);
    inp.value = "";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");
    li.appendChild(editBtn);

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    li.appendChild(delBtn);

});

let ul = document.querySelector("ul");

ul.addEventListener("click", function(event){
    if(event.target.classList == "delete"){
        let par = event.target.parentElement;
        par.remove();
        // console.log(event.target); it returns the button element
    }

    if(event.target.classList == "edit"){
        let par = event.target.parentElement;

        // let inp = document.querySelector("input");
        // let uList = document.querySelector("ul");

        let editInput = document.createElement("input");
        editInput.placeholder = "edit task";
        let changeBtn = document.createElement("button");
        changeBtn.innerText = "edit";
        par.appendChild(editInput);
        par.appendChild(changeBtn);

        changeBtn.addEventListener("click", ()=> {
            par.innerText = editInput.value;

            let editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("edit");
            par.appendChild(editBtn);

            let delBtn = document.createElement("button");
            delBtn.innerText = "Delete";
            delBtn.classList.add("delete");
            par.appendChild(delBtn);
        })

        // console.log(par); returns current li
    }
    
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "LI"){
    event.target.classList.toggle('completed');
    }
});