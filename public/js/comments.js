let socket = io();
let lastComment;

socket.on("comments", data => {
    let section = document.getElementById("comment-section");
        console.log(data.comments);
    for(let i = data.comments.length-1; i >= 0 ; i--){
        let p = document.createElement("p");
        p.innerHTML = data.comments[i];
        p.classList.add("comment");
        p.style.width= p.innerHTML.length*20 + "px";
        section.appendChild(p);
    }
});

function comment(){
    let comment = document.getElementById("input").value;
    let data = {
        comment,
    }
    if(comment != lastComment) socket.emit("comment", data);
    lastComment = comment;
    location.reload();
}