// Set up the SVG container to fill the browser window with padding //
var padding = 50;
var svg = d3.select("svg"),
  width = window.innerWidth - 2 * padding,
  height = window.innerHeight - 2 * padding,
  radius = Math.min(width, height) / 2;

svg
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight)
  .style("background-color", "black");

// Update the group transform to center based on the new dimensions, considering padding //
var g = svg
  .append("g")
  .attr(
    "transform",
    "translate(" + (padding + width / 2) + "," + (padding + height / 2) + ")"
  );

// Define the arc generator for the ring segments
var arc = d3
  .arc()
  .innerRadius(radius * 0.2)
  .outerRadius(radius * 0.5);

// Create 8 clickable spaces between pairs of segments //
function calcPosition(radius, trigOp, segments, c) {
  return radius * 0.35 * trigOp(((Math.PI * 2) / segments) * c);
}

let x0 = calcPosition(radius, Math.cos, 8, 0.5);
let y0 = calcPosition(radius, Math.sin, 8, 0.5);
let x1 = calcPosition(radius, Math.cos, 8, 2.5);
let y1 = calcPosition(radius, Math.sin, 8, 2.5);
let x2 = calcPosition(radius, Math.cos, 8, 4.5);
let y2 = calcPosition(radius, Math.sin, 8, 4.5);
let x3 = calcPosition(radius, Math.cos, 8, 6.5);
let y3 = calcPosition(radius, Math.sin, 8, 6.5);
let x4 = calcPosition(radius, Math.cos, 8, 1.5);
let y4 = calcPosition(radius, Math.sin, 8, 1.5);
let x5 = calcPosition(radius, Math.cos, 8, 3.5);
let y5 = calcPosition(radius, Math.sin, 8, 3.5);
let x6 = calcPosition(radius, Math.cos, 8, 5.5);
let y6 = calcPosition(radius, Math.sin, 8, 5.5);
let x7 = calcPosition(radius, Math.cos, 8, 7.5);
let y7 = calcPosition(radius, Math.sin, 8, 7.5);

// Create a group to contain the clickable spaces //
var clickableSpaces = g.append("g");

clickableSpaces
  .append("a")
  .attr("xlink:href", "https://www.cameronsworld.net/")
  .append("image")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/Images/earth.png")
  .attr("x", x0 - 10)
  .attr("y", y0 - 10)
  .attr("width", 18)
  .attr("height", 18)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/HTML/form.html")
  .append("image")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/Images/jupiter.png")
  .attr("x", x1 - 10)
  .attr("y", y1 - 10)
  .attr("width", 24)
  .attr("height", 24)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/HTML/colormeotto.html")
  .append("image")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/Images/uranus.png")
  .attr("x", x2 - 10)
  .attr("y", y2 - 10)
  .attr("width", 21.5)
  .attr("height", 21.5)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("xlink:href", "https://www.15questions.net/interview/fifteen-questions-otto-von-schirach/page-1/")
  .append("image")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/Images/mars.png")
  .attr("x", x3 - 10)
  .attr("y", y3 - 10)
  .attr("width", 18)
  .attr("height", 18)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("xlink:href", "https://ottovonschirach.bandcamp.com/music")
  .append("image")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/Images/saturn.png")
  .attr("x", x4 - 10)
  .attr("y", y4 - 10)
  .attr("width", 23.5)
  .attr("height", 23.5)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("xlink:href", "https://bermudatrianglefamily.bigcartel.com")
  .append("image")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/Images/neptune.png")
  .attr("x", x5 - 10)
  .attr("y", y5 - 10)
  .attr("width", 21.5)
  .attr("height", 21.5)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("xlink:href", "https://www.instagram.com/ottovonschirach/?hl=en")
  .append("image")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/Images/venus.png")
  .attr("x", x6 - 10)
  .attr("y", y6 - 10)
  .attr("width", 15)
  .attr("height", 15)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("xlink:href", "https://www.youtube.com/channel/UCpAG00EDhkQ3w9VMTXiq3Pw")
  .append("image")
  .attr("xlink:href", "https://cgodom.github.io/colorMeOtto/Images/mercury.png")
  .attr("x", x7 - 10)
  .attr("y", y7 - 10)
  .attr("width", 12)
  .attr("height", 12)
  .style("cursor", "pointer");

// Function to rotate all clickable spaces together //
function rotateClickableSpaces() {
  clickableSpaces
    .transition()
    .duration(80000) // Adjust the duration as needed
    .ease(d3.easeLinear)
    .attrTween("transform", function () {
      return d3.interpolateString("rotate(0)", "rotate(360)");
    })
    .on("end", rotateClickableSpaces); // Loop the rotation //
}

// Call the function to rotate all clickable spaces together //
rotateClickableSpaces();

$(document).ready(function () {
  // Prevent the UFO from moving around //
  $(".ufo-image").css({ animation: "none", right: "20px", bottom: "20px" });
});
