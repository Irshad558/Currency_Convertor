const baseUrl =  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.8.31/v1/currencies";
const downselect = document.querySelectorAll("select");
const btn = document.querySelector("button");
const fromCode = document.getElementById("from"); 
const toCode = document.getElementById("to");
const msg = document.querySelector(".msg");

for(select of downselect){
    for(country in countryList){
        let option = document.createElement("option");
        option.innerText = country;
        option.value = country;
        if(select.id==="from" && country==="USD"){
            option.selected=true;
        }else if(select.id==="to" && country==="INR"){
            option.selected=true;
        };
        select.append(option); 
    
    };
    select.addEventListener("change",(evt)=>{
        updataFlag(evt.target)
    })
};

const updataFlag =(element)=>{
    let country =  element.value;
    let countryCode = countryList[country];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;    
    let img = element.parentElement.querySelector("img");
    img.src = newSrc
}

// btn.addEventListener("click",async(evt)=>{
//     evt.preventDefault();
//     let amount = document.querySelector("input");
//     let amtVal = amount.value;
//     if(amtVal==="" ||amtVal <1){
//         amtVal="1";
//         amount.value = "1";
//     };
    
//     url = `${baseUrl}/${fromCode.value.toLowerCase()}.json`;
//     let request =await fetch(url);
//     let response = await request.json();
//     let fromCountry = response[fromCode.value.toLowerCase()];
//     let countryAmount = fromCountry[toCode.value.toLowerCase()];
//     msg.innerText =`${amtVal} ${fromCode.value} = ${(amtVal*countryAmount).toFixed(4)} ${toCode.value}`
// });
async function btnLoad(){
    let amount = document.querySelector("input");
    let amtVal = amount.value;
    if(amtVal==="" ||amtVal <1){
        amtVal="1";
        amount.value = "1";
    };
    
    url = `${baseUrl}/${fromCode.value.toLowerCase()}.json`;
    let request =await fetch(url);
    let response = await request.json();
    let fromCountry = response[fromCode.value.toLowerCase()];
    let countryAmount = fromCountry[toCode.value.toLowerCase()];
    msg.innerText =`${amtVal} ${fromCode.value} = ${(amtVal*countryAmount).toFixed(4)} ${toCode.value}`
};