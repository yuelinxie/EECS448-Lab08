let imgNumber = 1;
function updateDisplay(){
    if(imgNumber === 1){
        document.getElementById("myImgId").src = "pic1.jpg";
    }
    else if(imgNumber === 2){
        document.getElementById("myImgId").src = "pic2.jpg";
    }
    else if(imgNumber === 3){
        document.getElementById("myImgId").src = "pic3.jpg";
    }
    else if(imgNumber === 4){
        document.getElementById("myImgId").src = "pic4.jpg";
    }
    else{
        document.getElementById("myImgId").src = "pic5.jpg";
    }
}

function previous(){
    if(imgNumber === 1){
        imgNumber = 5;
    }
    else{
        imgNumber = imgNumber - 1;
    }
    updateDisplay();
}

function next(){
    if(imgNumber === 5){
        imgNumber = 1;
    }
    else{
        imgNumber = imgNumber + 1;
    }
    updateDisplay();
}