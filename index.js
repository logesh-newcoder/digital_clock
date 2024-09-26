const hrs=document.getElementById("hrs");
const min=document.getElementById("min");
const sec=document.getElementById("sec");
const ampm=document.getElementById("ampm");
const da=document.getElementById("da");
const mon=document.getElementById("mon");
const year=document.getElementById("year");


setInterval(()=>{
    let date=new Date();
    console.log(date);

    da.innerHTML=date.getDate();
    mon.innerHTML=date.getMonth();
    year.innerHTML=date.getFullYear();

    hrs.innerHTML= (date.getHours()<10?"0":"") +date.getHours();
    min.innerHTML= (date.getMinutes()<10?"0":"") +date.getMinutes();
    sec.innerHTML= (date.getSeconds()<10?"0":"") +date.getSeconds();
    ampm.innerHTML= (date.getHours()<11?"pm":"am");
},1000)
