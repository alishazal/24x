var prompts = ["Something I did well today...", "Today I had fun when...", "I felt proud when...", "Today I accomplished...", "I had a positive experience with...",
    "A positive thing I witnessed...", "Today was interesting because...", "Something I did forr someone...", "I was proud of someone..."];


$(document).ready(function () {
    var a = Math.round(Math.random(9));
    var prompt = prompts[a];
    console.log(prompt);

    $("#carousel-symptoms").carousel({
        interval: 2000,
        pause: false
    });

    $("#listenerChat").click(function(){
        $("#prompt-display").empty();
        $("#prompt-display").append(prompt);
        $("#prompt-display").display();
    });
});