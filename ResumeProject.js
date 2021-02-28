var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var skillsContainer = document.getElementById("skills");
var skillProgress = document.querySelectorAll(".skill-progress>div");

for(var i=0 ; i<navMenuAnchorTags.length ; i++){
    navMenuAnchorTags[i].addEventListener("click", function(event){
        // Preventing default behaviour of click
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 30);
        }, 10);


    });
}
var animationDone = false;


// handling scroll event
window.addEventListener('scroll', function(){
    var skillsPosition = skillsContainer.getBoundingClientRect();
    if(!animationDone && skillsPosition.top< window.innerHeight){
        animationDone = true;
        // skillProgress.classList.toggle("widthIncrease");
    }

});