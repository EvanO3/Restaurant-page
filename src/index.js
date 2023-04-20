import loadPage from './load.js'
import contact from './contact.js'
import './style.css'
import home from './home.js'
import Menu from './Menu.js'


loadPage();


// tab logic

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', ()=>{
    //clears current page
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = '';
    
    //sets element = to load and appends it to div
    const contactContent = contact();
  contentDiv.appendChild(contactContent);
});

// tab logic for home
const HomeBtn = document.getElementById('Home-btn');
HomeBtn.addEventListener('click', ()=>{
    //clears current page
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    
    //sets element = to load and appends it to div
    const homeContent = home();
  contentDiv.appendChild(homeContent);
});


const Menubtn= document.getElementById('Menu-btn');
Menubtn.addEventListener('click',()=>{
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

  const MenuContent = Menu();
  contentDiv.appendChild(MenuContent);
})

// find a way to let the tabs stay when page changed to allow for tabs switching