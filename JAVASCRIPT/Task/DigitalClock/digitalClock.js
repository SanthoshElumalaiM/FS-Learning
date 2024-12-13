function Clock()
{
    var now=new Date()
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    
    hours=hours<10 ? "0" +hours:hours
    minutes=minutes<10 ? "0" +minutes:minutes
    seconds=seconds<10 ? "0" +seconds:seconds
    var Time =hours+":"+minutes+":"+seconds
    // console.log(Time);
    

    document.getElementById("clock").innerHTML=Time
    var clocks=document.getElementsByClassName("clock1")
    for (let index = 0; index < clocks.length; index++) {
        clocks[index].innerHTML = Time;
        
    }


}
setInterval(Clock,1000)
Clock()

