var text = document.getElementById("changable_text");
var id = 0;
setInterval(change_text, 2000);
var i = 0;
var j = 0;
function change_text() {
    if (i == 0) {
        text.innerHTML = "a programer.";
        i++;
    }
    else if (i == 1) {
        text.innerHTML = "a student.";
        i++;
    }
    else if (i == 2) {
        text.innerHTML = "a proud indian.";
        i++;
    }
	 else if (i == 3) {
        text.innerHTML = "a Influencer.";
        i++;
    }
    else if (i == 4) {
        text.innerHTML = "a WEB DEvloper.";
        i = 0;
    }
}
var inputLable = document.getElementById('inputlable');
var nextTime = 0;
var progress = document.getElementById('progress');
var inputbar = document.getElementById('inputbar');
var nextIcon = document.getElementById('nextIcon');
var index = document.getElementById("index");
function next() {
    if (nextTime == 0) {
        inputLable.innerHTML = "Your name";
        progress.style.width = "33%";
        index.innerHTML="2/3";
        nextTime++;
    }
    else if (nextTime == 1) {
        inputLable.innerHTML = "Your email or phone number";
        progress.style.width = "66%";
        index.innerHTML="3/3";
        nextTime++;
    }
    else if (nextTime == 2) {
        progress.style.width = "100%";
        nextIcon.innerHTML="submit";
        nextTime++;
    }
    else if (nextTime == 3) {
        index.innerHTML="";
        inputbar.style.fontSize = "5vh";
        inputbar.style.textAlign = "center";
        inputbar.style.fontWeight = "500";
        inputbar.style.opacity = "0.9";
        inputbar.style.color = "skyblue";
        progress.style.visibility = "hidden";
        inputbar.style.textTransform="capitalize";
        inputLable.innerHTML = " ";
        inputbar.innerHTML = "Thank you! I'll contact you shortly.";
        nextTime = 0;
    }
}


var mypic= document.getElementById('my-pic');
var picindex = document.getElementById('pic-index');
var index=1;
function nextPic(){
	if(index==1){
		mypic.src="sudarshan.jpeg";
		picindex.innerHTML="2/4";
		index++;
	}
	else if(index==2){
		mypic.src="sudarshan4.jpeg";
		picindex.innerHTML="3/4";
		index++;
	}
	else if(index==3){
		mypic.src="sudarshan5.jpeg";
		picindex.innerHTML="4/4";
		index++;
	}
	else{
		mypic.src="sudarshan1.jpeg";
		picindex.innerHTML="1/4";
		index=1;
	}
}
function lastPic(){
    if(index==3){
		mypic.src="sudarshan.jpeg";
		picindex.innerHTML="2/4";
		index++;
	}
	else if(index==2){
		mypic.src="sudarshan4.jpeg";
		picindex.innerHTML="3/4";
		index++;
	}
	else if(index==1){
		mypic.src="sudarshan5.jpeg";
		picindex.innerHTML="4/4";
		index++;
	}
	else{
		mypic.src="sudarshan1.jpeg";
		picindex.innerHTML="1/4";
		index=1;
	}
}