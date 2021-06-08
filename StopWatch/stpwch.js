const timer = document.getElementById("sw");
let hrs = 0;
let min = 0;
let sec = 0;
let stptime = true;
let w = 0;
function startTimer() 
{
    if(stptime == true)
    {
        stptime = false;
        timerCyc();
    }
}

function stopTimer()
{
    if(stptime == false)
    {
        stptime = true;
    }
}

function timerCyc()
{
    if(stptime == false)
    {
        sec = parseInt(sec);
        min = parseInt(min);
        hrs = parseInt(hrs);
        var elem = document.getElementById("clkBar");
        sec++;
        var id = setInterval(frame,10);
            function frame()
            {
                if (sec >=60 )
                {clearInterval(id);}
                else
                {
                    elem.style.width = sec*1.666 + "%";
                }
            }
            
        if(sec==60)
        {
            min++;
            sec = 0;
        }

        if(min==60)
        {
            hrs++;
            min=0;
        }

        if(sec < 10 || sec == 0)
        {sec = '0' + sec;}
        if(min < 10 || min == 0)
        {min = '0' + min;}
        if(hrs < 10 || hrs == 0)
        {hrs = '0' + hrs;}
        timer.innerHTML = hrs + ':' + min + ':' + sec ;
        setTimeout('timerCyc()',1000);
    }
}

function resetTimer()
{
    timer.innerHTML = '00:00:00';
    sec=0;
    min=0;
    hrs=0;
    stopTimer();
}