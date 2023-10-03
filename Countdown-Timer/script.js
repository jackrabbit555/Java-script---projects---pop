const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl = document.getElementById('seconds');




const newYears = '20 march 2024'

function countdown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const  totalseconds =  (newYearsDate - currentDate) / 1000;
  const days = Math.floor (totalseconds / 3600 / 24) ;
  const hours = Math.floor (totalseconds / 3600) %24 ;
  const mins = Math.floor ((totalseconds / 60)% 60)%60;
  const seconds = Math.floor (totalseconds % 60);

  // console.log(days ,hours , mins, seconds)


  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
;

  
}


function formatTime (time){
  return time<10 ? `0${time}` :time;
}

//initial call
setInterval (countdown , 1000)

countdown();
