window.addEventListener("load", () => {
  const pics = document.querySelectorAll(".pic");
  const lightBox = document.querySelector("#lightBox");
  const lightBoxImg = document.querySelector("#lightBox-img");
  const lightBoxTitle = document.querySelector("#lightBox-title");

  pics.forEach((pic) => {
    pic.addEventListener("click", () => {
      const bigSrc = pic.dataset.src;
      const bigTitle = pic.dataset.title;

      lightBox.style.display = "flex";
      lightBoxImg.src = bigSrc;
      lightBoxTitle.textContent = bigTitle;
    });
  });
  // 배경 클릭시 닫기
  lightBox.addEventListener("click",()=>{
    lightBox.style.display = "none"
  })
});
