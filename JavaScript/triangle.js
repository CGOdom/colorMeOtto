// Set up the SVG container to fill the browser window with padding
var padding = 50; // Amount of padding around the SVG content
var svg = d3.select("svg"),
    width = window.innerWidth - 2 * padding, // Subtract padding from both sides
    height = window.innerHeight - 2 * padding, // Subtract padding from top and bottom
    radius = Math.min(width, height) / 2;

svg.attr("width", window.innerWidth)
   .attr("height", window.innerHeight)
   .style("background-color", "black"); // Ensuring the SVG background is still black

// Update the group transform to center based on the new dimensions, considering padding
var g = svg.append("g")
           .attr("transform", "translate(" + (padding + width / 2) + "," + (padding + height / 2) + ")");

// Define the arc generator for the ring segments
var arc = d3.arc()
            .innerRadius(radius * 0.2)
            .outerRadius(radius * .5);

// Define the rotation animation for the triangle
function rotateTriangle() {
  g.select(".triangle")
   .transition()
   .duration(8000*Math.random() + 5000) // duration of animation in milliseconds
   .ease(d3.easeCubic) // Apply easing
   .attrTween("transform", function() {
     return d3.interpolateString("rotate(0)", "rotate(360)");
   })
   .on("end", rotateTriangle); // Loop the animation
}

function rotateTriangle2() {
  g.select(".triangle2")
   .transition()
   .duration(8000*Math.random() + 5000) // duration of animation in milliseconds
   .ease(d3.easeCubic) // Apply easing
   .attrTween("transform", function() {
     return d3.interpolateString("rotate(0)", "rotate(-360)");
   })
   .on("end", rotateTriangle2); // Loop the animation
}

// Draw the encompassing triangle and start the rotation
g.append("path")
 .attr("class", "triangle")
 .attr("d", "M0," + (-radius) + " L" + (-radius * Math.sin(Math.PI / 3)) + "," + (radius / 2) + " L" + (radius * Math.sin(Math.PI / 3)) + "," + (radius / 2) + "Z")
 .attr("fill", "none")
 .attr("stroke", "#f0f0f0")
 .style('stroke-width', '7px')
 .call(rotateTriangle); // Start the rotation
 
 // Draw the encompassing triangle and start the rotation
g.append("path")
 .attr("class", "triangle2")
 .attr("d", "M0," + (-radius) + " L" + (-radius * Math.sin(Math.PI / 3)) + "," + (radius / 2) + " L" + (radius * Math.sin(Math.PI / 3)) + "," + (radius / 2) + "Z")
 .attr("fill", "none")
 .attr("stroke", "#f0f0f0")
 .style('stroke-width', '7px')
 .call(rotateTriangle2); // Start the rotation

// Function to randomly return either 1 or -1
function randomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

// Define the rotation animation for the segments
// Create the ring segments
var segments = 8; // number of segments in the ring
function rotateSegments() {
  g.selectAll(".segment")
   .transition()
   .duration(8000*Math.random() + 5000) // duration of animation in milliseconds
   .ease(d3.easeCubic) // Apply easing
   .attrTween("transform", function() {
     return d3.interpolateString("rotate(0)", "rotate("+ 360 * randomSign() +")");
   })
   .on("end", rotateSegments); // Loop the animation
}

// Create the ring segments and start the counter rotation
for (var i = 0; i < segments; i++) {
  g.append("path")
   .attr("class", "segment")
   .attr("d", arc.startAngle((Math.PI * 2 / segments) * i)
                .endAngle((Math.PI * 2 / segments) * (i + 1)))
   .attr("fill", i % 2 == 0 ? "none" : "none")
   .attr("stroke", "white")
   .style('stroke-width', '7px')
   .attr("transform", "rotate(" + (i * 360 / segments) + ")")
   .call(rotateSegments); // Start the counter rotation
}

// Create and position only three clickable spaces between pairs of segments
var x0 = (radius * 0.35) * Math.cos((Math.PI * 2 / segments) * 0.5);
var y0 = (radius * 0.35) * Math.sin((Math.PI * 2 / segments) * 0.5);
var x1 = (radius * 0.35) * Math.cos((Math.PI * 2 / segments) * 2.5);
var y1 = (radius * 0.35) * Math.sin((Math.PI * 2 / segments) * 2.5);
var x2 = (radius * 0.35) * Math.cos((Math.PI * 2 / segments) * 4.5);
var y2 = (radius * 0.35) * Math.sin((Math.PI * 2 / segments) * 4.5);

// Create a group to contain the clickable spaces
var clickableSpaces = g.append("g");

clickableSpaces.append("a")
 .attr("href", "4. easter-egg.html")
 .append("image") // Use image element instead of circle
 .attr("class", "image")
 .attr("href", "../Images/Uranus.png") // Replace "image0.jpg" with the path to your image
 .attr("x", x0 - 10) // Adjust position if needed
 .attr("y", y0 - 10) // Adjust position if needed
 .attr("width", 20)
 .attr("height", 20)
 .style("cursor", "pointer")
 .style("opacity", 0) // Initially hide the image
 .on("mouseover", function() {
   d3.select(this).style("opacity", 1); // Make the image visible on hover
 })
 .on("mouseout", function() {
   d3.select(this).style("opacity", 0); // Hide the image on mouseout
 });

clickableSpaces.append("a")
 .attr("href", "3. soul_contract.html")
 .append("image") // Use image element instead of circle
 .attr("class", "image")
 .attr("href", "../Images/Jupiter.png") // Replace "image0.jpg" with the path to your image
 .attr("x", x1 - 10) // Adjust position if needed
 .attr("y", y1 - 10) // Adjust position if needed
 .attr("width", 20)
 .attr("height", 20)
 .style("cursor", "pointer")

clickableSpaces.append("a")
 .attr("href", "2. coloring_book.html")
 .append("image") // Use image element instead of circle
 .attr("class", "image")
 .attr("href", "../Images/Earth.png") // Replace "image0.jpg" with the path to your image
 .attr("x", x2 - 10) // Adjust position if needed
 .attr("y", y2 - 10) // Adjust position if needed
 .attr("width", 20)
 .attr("height", 20)
 .style("cursor", "pointer")

// Define the rotation animation for the clickable spaces
function rotateClickableSpaces() {
  clickableSpaces.transition()
    .duration(3456) // duration of rotation in milliseconds
    .ease(d3.easeLinear) // Apply linear easing
    .attrTween("transform", function() {
      return d3.interpolateString("rotate(0)", "rotate(360)");
    })
    .transition()
    .delay(9876) // delay before reversing rotation
    .duration(8000) // duration of pause in milliseconds
    .ease(d3.easeLinear) // Apply linear easing
    .attrTween("transform", function() {
      return d3.interpolateString("rotate(360)", "rotate(0)");
    })
    .on("end", rotateClickableSpaces); // Loop the animation
}

rotateClickableSpaces(); // Start the rotation of clickable spaces
