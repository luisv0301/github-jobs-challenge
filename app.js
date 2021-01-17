/*const inputJob = document.getElementById("inputJob");
const inputLocation = document.getElementById("inputLocation");
const button = document.getElementById("buttonV");
let canv = document.getElementById("canv");
let nullValue = document.getElementById("nullValue");
let data = [];


function paintData(){
    data.forEach(item => {
        
    let paint = `
            
       <div class="item_result">
            <img src="${item.company_logo}" alt="Company logo" class="logo">
            <div>
               <h3>${item.title}</h3>
               <p class="result_info_company">${item.company}</p>
               <p class="result_info_location">${item.location}</p>
               <div class="result_info_link">${item.how_to_apply}</div>
            </div>
        </div>
            
        
     `; 
    
     console.log(item);
    let result = document.createElement('div');
    result.className = 'result';
    result.innerHTML = paint;
    canv.appendChild(result);
    
});
}

async function getData(){
    
    try{
    
    let inputJobValue = inputJob.value.toLowerCase();
    let inputLocationValue = inputLocation.value.toLowerCase();
        
        if(inputJobValue === "" && inputLocationValue === ""){
            nullValue.innerHTML = "Intenta rellenar los campos de busqueda";
        }else{
        
        nullValue.innerHTML = "";
        let response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${inputJobValue}&location=${inputLocationValue}`);
        let getDatas = await response.json();
        data = getDatas;
    
        paintData();
        }
            
   } catch(err){
       console.log(err);
     }
    
}

button.addEventListener("click", getData);*/


const inputJob = document.getElementById("inputJob");
const inputLocation = document.getElementById("inputLocation");
const button = document.getElementById("buttonV");
let canv = document.getElementById("canv");
let nullValue = document.getElementById("nullValue");
let data = [];

const paintData = () => {
    data.forEach(item => {
        
    let paint = `
            
       <div class="item_result">
            <img src="${item.company_logo}" alt="Company logo" class="logo">
            <div>
               <h3>${item.title}</h3>
               <p class="result_info_company">${item.company}</p>
               <p class="result_info_location">${item.location}</p>
               <div class="result_info_link">${item.how_to_apply}</div>
            </div>
        </div>
            
        
     `; 
    
     console.log(item);
    let result = document.createElement('div');
    result.className = 'result';
    result.innerHTML = paint;
    canv.appendChild(result);
    
});
}

const getData = async () => {
    
    try{
    
    let inputJobValue = inputJob.value.toLowerCase();
    let inputLocationValue = inputLocation.value.toLowerCase();
        
        if(inputJobValue === "" && inputLocationValue === ""){
            nullValue.innerHTML = "Intenta rellenar los campos de busqueda";
        }else{
        
        nullValue.innerHTML = "";
        let response = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${inputJobValue}&location=${inputLocationValue}`);
        let getDatas = await response.json();
        data = getDatas;
    
        paintData();
        }
            
   } catch(err){
       console.log(err);
     }
    
}

button.addEventListener("click", getData);