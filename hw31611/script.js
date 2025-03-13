// select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector("main");

// Set the background color of mainEl to 'var(--main-bg)'
mainEl.style.backgroundColor = "var(--main-bg)";

//set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1> DOM Manipulation </h1>";

// Add a class of clex-ctr to mainEl
mainEl.classList.add("flex-ctr");

//select abd cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById("top-menu");

//set the geight of the topMenuEl to 100%
topMenuEl.style.height = "100%";

//set the background color of topMenuEl to 'var(--top-menu-bg)'
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");

//////PART 3: ADDING MENU BUTTONS ////////

const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

///itereate over the enture menuLinks array and for each "link" object
menuLinks.forEach((link) => {
  // create an <a> element
  const anchor = document.createElement("a");
  // on the new element add an href attribute with its value set to the href property of the "link"
  anchor.setAttribute('href', link.href)

//set the new elements content to the valur of the text propert of the 'link; object.
anchor.textContent = link.text;


topMenuEl.appendChild(anchor);

})



/// YAYYY!!!!!!/////