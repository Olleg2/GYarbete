let count = 0;
let delay = 100; 

function updateCount() {
    document.getElementById("qual1").innerHTML = count;
    count++;

    if (count > 5) {
        return; 
    }
    delay += 200;
    setTimeout(updateCount, delay);
}
setTimeout(updateCount, delay);



window.addEventListener("scroll", function() {
    const aboutMeSection = document.querySelector(".about_me");
    const scrollPosition = window.scrollY; // Get the current scroll position

    // Change the threshold value to control when the section appears
    if (scrollPosition > 300) { // Adjust this value as needed
        aboutMeSection.classList.add("visible"); // Add the class to make it visible
    } else {
        aboutMeSection.classList.remove("visible"); // Remove the class to hide it
    }
});