function Clock()
{
    var now=new Date()
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    
    hours=hours<10 ? "0" +hours:hours
    minutes=minutes<10 ? "0" +minutes:minutes
    seconds=seconds<10 ? "0" +seconds:seconds
    var Time =hours+":"+mintues+":"+seconds
    // console.log(Time);
    

    document.getElementById("clock").innerHTML=Time
    document.getElementById("clock1").innerHTML=Time
    


}
setInterval(Clock,1000)
Clock()

