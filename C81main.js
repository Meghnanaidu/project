canvas = document.getElementById("My_Canvas");
ctx = canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokestyle = 1;
ctx.lineWidth = 1;
ctx.react(150, 143, 430, 200);

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 219, 40, 0, 2 * MathPI);
ctx.storke();
