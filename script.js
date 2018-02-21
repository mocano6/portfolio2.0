//ruchome menu--------------------------
let bar = document.querySelector('#bar');
let content = document.querySelector('.content');


bar.addEventListener('mouseover', ()=>{ 
    for(let i=1; i<bar.children.length; i++){
        bar.children[i].style.visibility = "visible";
        bar.style.transition = "all 1s";
    };
    bar.style.minWidth = "20%";
    bar.firstElementChild.style.display = "none";
    content.style.paddingLeft = "20%";
});
bar.addEventListener('mouseout', ()=>{
    
    bar.style.width = "50px";
    bar.style.minWidth = "50px";
    bar.style.backgroundColor = "rgba(0, 0, 0, 0.00)";
    for(let i=1; i<bar.children.length; i++){
        bar.children[i].style.visibility = "hidden";
        bar.style.transition = "all 1s linear";
    }
    bar.firstElementChild.style.display = "block";
    content.style.paddingLeft = "50px";
});
//-----------------------portfolio menu