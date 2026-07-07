// Elements

const openBtn = document.getElementById("openBtn");

const welcome = document.getElementById("welcome");

const envelopeSection = document.getElementById("envelopeSection");

const invitation = document.getElementById("invitation");

const flap = document.querySelector(".flap");



// Open Invitation

openBtn.addEventListener("click", function(){

    welcome.style.display = "none";

    envelopeSection.style.display = "flex";


    setTimeout(function(){

        flap.style.transform = "rotateX(180deg)";

    },500);



    setTimeout(function(){

        envelopeSection.style.display = "none";

        invitation.style.display = "block";


    },2500);


});





// Countdown Timer

const ceremonyDate = new Date(
"July 15, 2026 19:00:00"
).getTime();



function updateCountdown(){


    const now = new Date().getTime();


    const difference = ceremonyDate - now;



    if(difference < 0){

        document.getElementById("countdown").innerHTML =
        "<h2>Today is the Celebration Day!</h2>";

        return;

    }




    const days = Math.floor(
        difference/(1000*60*60*24)
    );



    const hours = Math.floor(
        (difference%(1000*60*60*24))/
        (1000*60*60)
    );



    const minutes = Math.floor(
        (difference%(1000*60*60))/
        (1000*60)
    );



    const seconds = Math.floor(
        (difference%(1000*60))/
        1000
    );




    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}



setInterval(updateCountdown,1000);

updateCountdown();





// Automatic card appearance

window.onload = function(){

    const cards = document.querySelectorAll(".couple-card");


    cards.forEach((card,index)=>{

        card.style.animationDelay =
        `${index * 0.5}s`;

    });

};
