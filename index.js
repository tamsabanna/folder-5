const input = document.getElementById("input");
const addtag = document.querySelector(".tags");

const myfunc = () =>{

    if(input.value === ""){
        return null;
    }

    const tag = document.createElement("div");
    tag.setAttribute("class", "tag");
    tag.innerText = (input.value);
    
    tags.append(tag);
};