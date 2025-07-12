const loadCatagories =async()=>{
    const res =await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await res.json();
    displayCatagories(data.categories);
    
}

const displayCatagories=(data)=>{
    const cata= document.getElementById('cata');
    // const cataEl=document.createElement('div');
    // header.appendChild(cataEl);
    data.forEach(element => {
        console.log(element)
        const btn= document.createElement('button');
        btn.setAttribute('class','btn')
        btn.innerHTML=element.category;
        cata.appendChild(btn);

        // header.appendChild(cataEl);
        
    });
    
    console.log(data)
    
}
loadCatagories();