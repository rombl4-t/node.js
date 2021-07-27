function buttonAdder(btn) {
    btn = document.createElement("button");
    btn.innerText = "0";
    let counter = 1;
    btn.addEventListener("click", () => btn.innerText = counter++);
    document.body.append(btn);
  }
  export default buttonAdder;