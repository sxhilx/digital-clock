setInterval(showTime, 1000);

        function showTime(){
        
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            amOrPm = "AM";
        
            if(hour >= 12){
                amOrPm = "PM";
            }
        
            let currentTime = 
                (hour < 10 ? "0" + hour : hour) + " : " + 
                (min < 10 ? "0" + min : min) + " : " + 
                (sec < 10 ? "0" + sec : sec) + amOrPm;
                
            document.getElementById("clock").innerHTML = currentTime;
            
        
        }
        showTime();