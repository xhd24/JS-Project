function callback() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');


    const year1 = document.querySelector('#year1');
    const year2 = document.querySelector('#year2');
    const year3 = document.querySelector('#year3');
    const year4 = document.querySelector('#year4');
    let srcyear1 = `images/digital_clock/${year[0]}.png`;
    let srcyear2 = `images/digital_clock/${year[1]}.png`;
    let srcyear3 = `images/digital_clock/${year[2]}.png`;
    let srcyear4 = `images/digital_clock/${year[3]}.png`;
    year1.src = srcyear1;
    year2.src = srcyear2;
    year3.src = srcyear3;
    year4.src = srcyear4;

    const month1 = document.querySelector('#month1');
    const month2 = document.querySelector('#month2');
    let srcmonth1 = `images/digital_clock/${month[0]}.png`;
    let srcmonth2 = `images/digital_clock/${month[1]}.png`;
    month1.src = srcmonth1;
    month2.src = srcmonth2;

    const day1 = document.querySelector('#day1');
    const day2 = document.querySelector('#day2');
    let srcday1 = `images/digital_clock/${day[0]}.png`;
    let srcday2 = `images/digital_clock/${day[1]}.png`;
    day1.src = srcday1;
    day2.src = srcday2;

    const hour1 = document.querySelector('#hour1');
    const hour2 = document.querySelector('#hour2');
    let srchour1 = `images/digital_clock/${hour[0]}.png`;
    let srchour2 = `images/digital_clock/${hour[1]}.png`;
    hour1.src = srchour1;
    hour2.src = srchour2;

    const min1 = document.querySelector('#min1');
    const min2 = document.querySelector('#min2');
    let srcmin1 = `images/digital_clock/${min[0]}.png`;
    let srcmin2 = `images/digital_clock/${min[1]}.png`;
    min1.src = srcmin1;
    min2.src = srcmin2;

    const sec1 = document.querySelector('#sec1');
    const sec2 = document.querySelector('#sec2');
    let srcSec1 = `images/digital_clock/${sec[0]}.png`;
    let srcSec2 = `images/digital_clock/${sec[1]}.png`;
    sec1.src = srcSec1;
    sec2.src = srcSec2;

    let skySrc =''
    if(Number(hour)>19){
        skySrc = 'images/digital_clock/night.jpg'
    } else if (Number(hour)>18){
        skySrc = 'images/digital_clock/sunset.jpg'
    } else if (Number(hour)>8){
        skySrc='images/digital_clock/morning.jpg'
    } else {
        skySrc='images/digital_clock/dawn.jpg'
    }

    document.querySelector('#content').style.backgroundImage=`url(${skySrc})`;
}
setInterval(callback, 1000);