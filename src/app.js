const buttons = document.querySelectorAll("button");
const bookmarks = document.querySelectorAll("i");
const wizards = document.querySelectorAll(".superhero");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.parentNode.querySelector("p");
    answer.classList.toggle("disp_none");

    button.innerText = answer.classList.contains("disp_none")
      ? "show answer"
      : "hide answer";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    const answer = button.parentNode.parentNode.querySelector("span");
    answer.classList.toggle("disp_none");
  });
});

wizards.forEach((wizard) => {
  wizard.addEventListener("click", () => {
    const hints = wizard.parentNode.querySelector("article");
    hints.classList.toggle("disp_none");
    const call = wizard.querySelector("p");
    call.classList.toggle("disp_none");
  });
});

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("far");
    bookmark.classList.toggle("fas");
  });
});
