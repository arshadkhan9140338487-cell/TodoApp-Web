btn= document.querySelector(".btn");
ul= document.querySelector("ul");
list= document.querySelector("li");
del = document.querySelector(".del");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    input= document.querySelector("input");
    
    let listItem= document.createElement("li");
    let deletebtn= document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.classList.add("delbtn");
    listItem.innerText = input.value;
    ul.appendChild(listItem);
    listItem.appendChild(deletebtn);
    input.value= "";
}
);

del.addEventListener("click",(event)=>{
    
    if(event.target.className== "delbtn"){
        event.target.parentElement.remove(); 
    }
}
);
