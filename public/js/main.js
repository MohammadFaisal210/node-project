console.log("hello");
const toggleBar = document.querySelector("#mobile-menu");
const navRight = document.querySelector(".right")
toggleBar.addEventListener("click",function(){
    navRight.classList.toggle("active")
})

// weather
const submitBtn = document.getElementById("submitBtn");
const output=document.getElementById("output");
const input=document.getElementById("input");
const weather=document.getElementById("weather");
const temp=document.getElementById("temp")

const getInfo=async()=>{
    let inpVal = input.value;
    if(inpVal=== ""){
        output.innerText = `Please write the city name`
    }   else{
        try {
            
            let url = `http://api.weatherapi.com/v1/current.json?key=%2073388211d47d4628843184800211906&q=${inpVal}r&aqi=yes`;
            const response = await fetch(url);
            // console.log(response);
            const data = await response.json();
            const objData = [data];
            // console.log(objData);
            
            // output.innerText = `${objData[0].location.name},${objData[0].location.country}`
            temp.innerText = objData[0].current.temp_c
            output.innerText = objData[0].current.condition.icon;
        } catch  {
            output.innerText = `please enter city name properly`
        }

    } 
}
submitBtn.addEventListener("click",getInfo )