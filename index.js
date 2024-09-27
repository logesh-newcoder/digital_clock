const hrs=document.getElementById("hrs");
const min=document.getElementById("min");
const sec=document.getElementById("sec");
const ampm=document.getElementById("ampm");
const da=document.getElementById("da");
const mon=document.getElementById("mon");
const year=document.getElementById("year");


setInterval(()=>{
    let date=new Date();
    da.innerHTML=(date.getDate()<10?"0":"")+date.getDate()+" / ";
    mon.innerHTML=(date.getMonth()+1<10?"0":"")+(date.getMonth()+1)+" / ";
    year.innerHTML=date.getFullYear();

    let hours = date.getHours();
    let amPmText = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; 
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;    
    
    min.innerHTML= (date.getMinutes()<10?"0":"") +date.getMinutes();
    sec.innerHTML= (date.getSeconds()<10?"0":"") +date.getSeconds();
    ampm.innerHTML= (date.getHours()<11?"am":"pm");
},1000)

