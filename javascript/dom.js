const result = document.getElementById("para");
result.innerHTML = "Hello, World!";
 
//const paragraphs = document.getElementsByClassName("intro");
//paragraphs[0].innerHTML = "This is the first paragraph.";
//paragraphs[1].innerHTML = "This is the second paragraph.";
//paragraphs[2].innerHTML = "This is the third paragraph.";


/*const abc = document.getElementsByTagName("p");
abc[0].innerHTML = "This is the not first paragraph.";
abc[2].style.color = "red";
abc[1].style.fontSize = "20px";
abc[1].style.fontFamily = " Arial, sans-serif";
abc[0].style.backgroundColor = "yellow";*/

const test = document.querySelectorAll(".intro");
test.forEach((element) => {
  element.style.color = "blue";
  element.style.fontSize = "18px";
  element.style.fontFamily = "Arial, sans-serif";
  element.style.backgroundColor = "lightgray";
});


