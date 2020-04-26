const btn = document.getElementById("btn");
const lblStart =  document.getElementById("start");
const lblStop = document.getElementById("stop");
const lblMinute = document.getElementById("minute");
const lblPrice = document.getElementById("price");
const dispalyTime = document.getElementById("displayTime");

var start = Date.now();
btn.addEventListener("click",()=>{
    //get text form button 
    var textButton = btn.textContent.trim(); 
    if(textButton == "START"){
        var startTime = new Date(start);
        //get hours and minute
        var getStartTime = startTime.toLocaleTimeString().split(':');
        lblStart.innerHTML = ` ${getStartTime[0]} : ${getStartTime[1]} `;
        //change text button 
        btn.innerHTML =` <span><i class="far fa-stop-circle"></i></span> STOP`;
        
    }else if(textButton== "STOP"){
        
        var end = new Date().getTime();
        var stopTime = new Date(end);     
        var getStopTime = stopTime.toLocaleTimeString().split(':');
        lblStop.innerHTML = ` ${getStopTime[0]} : ${getStopTime[1]} `;  

        var minute = end - start ;             
        var result = new Date(minute);
                          
        var x = result / (1000 * 60);
        var price = 0;
        //ceil round number up 0.2 = 1
        x = Math.ceil(x);
        var calMoney = (x,price)=>{      
            if(x < 15) return price = 500;
            else if(x < 30 ) return price = 1000;
            else if ( x < 60 ) return price = 1500;
            else return price = ( Math.ceil(x / 15) * 500); 
        }
        lblPrice.innerHTML = calMoney(x,price);
        lblMinute.innerHTML = x;
        btn.innerHTML = `<span><i class="far fa-trash-alt"></i></span> CLEAR`;
        
    }else {    
        //get new current time 
        start = new Date().getTime(); 
        lblStart.innerHTML ="00:00";
        lblStop.innerHTML = "00:00";
        lblMinute.innerHTML = "0";
        lblPrice.innerHTML = "0";
        btn.innerHTML = ` <span><i class="fas fa-play-circle"></i></span> START`;    
        
    }   
})

setInterval( () => { 
    var currentDateTime = new Date().toString();  
    var currentDate = currentDateTime.slice(0,16);
    //get time in 12h
    var currentTime = new Date().toLocaleTimeString(); 
    //dispalyTime.innerHTML = currentDate.concat(" - "+currentTime);
    dispalyTime.innerHTML = `${ currentDate } - ${currentTime}`;
    
},1000);