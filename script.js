//함수가 호출되면 설정된 id에 이미지를 출력되도록 설정한다
function over(){
    document.getElementById("fruit").src= "image/images.png";
}

function out(){
    document.getElementById("fruit").src= "image/images1.png";
}

//alert-> 예-> true="찬성", 아니오-> false="반대"
function askopt(msg){
    var dap="";
    if(confirm(msg)){ //true
        dap="찬성"
    }else{ //true
        dap="반대"
    }
    return dap;
}