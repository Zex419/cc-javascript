let paragraphs = document.getElementsByTagName('p');
let heading = document.getElementsByClassName('heading');
let link = document.getElementById('next-page');
let firstParagraph = document.getElementById('first');
let topic = document.createElement('h2')

//for (let count = 0; count <= paragraphs.length; count++){
  //  paragraphs[count++].innerHTML = "new content";
//}

//console.log(heading)
link.setAttribute("href", "https://ai.google.com/")
firstParagraph.style.color = 'red';
topic.innerHTML = 'Third topic';
paragraphs[1].appendChild(topic);   
doucument.write('<h1>this is new content</h1>')
