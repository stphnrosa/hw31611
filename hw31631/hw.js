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

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl= document.querySelector("#sub-menu");

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

//Set the CSS position property of subMenuEl to the value of absolute. 
subMenuEl.style.position = "absolute";

//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks
const topMenuLinks = document.querySelectorAll("a");

//Attach a delegated 'click' event listener to topMenuEl.

topMenuEl.addEventListener("click", (event) =>{
event.preventDefault()
console.log(event.target.tagName)
if (event.target.tagName.toLowerCase() !== "a"){
  return
}

  console.log(event.target.textContent)


})

ToggleEvent = (event) => {
  event.preventDefault()
  console.log(event.target.tagName)
  if (event.target.tagName.toLowerCase() !== "a"){
    return
  }
  
    console.log(event.target.textContent)
  
  }