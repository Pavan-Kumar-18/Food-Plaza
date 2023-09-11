console.log("connected ")
const input = document.getElementById("search-input")
const Search = document.getElementById("search")
const left = document.getElementById("Left-items")
const RIght = document.getElementById("right-data")
const Mark = document.getElementById("Recipe")
const form = document.getElementById("post")




Search.addEventListener("click", ()=>{
    getpizza()
})



async function getpizza(){
            
try{
    const SearchInput=input.value
   
    const pizza = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${SearchInput}=7aad8b38-4a1b-4ade-923c-dd88b1b94a86`)
    const recipe = await pizza.json()
    const recipes =recipe.data.recipes
   

   recipes.map(function(i){
    const mypublisher = i.publisher
    const Tittle = i.title
    const myimage =i.image_url
    const id = i.id
   

    RIght.innerHTML=""

   
    return left.insertAdjacentHTML("afterbegin", 
     `<a href="#${id}"> <div class="leftitems">
     <img id="Myimage" src="${myimage}"/>
    <h2 id="Publish">${mypublisher} </h2>
    <h3 id="Tittle">${Tittle}</h3>
    
    

           </div></a>
`)
  

   })

}
catch(error)
{
    alert(error)
}
}



async function loaddetails(){
   const hashId = window.location.hash.slice(1)
    const details = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${hashId}`)
    const detail = await details.json()

    const dataa = {
        Publisher : detail.data.recipe.publisher,
        imagur : detail.data.recipe.image_url,
        Title : detail.data.recipe.title,
        Cooking : detail.data.recipe.cooking_time,
        Serving : detail.data.recipe.servings,
        ingredient : detail.data.recipe.ingredients,   
    }

  
    

const rightdata =`<div>
<img id="image-1" src="${dataa.imagur}"/>
<button id="book" <i class="fa-solid fa-bookmark"></button>
<h2 id="publish">Publisher-${dataa.Publisher} </h2>
<h2 id="title">Tittle-${dataa.Title} </h2>
<h2 id="cook">Cooking Time-${dataa.Cooking} (M)</h2>
<h2 id="serve">Serving: ${dataa.Serving}  </h2>
<div>
${dataa.ingredient.map(function(i){
    return `<div>
        <span class="secrt">${i. description}</span>-
        <span>${i.quantity}</span>
        <span> ${i.unit}</span>
        </div>`

}).join("")}
</div>



</div>`

RIght.insertAdjacentHTML("afterbegin",rightdata)
  





}

window.addEventListener("hashchange",loaddetails)

// Mark.addEventListener("click",function(){
//     console.log("clicked")
// })

// const rightdata = function(e){
//     this.rightdata = document.getElementById("right-data")
// this.rightdata.addEventListener("click",function(e){
//     console.log(e)
// })

// }

Mark.addEventListener("click",()=>{
    const recipedetail = ` <form method="GEt" class="form">
    <Label>Tittle</Label>: 
             <input type="text"><br><br>
            <Label>Image Url</Label>:  <input type="text"><br><br>
            <Label>Cooking Time</Label>:  <input type="text"><br><br>
            <Label>Servings</Label>:  <input type="text"><br><br>
            <Label>Ingeridents</Label>:  <input type="text"><br><br>
            <Label>Publisher</Label>:  <input type="text"><br><br>
            <Label>Source Url</Label>:  <input type="text"><br><br>
            <input type="Submit" value="add" id="added">
            
        </form>
    `
    RIght.insertAdjacentHTML("afterbegin",recipedetail)

    RIght.addEventListener("click",(event)=>{
        event.preventDefault()
        console.log("conn")
    
    })
})






