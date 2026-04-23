window.addEventListener("load", () => {
  const pics = document.querySelectorAll(".pic");
  const lightBox = document.querySelector("#lightBox");
  const lightBoxImg = document.querySelector("#lightBox-img");

  pics.forEach((pic, index) => {
    //pic = item (pics의 요소들)
    // console.log(pic, index);

    // pic 클릭 시 lightbox 보임
    pic.addEventListener("click", () => {
      // console.log(pic);
      lightBox.style.display = "block";

      // pic 클릭시 해당 이미지 가져오기 - 속성 수정하는 과정
      const bigSrc = pic.dataset.src;
      console.log(bigSrc);
      // console.log(lightBoxImg.alt); // 속성
      lightBoxImg.src = bigSrc;
    });
  });
  // lightbox 클릭 시 없어짐
  lightBox.addEventListener("click", () => {
    lightBox.style.display = "none";
  });
});
