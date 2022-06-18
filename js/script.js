"use strict";
window.onload = function(){

      // document.querySelector(".progressContainer").style.width;

      const cont = document.querySelector(".progressContainer");
      //   console.log(cont);
      //   находим значение высчитанных браузером стилей (они будут только на чтение) https://professorweb.ru/my/javascript/js_theory/level2/2_4.php
      const contStyles = window.getComputedStyle(cont, null); //принимает только объект и значение либо null либо «::before», «::after», «:first-line» или «:first-letter»

      const progressWidth = parseInt(contStyles.width); //contStyles.width возвращает строку 341px
      //   progressWidth = "10px";
      // console.log(typeof progressWidth);
      let coefficient = progressWidth / 100;
      //toFixed(2) округление до сотых
      coefficient = coefficient.toFixed(2);
    //   console.log(coefficient);

      const topProgress = document.querySelector(".progressTop");
      //   console.log(topProgress);

      const bottomProgress = document.querySelector(".progressBottom");
      //   console.log(bottomProgress);

      let progressCounter = 0;

      function progress() {
        if (progressCounter < 100) {
          progressCounter++;
        } else {
          //   progressCounter = 0;
          //   раскомментировать выше + убрать ниже и будет зациклено
          clearInterval();
          document.querySelector(".progressMainText").innerHTML =
            "Download complete!";
          document.querySelector(".progressSecondaryText").innerHTML = "";
        }
        topProgress.style.clip = `rect(0px, ${
          progressCounter * coefficient
        }px, 70px, 0px)`;
        bottomProgress.style.clip = `rect(0px,${progressWidth}px, 70px, ${
          progressCounter * coefficient
        }px)`;
      }
      //   console.log(topProgress.hasAttribute("clip"));
      //   console.log(topProgress.style.clip);

      setInterval(progress, 150);

      //   topProgress.style.clip = "rect(0px, 10px, 70px, 0px)";
}