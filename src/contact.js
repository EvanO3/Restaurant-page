

function Title(text) {
const Title = document.createElement('h1')
Title.textContent=text;
return Title

}

function contactInfo(name, number, email){
    const contactInfo = document.createElement('p')
    contactInfo.textContent =(name+email+number)
    return contactInfo
}



function contact(){
    const container = document.getElementById('content');
    const div = document.createElement('div');
  
    const div2 = document.createElement('div');
   
  
    const contactInfo1 = contactInfo('Evan ', 'Evan@hasdat.com', ' 999-999-999')
    const contactInfo2 = contactInfo('jay ', ' jay@hasdat.com', ' 888-888-889')

    div.appendChild(contactInfo1)
    div2.appendChild(contactInfo2)
    const title = Title('Contact Us')
    container.appendChild(title)
    container.appendChild(div)
    container.appendChild(div2)
    

}



export default contact