let count1 = 0;
let count2 = 0; 
let count3 = 0;
let delay1 = 100;
let delay2 = 100;
let delay3 = 100;


function updateCount1() {
    document.getElementById("qual1").innerHTML = count1;
    count1++;

    if(count1 > 1){
        return;
    }
    delay1 += 1000;
    setTimeout(updateCount1, delay1);
}
setTimeout(updateCount1, delay1);


function updateCount2() {
    document.getElementById("qual2").innerHTML = count2;
    count2++;

    if (count2 > 6  ) { //Amount of fluent programing languages
        return; 
    }
    delay2 += 200;
    setTimeout(updateCount2, delay2);
}

function updateCount3() {
    document.getElementById("qual3").innerHTML = count3;
    count3++;

    if (count3> 3) { //Amount years of experience
        return; 
    }
    delay3 += 700;
    setTimeout(updateCount3, delay3);
}

setTimeout(updateCount1, delay1);
setTimeout(updateCount2, delay2);
setTimeout(updateCount3, delay3);



window.addEventListener("scroll", function() {
    const aboutMeSection = document.querySelector(".about_me");
    const scrollPosition = window.scrollY; 

    
    if (scrollPosition > 300) { 
        aboutMeSection.classList.add("visible"); 
    } else {
        aboutMeSection.classList.remove("visible"); 
    }
});
console.log("aaaaaa");
window.addEventListener("scroll", function() {
    const whyMeSection = document.querySelector(".why_me");// Fixa denna skiten
    const scrollPosition = window.scrollY;

    if (scrollPosition > 300) {
        whyMeSection.classList.add("visible");
    } else {
        whyMeSection.classList.remove("visible");
    }
});

app.listen(port, function(){
    console.log(`servern körs på http://localhost:${port}`);
});