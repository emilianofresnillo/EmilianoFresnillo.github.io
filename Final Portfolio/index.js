document.getElementById("switch-1").addEventListener("click", function(){
    console.log("clicked");
    const blacklogo= document.querySelector('[data-logo="black"]')
    const whitelogo= document.querySelector('[data-logo="white"]')

    if(this.checked) {
        blacklogo.style.opacity = 0;
        whitelogo.style.opacity = 1;
    } else {
        blacklogo.style.opacity = 1;
        whitelogo.style.opacity = 0;
    }
});
    
document.getElementById("ImageModalClose").addEventListener("click", function(){
    console.log("buttonclosed");

    document.getElementsByClassName("ImageModal")[0].classList.remove("Open");

})

const imageProjects = document.querySelectorAll('[data-modal="image"]');

imageProjects.forEach(project =>{

project.addEventListener("click", function(){
    
    document.getElementsByClassName("ImageModal")[0].classList.add("Open");
    
    const targetElement = document.querySelector('[data-modal="TargetImage"]');
    const targetTitle = document.querySelector('[data-modal="TargetTitle"]');
    const targetSoftware = document.querySelector('[data-modal="TargetSoftware"]');


    const clickedElementImageSource= this.querySelectorAll('img')[0].src;
    const projectTitle = this.querySelectorAll('h2')[0].innerHTML;
    const projectSoftware = this.querySelectorAll('h3')[0].innerHTML;



    targetElement.src = clickedElementImageSource;
    targetTitle.innerHTML = projectTitle;
    targetSoftware.innerHTML = projectSoftware;

    //grab source url from image on item clicked
    //grab inner html p tags
    //grab data-description attribute

    //insert that url into the image modal's tag










    })
})