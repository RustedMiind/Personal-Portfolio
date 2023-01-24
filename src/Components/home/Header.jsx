import { useEffect } from "react";

function Header() {
  useEffect(() => {
    SeparateTitle("main-title");
    document.getElementById("start-effect").addEventListener("click", () => {
      titlePress(
        "span-char",
        "change-size",
        "change-color",
        150,
        1500,
        "start-effect"
      );
    });
  }, []);
  const SeparateTitle = (Id) => {
    let text = document.getElementById(Id).innerText;
    document.getElementById(Id).innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      document.getElementById(
        Id
      ).innerHTML += `<span class="span-char">${text[i]}</span>`;
    }
  };
  const titlePress = (
    className,
    classAdd,
    class2Add,
    transitionBetween,
    action2Delay,
    btnId
  ) => {
    if (
      !document
        .getElementsByClassName(className)[0]
        .classList.contains(class2Add) &&
      !document
        .getElementsByClassName(className)
        [
          document.getElementsByClassName(className).length - 1
        ].classList.contains(class2Add)
    ) {
      // console.log(document.getElementsByClassName(className)[0].classList.contains(class2Add))
      for (
        let i = 0;
        i <= document.getElementsByClassName(className).length;
        i++
      ) {
        //Add the first two classes
        setTimeout(function () {
          document.getElementsByClassName(className)[i].classList.add(classAdd);
          document
            .getElementsByClassName(className)
            [i].classList.add(classAdd + "-perm");
        }, i * transitionBetween);
        // remove the first class after time period
        setTimeout(function () {
          document
            .getElementsByClassName(className)
            [i].classList.remove(classAdd);
        }, 200 + transitionBetween * i);
      }
      setTimeout(function () {
        for (
          let i = 0;
          i <= document.getElementsByClassName(className).length;
          i++
        ) {
          setTimeout(function () {
            document
              .getElementsByClassName(className)
              [i].classList.add(class2Add);
          }, (transitionBetween / 2) * i);
        }

        document.getElementById(btnId).innerText = "Calm Down";
      }, action2Delay);
    } else if (
      document
        .getElementsByClassName(className)[0]
        .classList.contains(class2Add) &&
      document
        .getElementsByClassName(className)
        [
          document.getElementsByClassName(className).length - 1
        ].classList.contains(class2Add)
    ) {
      for (
        let i = 0;
        i <= document.getElementsByClassName(className).length;
        i++
      ) {
        document
          .getElementsByClassName(className)
          [i].classList.remove(classAdd);
        document
          .getElementsByClassName(className)
          [i].classList.remove(classAdd + "-perm");
        document
          .getElementsByClassName(className)
          [i].classList.remove(class2Add);
        document.getElementById(btnId).innerText = "Again haha";
      }
    }
  };
  return (
    <>
      <h1 id="main-title">RustedMind</h1>
    </>
  );
}

export default Header;
