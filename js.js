document.addEventListener("DOMContentLoaded", function() {
    var h1Element = document.querySelector("#f_of_icon");
    var text = h1Element.textContent;
    var modifiedText = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i] === 'i') {
            modifiedText += '<span style="color:rgb(15,255,133);">' + text[i] + '</span>';
        } else {
            modifiedText += text[i];
        }
    }
    h1Element.innerHTML = modifiedText;
});
