var text=document.getElementById("spanHead");

function addText(element,speed,text){
    var textA=text;
    var array=[];
    for(var i=0;i<textA.length;i++){
        array.push(textA[i]);
    }
    var count=0;
    var timer=setInterval(addingText,speed);
    function addingText(){
        if(count==array.length){
            clearInterval(timer);
        }else{
        element.innerHTML=element.innerHTML+ array[count];
        count++;
        }
    }
    console.log(array[0]);
}

addText(text,50,"Hello,my name is Cotruta Tiberiu,I am a Front End Developer living in Romania,Iasi");