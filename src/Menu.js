// put menu logic here 

// put 2 items, a stake and fires

// stake and salad, so render text, title, and 2 images then link it to the load page function




function Title(text) {
    const Title = document.createElement('h1')
    Title.textContent=text;
    return Title
    
    }
    
    function MenuInfo(info){
        const MenuInfo = document.createElement('p')
        MenuInfo.textContent=info;
        return MenuInfo 
    }
    
    
    
    function Menu(){
        const container = document.getElementById('content');
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
     const div4 = document.createElement('div');
    const  div5 = document.createElement('div');
    div3.setAttribute('class', 'stake-font')
    div5.setAttribute('class','shrmip-font')
    div5.setAttribute('class', 'shrimp')
      div3.setAttribute('class', 'menuInfo')
        const MenuItem1 = MenuInfo(`Our menu's steak and fries are truly unique and unlike any other. Our steak is sourced from only the finest cuts of meat, prepared to perfection and served with crispy, golden fries that are seasoned to perfection.
         The result is a meal that's bursting with flavor, texture, and satisfaction, and one that's sure to have you coming back for more.`)
         const MenuItem2 = MenuInfo('Our Stake and Fries is heaven sent for only $19.99')
         const MenuItem3 = MenuInfo('Our Shrimp bowl is out of this world for only $29.99')
       const img = document.createElement('img');
       const img2 = document.createElement('img')
       img.src = "/img/steak-fries.jpg";
       img2.src="/img/Shrimp.jpg"
    

       div2.setAttribute('id', "steak")
       div4.setAttribute('id',"boil")
        div.appendChild(MenuItem1)
        div2.appendChild(img)
        div3.appendChild(MenuItem2)
        div4.appendChild(img2)
        div5.appendChild(MenuItem3)
        const title = Title("Saviour your tastebuds with a Menu like none other")
        container.appendChild(title)
        container.appendChild(div)
        container.appendChild(div2)
        container.appendChild(div3)
        container.appendChild(div4)
        container.appendChild(div5)

      
        
    
    }
    
    
    
    export default Menu