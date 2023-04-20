
function Title(text) {
    const Title = document.createElement('h1')
    Title.textContent=text;
    return Title
    
    }
    
    function MainInfo(info){
        const MainInfo = document.createElement('p')
        MainInfo.textContent=info;
        return MainInfo 
    }
    
    
    
    function home(){
        const container = document.getElementById('content');
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        div2.setAttribute('id', 'img-text')
        const contactInfo1 = MainInfo(`
        The Amazing Steak House is a renowned restaurant that has been serving top-quality steaks for over 50 years. With a cozy atmosphere and impeccable service, this establishment has become a go-to spot for steak lovers from all over the world.
        
        Their menu features a wide range of steak cuts, all carefully selected and prepared to perfection. From tenderloin to ribeye, there's something for everyone. But it's not just about the meat – the sides and sauces are just as impressive. Whether you're in the mood for some garlic mashed potatoes or a classic béarnaise sauce, they've got you covered.
        
        The Amazing Steak House also boasts an extensive wine list, with options from all over the globe. Their knowledgeable staff can help you find the perfect pairing for your meal, whether you're a seasoned oenophile or a novice.
        
        Overall, if you're looking for an unforgettable steak experience, The Amazing Steak House is the place to be. With its delicious food, warm ambiance, and attentive service, it's no wonder that this restaurant has stood the test of time.`)
       const img = document.createElement('img');
       img.src = "/img/steak.jpg";
    
        div.appendChild(contactInfo1)
        div2.appendChild(img)
        const title = Title('About Us')
        container.appendChild(title)
        container.appendChild(div)
        container.appendChild(div2)
      
        
    
    }
    
    
    
    export default home