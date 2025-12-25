let form =document.getElementById("searchForm");
let inpValue =document.getElementById("searchBox");

let storeResults =document.getElementById("storeResults");

let showBtn =document.getElementById("btn");


const accessKey = "YMF-l5DKzJ6QuoV6Q8hHraIzaIIcB5if3e2arQtkvNA";

let keyword = "";
let page = 1;


async function searchImage()
{
    keyword = inpValue.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const res = await fetch(url);
    const data =await res.json();
    // console.log(data.results[0].urls.small);
    const results = data.results;
    if(page == 1)
    {
        storeResults.innerHTML = "";
    }
    results.map(result=>{
        const image = document.createElement("img");
        image.src=result.urls.small;
        storeResults.appendChild(image);
    });
    showBtn.style.display="block";
};

form.addEventListener("submit",e=>{
    e.preventDefault();
    searchImage();
});

showBtn.addEventListener("click",e=>{
    
    searchImage();
    page++;
    console.log(page);
});