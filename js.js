document.addEventListener("DOMContentLoaded", function () {
  var h1Element = document.querySelector("#f_of_icon");
  var text = h1Element.textContent;
  var modifiedText = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] === "i") {
      modifiedText +=
        '<span style="color:rgb(15,255,133);">' + text[i] + "</span>";
    } else {
      modifiedText += text[i];
    }
  }
  h1Element.innerHTML = modifiedText;
});

function removeAndRetype() {
  let text = document.getElementById("animation_text");
  let textt = "ONE APP";
  let index = 0;
  function type() {
    if (index < textt.length) {
      text.textContent += textt.charAt(index);
      index++;
      setTimeout(type, 80);
    } else {
      setTimeout(remove, 110);
    }
  }
  function remove() {
    if (index >= 0) {
      text.textContent = textt.slice(0, index);
      index--;
      setTimeout(remove, 80);
    } else {
      index = 0;
      setTimeout(type, 110);
    }
  }
  type();
  // Start the animation when the window loads
}

window.onload = removeAndRetype;
