let btn = document.querySelector("button");

let list = JSON.parse(localStorage.getItem("list")) || [];
renderTasks(list);

btn.addEventListener("click", () => {
    let inp = document.querySelector("input");
    // let uList = document.querySelector("ul");

    list.push(inp.value);
    
    localStorage.setItem("list", JSON.stringify(list)); // converts array to jSON

    // let li = document.createElement("li");

    renderTasks(list);

    // li.innerText = inp.value;
    // uList.appendChild(li);
    inp.value = "";

    // let editBtn = document.createElement("button");
    // editBtn.innerText = "Edit";
    // editBtn.classList.add("edit");
    // li.appendChild(editBtn);

    // let delBtn = document.createElement("button");
    // delBtn.innerText = "Delete";
    // delBtn.classList.add("delete");
    // li.appendChild(delBtn);

});

let ul = document.querySelector("ul");

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        let par = event.target.parentElement;
        // par.remove();
        // console.log(event.target); it returns the button element

        let delIdx = Number(par.dataset.index);
        // console.log(delIdx);  // index = 0, 1, 2 and so on... in string format "1", "2"...
        list.splice(delIdx, 1);
        localStorage.setItem("list", JSON.stringify(list));
        renderTasks(list);
    }

    if (event.target.classList.contains("edit")) {
        let par = event.target.parentElement;

        let editIdx = Number(par.dataset.index);

        // let inp = document.querySelector("input");
        // let uList = document.querySelector("ul");

        let editInput = document.createElement("input");
        editInput.placeholder = "edit task";
        let changeBtn = document.createElement("button");
        changeBtn.innerText = "edit";
        par.appendChild(editInput);
        par.appendChild(changeBtn);

        

        changeBtn.addEventListener("click", () => {
            list[editIdx] = editInput.value;
            localStorage.setItem("list", JSON.stringify(list));
            renderTasks(list);
        })

        // console.log(par); returns current li
    }

    if (event.target.nodeName == "LI") {
        event.target.classList.toggle('completed');
    }

});

function renderTasks(listItems){
    let uList = document.querySelector("ul");
    uList.innerText = ""; // deleting the entire UL then again refilling it with new values (including the old ones)
    for(let i = 0; i < listItems.length; i++){
        let li = document.createElement("li");
        li.innerText = listItems[i];
        li.dataset.index = i;
        uList.appendChild(li);

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        li.appendChild(editBtn);
        editBtn.innerText = "Edit";

        let delBtn = document.createElement("button");
        delBtn.classList.add("delete");
        li.appendChild(delBtn);
        delBtn.innerText = "Delete";
    }
}