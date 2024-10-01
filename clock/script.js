let ampm=document.getElementById('ampm')
function displayTime(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }
    document.getElementById('hrs').innerHTML=hr
    document.getElementById('mins').innerHTML=min
    document.getElementById('secs').innerHTML=sec
}
setInterval(displayTime,500)
