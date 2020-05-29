import * as d3 from "d3";

// read in knowledge map json. This JSON is not stored on backend for convenience.
var circlemap = require('./circlemap.json')

const MAXDEPTH = 3
const BACKGROUNDCOLOR = "#f2f2f2"

// interactive circle packing code adapted from:
// https://bl.ocks.org/fdlk/076469462d00ba39960f854df9acda56
// referenced this article to integrate d3 with react:
// https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71

function createCircleMapUtil(svg_node) {

  // select svg container using React reference
  var svg = d3.select(svg_node);
  var margin = 20;
  var svg_width = svg.node().getBoundingClientRect()['width']
  var svg_height = svg.node().getBoundingClientRect()['height'];
  var diameter = (svg_height < svg_width) ? svg_height : svg_width;
  diameter = diameter - 40;

  // add a group container within svg
  var g = svg
    .append("g")
    .attr("transform", "translate(" + (svg_width / 2) + "," + (svg_height / 2 - margin) + ")");

  // color scheme
  // var color = d3
  //   .scaleLinear()
  //   .domain([-1, MAXDEPTH])
  //   .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
  //   // .range(['#FCFAFA', '#0CCA4A'])
  //   .interpolate(d3.interpolateHcl);
  var color = d3.scaleSequential([-10, MAXDEPTH], d3.interpolateMagma)

  // create circle packing fucntion
  // this function will be used to pack each node in the diagram
  // "pack" means putting together all the child nodes
  var pack = d3
    .pack()
    .size([diameter - margin, diameter - margin])
    .padding(5);                   // distance between circles
  
  
  // referenced this post for d3 v5 json API
  // https://stackoverflow.com/questions/49768165/code-within-d3-json-callback-is-not-executed
  // d3.json(circlemap).then(function(root) {
    var root = circlemap;
    root = d3.hierarchy(root)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });

    // get all descendants of root
    var focus = root,
        nodes = pack(root).descendants(),
        view;

    // draw circles for each descendant
    var circle = g.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
        .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
        .style("fill", function(d) { return d.children ? color(d.depth) : null; })
        .on("click", function(d) {
          if (focus !== d){
            zoom(d);
            d3.event.stopPropagation();
          } 
        });

    // label circle with text for each descendant
    var text = g.selectAll("text")
      .data(nodes)
      .enter().append("text")
        .attr("class", "label")
        .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
        .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
        .text(function(d) { return d.data.name; });

    var node = g.selectAll("circle,text");

    // change background color when clicked to a new node
    svg
      .style("background", BACKGROUNDCOLOR)
      .on("click", function() { zoom(root); });
    
    zoomTo([root.x, root.y, root.r * 2 + margin]);
    
    // zoom to a new node d
    function zoom(d) {
      var focus0 = focus; focus = d;
      // make zoom smooth with d3 transition capabilities
      var transition = d3.transition()
          .duration(d3.event.altKey ? 7500 : 750)
          .tween("zoom", function(d) {
            // zoom from first parameter location to second parameter location
            var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
            return function(t) { zoomTo(i(t)); };
          });
      
      
      transition.selectAll("text")
        .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
          .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
          .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
          .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    }
    
    // helper function to make zooming to new node smooth
    function zoomTo(v) {
      var k = diameter / v[2]; view = v;
      node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
      circle.attr("r", function(d) { return d.r * k; });
    }
  // }).catch(function(error) {
  //   console.log("ERROR happened")
  //   console.log(error)
  // })

}

export { createCircleMapUtil };

