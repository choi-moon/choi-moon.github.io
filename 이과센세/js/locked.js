var unlockedImage = document.getElementById("unlocked-image");
var lockedImage = document.getElementById("locked-image");

unlockedImage.addEventListener("mouseover", function() {
	lockedImage.style.opacity = "1";
});

unlockedImage.addEventListener("mouseout", function() {
	lockedImage.style.opacity = "0";
});