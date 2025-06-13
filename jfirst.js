let gameseq=[];
let userseq=[];

let h2=document.querySelector('h2');
let h3=document.querySelector('h3');
let btns=["red","yellow","purple","green"];

let started=false;
let level=0,maxscore=0;

document.addEventListener("keypress",function(){
    if(!started){
        console.log("game started");
        started=true;
        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function userflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let ranidx=Math.floor(Math.random()*3);
    let rancolor=btns[ranidx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    btnflash(ranbtn);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
function check(i){
    if(userseq[i]===gameseq[i]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerText="over press any key to restart your score is";
        maxscore=Math.max(maxscore,level);
        h3.innerText=`max:score ${maxscore}`;
        reset();
    }
}
function btnpress(){
    let btn=this;
    userflash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    check(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(let Btns of allbtns){
    Btns.addEventListener("click",btnpress);
}