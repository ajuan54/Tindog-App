// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogsData from "./data.js"
let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
document.getElementById("like").addEventListener('click', yes)
document.getElementById("nope").addEventListener('click', no)


render()
function render(){
    document.getElementById('info').innerHTML = currentDog.getDogHtml()
}

function end(){
    const endMessage = `There are no more dogs in your area.
    Refresh the site again to start over.`
    document.getElementById('info').innerHTML =
    `<div class="done">  
        <h3>${endMessage}</h3>
    </div>` 
    document.getElementById('button-container').style.display ='none'
}


function getNewDog() {
    currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
    if (currentDogIndex === 3){
        end()
    }
}


function yes() {
    document.getElementById("badge").innerHTML = new Dog().getLikeBadgeHtml()
    setTimeout(() => {
        document.getElementById("badge").innerHTML = ""
        getNewDog()
    }, 1200)
    currentDog.setMatchStatus(true)
    
}
function no() {
    document.getElementById("badge").innerHTML = new Dog().getNopeBadgeHtml()
    setTimeout(() => {
        document.getElementById("badge").innerHTML = ""
        getNewDog()
    }, 1200)
    currentDog.setMatchStatus(false)
    
}