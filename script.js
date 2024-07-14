const days_El = document.getElementById('days');
const hours_EL = document.getElementById('hours');
const minutes_El = document.getElementById('minutes');
const seconds_El = document.getElementById('seconds');

const new_years = '31 Dec 2024';

function countdown(){
    const new_years_date = new Date(new_years);
    const current_date = new Date();

    const total_seconds = (new_years_date - current_date) / 1000;

    const days = Math.floor(total_seconds / 3600 / 24);
    const hours = Math.floor(total_seconds / 3600) % 24;
    const minutes = Math.floor(total_seconds / 60) % 60;
    const seconds = Math.floor(total_seconds % 60);

    days_El.innerHTML = days;
    hours_EL.innerHTML = format_time(hours);
    minutes_El.innerHTML = format_time(minutes);
    seconds_El.innerHTML = format_time(seconds);
}

function format_time(time){
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
