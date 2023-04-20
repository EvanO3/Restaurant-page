function Header(id, text){
    const header = document.createElement('header');
    header.setAttribute('id', id);
    header.textContent=text;
    return header
}

// find a way to make the buttons span so its across the nav bar
function button(id, text){
   const button = document.createElement('button');
   button.setAttribute('id', id);
   button.textContent=text;
   
   return button
}

//create the nav bar which will allow for navigation
function navbar(id){
    const navbar = document.createElement('nav');
    navbar.setAttribute('id', id);
    return navbar

}

function Title(id, text){
    const Title = document.createElement('p');
    Title.setAttribute('id', id);
    Title.textContent=text;
    return Title
}



//create the about in the middle body
// add location to this nav


function loadPage(){
const container = document.getElementById('content');
const header = Header('header','Amazing-Food');
const HomeBtn = button('Home-btn','home');
const menuBtn = button('Menu-btn','Menu');
const contactBtn = button('contact-btn','Contact');
const div = document.createElement('div');
const div2 = document.createElement('div');
div2.setAttribute("class", "img-text")
div.setAttribute("class", 'text-title')
const Text = Title('p','Come on down and try our Amazing Stake')
const img = document.createElement('img');
img.src = "/img/Grilled.jpg";
const nav = navbar('nav');


div.appendChild(Text)
div2.appendChild(img)
container.appendChild(header);
container.appendChild(div);
nav.appendChild(HomeBtn)
nav.appendChild(menuBtn)
nav.appendChild(contactBtn);
container.appendChild(nav);
container.appendChild(div2)







}
   
   
   export default loadPage;