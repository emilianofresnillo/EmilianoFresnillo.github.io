let targetElement = document.querySelector('[data-modal="TargetImage"]');
const targetTitle = document.querySelector('[data-modal="TargetTitle"]');
const targetSoftware = document.querySelector('[data-modal="TargetSoftware"]');
const targetDescription = document.querySelector(
  '[data-modal="TargetDescription"]'
);
let targetContainer = document.querySelector(
  '[data-modal="TargetImageContainer"]'
);



document.getElementById("switch-1").addEventListener("click", function () {
  console.log("clicked");
  const blacklogo = document.querySelector('[data-logo="black"]');
  const whitelogo = document.querySelector('[data-logo="white"]');

  if (this.checked) {
    blacklogo.style.opacity = 0;
    whitelogo.style.opacity = 1;
  } else {
    blacklogo.style.opacity = 1;
    whitelogo.style.opacity = 0;
  }
});




document
  .getElementById("ImageModalClose")
  .addEventListener("click", function () {
    console.log("buttonclosed");

    document.getElementsByClassName("ImageModal")[0].classList.remove("Open");

    targetContainer.innerHTML = "";
    targetElement = document.createElement("img");
    targetElement.setAttribute("data-modal", "TargetImage");
    targetContainer.append(targetElement);
    targetContainer.classList = "ImageDisplay";

  });



const imageProjects = document.querySelectorAll('[data-modal="image"]');

imageProjects.forEach((project) => {
  project.addEventListener("click", function () {
    document.getElementsByClassName("ImageModal")[0].classList.add("Open");

    const clickedElementImageSource = this.querySelectorAll("img")[0].src;
    const projectTitle = this.querySelectorAll("h2")[0].innerHTML;
    const projectSoftware = this.querySelectorAll("h3")[0].innerHTML;
    const projectDescription = this.getAttribute("data-description");

    console.log(targetElement);

    targetElement.src = clickedElementImageSource;
    targetTitle.innerHTML = projectTitle;
    targetSoftware.innerHTML = projectSoftware;
    targetDescription.innerHTML = projectDescription;

  });
});




const slideshowProjects = document.querySelectorAll('[data-modal="slideshow"]');

slideshowProjects.forEach((project) => {
  project.addEventListener("click", function () {
    console.log("rnandm");

    const clickedElementImageSource = this.querySelectorAll("img")[0].src;
    const projectTitle = this.querySelectorAll("h2")[0].innerHTML;
    const projectSoftware = this.querySelectorAll("h3")[0].innerHTML;
    const projectDescription = this.getAttribute("data-description");

    targetElement.src = clickedElementImageSource;
    targetTitle.innerHTML = projectTitle;
    targetSoftware.innerHTML = projectSoftware;
    targetDescription.innerHTML = projectDescription;


    document.getElementsByClassName("ImageModal")[0].classList.add("Open");

    const clickedSlides = this.querySelectorAll(".slide");

    clickedSlides.forEach((image) => {
      targetContainer.append(image);
    });

    $(targetContainer).slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });

    console.log(clickedSlides);
  });
});

const videoProjects = document.querySelectorAll('[data-modal="video"]');

videoProjects.forEach((project) => {
  project.addEventListener("click", function () {
    const clickedElementImageSource = this.querySelectorAll("img")[0].src;
    const projectTitle = this.querySelectorAll("h2")[0].innerHTML;
    const projectSoftware = this.querySelectorAll("h3")[0].innerHTML;
    const projectDescription = this.getAttribute("data-description");
    const projectV = this.getAttribute("data-iframe");
    console.log(this)

    targetElement.remove();
    const videoiframe = document.createElement("iframe")
    videoiframe.setAttribute("src", projectV)
    videoiframe.setAttribute("width", "600px")
    videoiframe.setAttribute("height", "300px")
    targetContainer.append(videoiframe)
    targetTitle.innerHTML = projectTitle;
    targetSoftware.innerHTML = projectSoftware;
    targetDescription.innerHTML = projectDescription;

    document.getElementsByClassName("ImageModal")[0].classList.add("Open");
  });
});
