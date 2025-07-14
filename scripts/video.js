const loadCatagories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await res.json();
    displayCatagories(data.categories);
}
const loadCatagoriesVid=async(id)=>{
        const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
        const data = await res.json();
        console.log(data.category)
        displayVideos(data.category);
        // videos.classList.add('grid');
}

const searchV=()=>{
    document.getElementById('search').addEventListener('keyup',(e)=>{
          loadVideos(e.target.value)
    })
}
const videoS=async(id)=>{
      const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${id}`);
      const data = await res.json();
      console.log(data.video)
      return data.video;
}

const loadVideos = async (search="") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`);
    const data = await res.json();
    displayVideos(data.videos);

}




const displayVideos = (data) => {
    const videos = document.getElementById('videos');
    videos.innerHTML="";

    if(data.length==0){
        videos.classList.remove('grid');
        videos.innerHTML=`
          <div class="flex flex-col items-center justify-center mt-[20%]">
          <img src="./icon.png">
          <p class="font-bold mt-3">Oops!!Soryy, There is no content here<p>
          
          <div>

        `
        
    }
    else{
        videos.classList.add('grid');
    }
    data.forEach(async(element) => {
        // console.log(element)
        const vidD=await videoS(element.video_id);
        // console.log(vidD)
        const div = document.createElement('div');
        div.setAttribute('class','card');
        div.classList.add("card", "bg-base-100", "w-96", "shadow-sm","h-full");
        div.innerHTML = `
        <a onclick="my_modal_${element.video_id}.showModal()">
          <figure class="h-[170px] rounded">
        <img class="object-cover"
           src="${element.thumbnail}"
          alt="Shoes" />
         ${element.others.posted_date.length !=0 ? '<p class="p-1 font-bold absolute rounded text-[12px] right-4 top-35 text-white bg-slate-600">'+getTime(element.others.posted_date)+'   ago<p>' :""}
        
         </figure>
        
        <div class="">
          <div class="flex gap-2 mt-3 items-center">
              <div class=" ">
                  <img class="h-[28px] w-[28px] rounded-full" src="${element.authors[0].profile_picture}">
            
              </div>
              <div class="">
                <h2 class="card-title">${element.title}</h2>
            
               </div>

            </div>
          <div class="flex gap-2 items-center pl-9">
              <div class="">
                  <p class="text-gray-400">${element.authors[0].profile_name} </p>
            
              </div>
              <div class="">
              ${element.authors[0].verified==true? '<img class="h-[20px] w-[20px]" class="rounded-full" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">' : ""}
                
            
               </div>

            </div>

            <p class="text-gray-400 pl-9">${element.others.views} views</p>
          
          
          
        </div>

        </a>

    <dialog id="my_modal_${element.video_id}" class="modal">
    
      <div class="modal-box p-0">
            

            <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col ">
    <img
      src="${vidD.thumbnail}"
      class="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 class="text-5xl font-bold">${vidD.title}</h1>
      <p class="py-6">
        ${vidD.description}
      </p>
      <!----   -->

           <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
         </div>
        </div>
      <!----   -->
    </div>
  </div>
</div>
            
        
    </dialog>
        
        `
        videos.appendChild(div);
    })
    // console.log(data);

}

const displayCatagories = (data) => {
    const cata = document.getElementById('cata');
    data.forEach(element => {
        // console.log(element)
        const btn = document.createElement('button');
        btn.setAttribute('class', 'btn')
        btn.classList.add('cat-btn')
        btn.setAttribute('id', `btn-${element.category_id}`)
        
        btn.innerHTML = element.category;
        cata.appendChild(btn);
        document.getElementById(`btn-${element.category_id}`).onclick = function () {
            loadCatagoriesVid(element.category_id)
            active(`btn-${element.category_id}`)
            
        }
    });
}
searchV()
loadCatagories();
loadVideos();

// active()