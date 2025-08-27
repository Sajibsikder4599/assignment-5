

// heart icon increment number 

const allLoveIcons = document.querySelectorAll(".love-icon");
 
for(const loveIcon of allLoveIcons){
loveIcon.addEventListener("click",function(){

let heartNumber = parseInt(document.getElementById("heart-number").innerText);
 heartNumber++;
document.getElementById("heart-number").innerText = heartNumber;

})

}


// function for call button 

const allCallBtn = document.querySelectorAll(".call-button");

let callHistory = [];

for(const callBtn of allCallBtn){
    callBtn.addEventListener("click",function(){
      const parentOfBtn = callBtn.parentNode;
      const parentOfParent = parentOfBtn.parentNode;
      const serviceName = parentOfParent.querySelector("h2").innerText; 
      const serviceNumber = parentOfParent.querySelector("h1").innerText;

       let coinNumber = parseInt(document.getElementById("coin-number").innerText);
        
        

        if(coinNumber < 20){
                alert("you do not have sufficient coins");
                return;
        }else{
             alert(`${serviceName} , ${serviceNumber}`);
             coinNumber = coinNumber-20;
        }
        
document.getElementById("coin-number").innerText = coinNumber;
   

       
      

    let history = {
        service : serviceName,
        number : serviceNumber
    }  

    callHistory.push(history)

      
    })
}

    

