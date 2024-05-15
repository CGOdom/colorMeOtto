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

// Define the rotation animation for the triangle
function rotateTriangle() {
  g.select(".triangle")
    .transition()
    .duration(8000 * Math.random() + 5000)
    .ease(d3.easeCubic)
    .attrTween("transform", function () {
      return d3.interpolateString("rotate(0)", "rotate(360)");
    })
    .on("end", rotateTriangle);
}

function rotateTriangle2() {
  g.select(".triangle2")
    .transition()
    .duration(8000 * Math.random() + 5000)
    .ease(d3.easeCubic)
    .attrTween("transform", function () {
      return d3.interpolateString("rotate(0)", "rotate(-360)");
    })
    .on("end", rotateTriangle2);
}

// Draw the encompassing triangle and start the rotation //
g.append("path")
  .attr("class", "triangle")
  .attr(
    "d",
    "M0," +
      -radius +
      " L" +
      -radius * Math.sin(Math.PI / 3) +
      "," +
      radius / 2 +
      " L" +
      radius * Math.sin(Math.PI / 3) +
      "," +
      radius / 2 +
      "Z"
  )
  .attr("fill", "none")
  .attr("stroke", "#f0f0f0")
  .style("stroke-width", "7px")
  .call(rotateTriangle); // Start the rotation //

// Draw the encompassing triangle and start the rotation //
g.append("path")
  .attr("class", "triangle2")
  .attr(
    "d",
    "M0," +
      -radius +
      " L" +
      -radius * Math.sin(Math.PI / 3) +
      "," +
      radius / 2 +
      " L" +
      radius * Math.sin(Math.PI / 3) +
      "," +
      radius / 2 +
      "Z"
  )
  .attr("fill", "none")
  .attr("stroke", "#f0f0f0")
  .style("stroke-width", "7px")
  .call(rotateTriangle2); // Start the rotation //

// Function to randomly return either 1 or -1 //
function randomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

// Define the rotation animation for the segments //
// Create the ring segments //
var segments = 8; // number of segments in the ring //
function rotateSegments() {
  g.selectAll(".segment")
    .transition()
    .duration(8000 * Math.random() + 5000)
    .ease(d3.easeCubic)
    .attrTween("transform", function () {
      return d3.interpolateString(
        "rotate(0)",
        "rotate(" + 360 * randomSign() + ")"
      );
    })
    .on("end", rotateSegments); // Loop the animation //
}

// Create the ring segments and start the counter rotation //
for (var i = 0; i < segments; i++) {
  g.append("path")
    .attr("class", "segment")
    .attr(
      "d",
      arc
        .startAngle(((Math.PI * 2) / segments) * i)
        .endAngle(((Math.PI * 2) / segments) * (i + 1))
    )
    .attr("fill", i % 2 == 0 ? "none" : "none")
    .attr("stroke", "white")
    .style("stroke-width", "7px")
    .attr("transform", "rotate(" + (i * 360) / segments + ")")
    .call(rotateSegments); // Start the counter rotation //
}

// Create 8 clickable spaces between pairs of segments //
function calcPosition(radius, trigOp, segments, c) {
  return radius * 0.35 * trigOp(((Math.PI * 2) / segments) * c);
}

let x0 = calcPosition(radius, Math.cos, segments, 0.5);
let y0 = calcPosition(radius, Math.sin, segments, 0.5);
let x1 = calcPosition(radius, Math.cos, segments, 2.5);
let y1 = calcPosition(radius, Math.sin, segments, 2.5);
let x2 = calcPosition(radius, Math.cos, segments, 4.5);
let y2 = calcPosition(radius, Math.sin, segments, 4.5);
let x8 = calcPosition(radius, Math.cos, segments, 1.5);
let y8 = calcPosition(radius, Math.sin, segments, 1.5);
let x9 = calcPosition(radius, Math.cos, segments, 3.5);
let y9 = calcPosition(radius, Math.sin, segments, 3.5);
let x10 = calcPosition(radius, Math.cos, segments, 5.5);
let y10 = calcPosition(radius, Math.sin, segments, 5.5);
let x11 = calcPosition(radius, Math.cos, segments, 7.5);
let y11 = calcPosition(radius, Math.sin, segments, 7.5);
let x12 = calcPosition(radius, Math.cos, segments, 6.5);
let y12 = calcPosition(radius, Math.sin, segments, 6.5);

// Create a group to contain the clickable spaces //
var clickableSpaces = g.append("g");

clickableSpaces
  .append("a")
  .attr("href", "https://www.cameronsworld.net/")
  .append("image")
  .attr("class", "js-img")
  .attr("href", "Images/uranus.png")
  .attr("x", x0 - 10)
  .attr("y", y0 - 10)
  .attr("width", 18)
  .attr("height", 18)
  .style("cursor", "pointer")

clickableSpaces
  .append("a")
  .attr("href", "HTML/form.html")
  .append("image")
  .attr("class", "js-img")
  .attr("href", "Images/jupiter.png")
  .attr("x", x1 - 10)
  .attr("y", y1 - 10)
  .attr("width", 24)
  .attr("height", 24)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("href", "HTML/colormeotto.html")
  .append("image")
  .attr("class", "js-img")
  .attr("href", "Images/earth.png")
  .attr("x", x2 - 10)
  .attr("y", y2 - 10)
  .attr("width", 21.5)
  .attr("height", 21.5)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("href", "https://www.15questions.net/interview/fifteen-questions-otto-von-schirach/page-1/")
  .append("image")
  .attr("class", "js-img")
  .attr("href", "Images/mars.png")
  .attr("x", x8 - 10)
  .attr("y", y8 - 10)
  .attr("width", 18)
  .attr("height", 18)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("href", "https://ottovonschirach.bandcamp.com/music")
  .append("image")
  .attr("class", "js-img")
  .attr("href", "Images/saturn.png")
  .attr("x", x9 - 10)
  .attr("y", y9 - 10)
  .attr("width", 23.5)
  .attr("height", 23.5)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("href", "https://bermudatrianglefamily.bigcartel.com")
  .append("image")
  .attr("class", "js-img")
  .attr("href", "Images/neptune.png")
  .attr("x", x10 - 10)
  .attr("y", y10 - 10)
  .attr("width", 21.5)
  .attr("height", 21.5)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("href", "https://www.instagram.com/ottovonschirach/?hl=en")
  .append("image")
  .attr("class", "js-img")
  .attr("href", "Images/venus.png")
  .attr("x", x11 - 10)
  .attr("y", y11 - 10)
  .attr("width", 15)
  .attr("height", 15)
  .style("cursor", "pointer");

clickableSpaces
  .append("a")
  .attr("href", "https://www.youtube.com/channel/UCpAG00EDhkQ3w9VMTXiq3Pw")
  .append("image")
  .attr("class", "js-img")
  .attr("href", "Images/mercury.png")
  .attr("x", x12 - 10)
  .attr("y", y12 - 10)
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
