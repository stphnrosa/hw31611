// got all of our variables cached
const body = document.querySelector('body')
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const ol = document.createElement('ol')
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

//adding elements to the body
body.appendChild(div1)
body.appendChild(div2)
div1.appendChild(ol)
div2.appendChild(ul)

for (let i = 0; i < 3; i++) {
    ol.appendChild(document.createElement('li'))
    ul.appendChild(document.createElement('li'))
}

const newEl = (s) => document.createElement(s);
const app = document.getElementById("app");

const d1 = app.appendChild(newEl("div"));
const d2 = app.appendChild(newEl("div"));

d1.textContent = <p>"I am div 1";</p>;

d2. innerHTML = <p> this element was created with <code> innerHTML</code>, so all of the HTML tags are being <b>processed as HTML</b>. This is allows us to create<i> multiple styled elements</i> within the node.</p>;

d1.style.backgroundColor = "yellow";

const a1 = app.appendChild(newEl('a'));
a1.textContent = 'Google';
a1.setAttribute('href', 'https://www.google.com');