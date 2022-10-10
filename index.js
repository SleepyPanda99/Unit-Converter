/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-box")
let lengthEl = document.getElementById("plength")
let volumeEl = document.getElementById("pvolume")
let massEl = document.getElementById("pmass")



const meterstofeet = 3.281 
const literstogallons = 0.264
const kilostopounds = 2.204 
    


let convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", function () {
    let inputValue = inputEl.value ;
        let divideLength = inputValue / meterstofeet ;
        let multiplyLength = inputValue * meterstofeet ;
        let lengthResult1 = multiplyLength.toFixed(3) ;
        let lengthResult2 = divideLength.toFixed(3) ;
        
    lengthEl.textContent = `${inputValue} meters = ${lengthResult1} feet | ${inputValue} feet = ${lengthResult2} meters` ; 
    
            let divideVolume = inputValue / literstogallons ;
            let multiplyVolume = inputValue * literstogallons ; 
            let volumeResult1 = multiplyVolume.toFixed(3) ;
            let volumeResult2 = divideVolume.toFixed(3) ;
            
            volumeEl.textContent = `${inputValue} liters = ${volumeResult1} gallons | ${inputValue} gallons = ${volumeResult2} liters` ;
            
        let divideMass = inputValue / kilostopounds ;
        let multiplyMass = inputValue * kilostopounds ; 
        let massResult1 = multiplyMass.toFixed(3) ;
        let massResult2 = divideMass.toFixed(3) ;
    massEl.textContent = `${inputValue} kilos = ${massResult1} pounds | ${inputValue} pounds = ${massResult2} kilos`
})