// Create a group to contain the clickable spaces
var clickableSpaces = g.append("g");

clickableSpaces.append("circle")
 .attr("cx", x0)
 .attr("cy", y0)
 .attr("r", 10)
 .attr("fill", "white")
 .attr("class", "clickable-space")
 .style("cursor", "pointer")
 .on("mouseover", function() {
   d3.select(this).attr("fill", "#ffcc00"); // Change the fill color on hover
 })
 .on("mouseout", function() {
   d3.select(this).attr("fill", "white"); // Revert the fill color on mouseout
 })
 .append("image") // Append an image inside the circle
 .attr("href", "Images/Uranus.png") // Replace "image0.jpg" with the path to your image
 .attr("x", x0 - 10) // Adjust position if needed
 .attr("y", y0 - 10) // Adjust position if needed
 .attr("width", 20)
 .attr("height", 20)
 .style("opacity", 0); // Initially hide the image

// Repeat the same process for other clickable spaces
// ...

