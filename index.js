//http://www.tvmaze.com/search?q=love
let baseApi="http://api.tvmaze.com/";
let category=["shows","movies","games"]
let apiResults;
// category.forEach(item=>{categorySelect.innerHtml+=``})
function getShowsApi(){
    return fetch(`${baseApi}${category[0]}`)
    .then(res=>res.json())
    .catch(rej=>console.log(rej))
}

async function getShows(myInput){
    try{
       resultDiv.innerHTML='<img src="giphy.gif" alt="loading">'
         await getShowsApi(myInput).then(res=>{apiResults=res})
    }
    catch(error){
        console.log(error)
    }
    finally{
        resultDiv.innerHTML=""  
    }

}
function searchClick(){
    getShows(input.value).then(()=>{
        for (const interator of apiResults){
            picturePlace.innerHTML+=`<img src="${interator.image.medium}" alt="show of movie image">`
        }
    }
    )}
    