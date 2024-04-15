const endDate = "16 April 2024 01:15 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;


    if(diff<0) return;
    
    //conversion
    inputs[0].value = Math.floor(diff / 3600/24);
    inputs[1].value = Math.floor(diff / 3600)%24;
    inputs[2].value = Math.floor(diff / 60)%24;
    inputs[3].value = Math.floor(diff) % 60;

}    


clock()

setInterval(
    () => {
        clock()
    },1000
)