var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate /= 1.3;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate *= 1.3;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	console.log("The duration is " + video.duration);
	console.log("Current location is " + video.currentTime);
	video.currentTime += 10;
	video.loop = true; // loop if over video duration
	console.log("New location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if(document.querySelector("#mute").innerHTML == "Mute"){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Slider");
	let newVolume = document.querySelector("#slider").value / 100;
	video.volume = newVolume;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Vintage");
	video.classList.add("vintage");
	video.
});