const timer = document.getElementById("sw");
let tbar = 0;
let sbar = 0;
let mux = 0;
const c1 = "green";
const c2 = "yellow";
const c3 = "red";
var xh = 0;
var xm = 0;
var xs = 0;
let xsec = 0;
let xmin = 0;
let xhrs = 0;
var cyc;
function handleSubmit()
{
    xh = document.getElementById("tmh").value;
    localStorage.setItem('xhours',xh);
    xm = document.getElementById("tmm").value;
    localStorage.setItem('xminutes',xm);
    xs = document.getElementById("tms").value;
    localStorage.setItem('xseconds',xs);
}

function init()
{
    xhrs = localStorage.getItem('xhours');
    xmin = localStorage.getItem('xminutes');
    xsec = localStorage.getItem('xseconds');
    tbar = parseInt(xhrs*60*60)+parseInt(xmin*60)+parseInt(xsec);
    mux = 100/tbar;
}
function reinit()
{
    if((xsec == 0 || xsec < 1) && xmin > 0)
    {
        xmin--;
        xsec = 60;
    }
    if((xsec == 0 || xsec < 1) && xmin == 0 && xhrs > 0)
    {
        xhrs --;
        xmin = 59;
        xsec = 60;
    }
}
init();
TimeDisp(xhrs,xmin,xsec);
reinit();
function startTimer()
{
    if(xhrs>0 || xmin>0 || xsec>0)
    {
        timerCyc();
    }

}

function timerCyc()
{
    cyc = setInterval(() =>
    {
        xsec--;
        TimeDisp(xhrs,xmin,xsec);
        if((xsec == 0 || xsec < 1) && xmin == 0 && xhrs == 0)
        {
            endTimeDisp();
        }    
        else if((xsec == 0 || xsec < 1) && xmin > 0)
        {
            xmin--;
            xsec = 60;
        }
        else if((xsec == 0 || xsec < 1) && xmin == 0 && xhrs > 0)
        {
            xhrs --;
            xmin = 59;
            xsec = 60;
        }
        sbar++;
        var elem = document.getElementById("clkBar");
        var id = setInterval(frame,100);
        function frame()
        {
            var per;
            per = parseFloat(sbar/tbar)*100;
            console.log(per);
            if (sbar > tbar )
            {clearInterval(id);}
            else
            {
                if(per<=50)
                {elem.style.backgroundColor = c1;}
                else if(per > 50 && per < 75)
                {elem.style.backgroundColor = c2;}
                else
                {elem.style.backgroundColor = c3;}
                elem.style.width = sbar*mux + "%";
            }
        }
    },1000);
}

function endTimeDisp()
{
    clearInterval(cyc);
    timer.innerHTML = "Time Out!";
}

function stopTimer()
{
    clearInterval(cyc);
}

function TimeDisp(hrs,min,sec)
{
    if(sec < 10 || sec == 0)
    {sec = '0' + sec;}
    if(min < 10 || min == 0)
    {min = '0' + min;}
    if(hrs < 10 || hrs == 0)
    {hrs = '0' + hrs;}
    timer.innerHTML = hrs + ":" + min + ":" + sec;
}

function resetTimer()
{
    clearInterval(cyc);
    sbar = 0;
    init();    
    TimeDisp(xhrs,xmin,xsec);
    reinit();
}