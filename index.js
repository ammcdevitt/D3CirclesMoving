$(document).ready(function(){
    //.select to set attributes and event listeners
    d3.select("svg")
        .append("circle")
        .attr("r", 20)
        .attr("cx",20)
        .attr("cy",20)
        .style("fill","red");
    d3.select("svg")
        .append("circle")
        .attr("r", 100)
        .attr("cx",400)
        .attr("cy",400)
    //transition method delays change. delay number in millisec
    d3.select("a").transition().delay(2000).style("opacity", 1);
    d3.select("b").transition().delay(3000).style("opacity", .75);
    d3.selectAll("circle").transition().duration(2000).attr("cy", 200);
});