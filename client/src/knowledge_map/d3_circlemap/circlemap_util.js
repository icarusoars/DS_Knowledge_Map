import * as d3 from "d3";

const MAXDEPTH = 4;
const LEAFNODECOLOR = "#EFEFEF"; //"#fcf3dc"
// green color scale
const color = d3
  .scaleLinear()
  .domain([-1, MAXDEPTH])
  .range(["rgba(134, 194, 50, 0.9)", "rgba(256,256,256,0.5)"])
  .interpolate(d3.interpolateHcl);
// const color = d3.scaleSequential([MAXDEPTH, -2], d3.interpolateOranges)

// interactive circle packing code adapted from:
// https://bl.ocks.org/fdlk/076469462d00ba39960f854df9acda56
// referenced this article to integrate d3 with react:
// https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71

function createCircleMapUtil(circlemapJSON, svg_node, onCircleClick) {
  // select svg container using React reference
  var svg = d3.select(svg_node);
  var margin = 20;
  var svg_width = svg.node().getBoundingClientRect()["width"];
  var svg_height = svg.node().getBoundingClientRect()["height"];
  var diameter = svg_height < svg_width ? svg_height : svg_width;
  diameter = diameter - 40;

  // add a group container within svg
  var g = svg
    .append("g")
    .attr(
      "transform",
      "translate(" + svg_width / 2 + "," + (svg_height / 2 - margin) + ")"
    );

  // create a gaussian blur filter
  var filter = svg
    .append("defs")
    .append("filter")
    .attr("id", "textblur")
    .append("feGaussianBlur")
    .attr("stdDeviation", 2);

  // create circle packing fucntion
  // this function will be used to pack each node in the diagram
  // "pack" means putting together all the child nodes
  var pack = d3
    .pack()
    .size([diameter - margin, diameter - margin])
    .padding(5); // distance between circles

  var root = d3
    .hierarchy(circlemapJSON)
    .sum(function (d) {
      return d.size;
    })
    .sort(function (a, b) {
      return b.value - a.value;
    });

  // get all descendants of root
  var focus = root,
    nodes = pack(root).descendants(),
    view;

  // draw circles for each descendant
  var circle = g
    .selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("class", function (d) {
      return d.parent
        ? d.children
          ? "node"
          : "node node--leaf"
        : "node node--root";
    })
    // .attr("filter", "url(#blur)")
    .style("fill", function (d) {
      return d.children ? color(d.depth) : LEAFNODECOLOR;
    })
    .attr("id", function (d) {
      var file_path = d["data"]["md_file_path"];
      file_path = file_path.replace(/\//g, "_").replace(/\./g, "_");
      return file_path;
    })
    .on("click", function (d) {
      var prezoomfocus = focus;
      if (focus !== d) {
        if (!d.children) {
          zoom(d.parent); //zoom function changes global variable focus to d that is clicked
        } else {
          zoom(d); //zoom function changes global variable focus to d that is clicked
        }

        d3.event.stopPropagation();
      }
      // React eventHandler for when circle is clicked:
      // if click on same circle twice, return to root Data_Science circle
      if (d["depth"] === 0 || prezoomfocus === d) {
        onCircleClick(circlemapJSON["md_file_path"], circlemapJSON["name"]);
      } else {
        onCircleClick(d["data"]["md_file_path"], d["data"]["name"]);
      }
    });
  // .on("mouseover",function(){
  //   d3.select(this).attr("filter", null);
  // })
  // .on("mouseout",function(){
  //   d3.select(this).attr("filter", "url(#blur)");
  // });

  circle.append("svg:title").text(function (d) {
    return d.name;
  });

  // label circle with text for each descendant
  var text = g
    .selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("id", function (d) {
      var file_path = d["data"]["md_file_path"];
      file_path = file_path.replace(/\//g, "_").replace(/\./g, "_");
      return file_path;
    })
    .style("fill-opacity", function (d) {
      return d.parent === root ? 1 : 0;
    })
    .style("display", function (d) {
      // only display text of immediate children of root
      return d.parent === root ? "inline-block" : "none";
    })
    .style("font-size", calculateTextFontSize)
    // each word is on its own line to make words as big as possible
    // use tspan within svg text to create newlines
    .selectAll("tspan")
    .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .join("tspan")
    .attr("x", 0)
    .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
    .text((d) => d);

  // select all the nodes
  var node = g.selectAll("circle,text");

  // click blank space of svg, zoom back to root node
  svg.on("click", function () {
    zoom(root);
    onCircleClick(circlemapJSON["md_file_path"], circlemapJSON["name"]);
  });

  // initial zoomto root node
  zoomTo([root.x, root.y, root.r * 2 + margin]);

  // initial set text fonts to correct size
  setTimeout(function () {
    d3.selectAll("text")
      .filter(function (d) {
        return d.parent === focus || this.style.display === "inline-block";
      })
      .style("font-size", calculateTextFontSize);
  }, 500);

  // zoom to a new node d
  function zoom(d) {
    var focus0 = focus;
    focus = d;
    // make zoom smooth with d3 transition capabilities
    var transition = d3
      .transition()
      .duration(d3.event.altKey ? 7500 : 750)
      .tween("zoom", function (d) {
        // zoom from first parameter location to second parameter location
        var i = d3.interpolateZoom(view, [
          focus.x,
          focus.y,
          focus.r * 2 + margin,
        ]);
        return function (t) {
          zoomTo(i(t));
        };
      });

    transition
      .selectAll("text")
      .filter(function (d) {
        return d.parent === focus || this.style.display === "inline-block";
      })
      .style("fill-opacity", function (d) {
        return d.parent === focus ? 1 : 0;
      })
      .on("start", function (d) {
        if (d.parent === focus) this.style.display = "inline-block";
      })
      .on("end", function (d) {
        if (d.parent !== focus) this.style.display = "none";
      });
    setTimeout(function () {
      d3.selectAll("text")
        .filter(function (d) {
          return d.parent === focus || this.style.display === "inline-block";
        })
        .style("font-size", calculateTextFontSize);
    }, 500);
  }

  // helper function to make zooming to new node smooth
  function zoomTo(v) {
    var k = diameter / v[2];
    view = v;
    node.attr("transform", function (d) {
      return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
    });
    circle.attr("r", function (d) {
      return d.r * k;
    });
  }

  // returns the font size for text labels such that they fill entire circle
  var calculateTextFontSize = function (d) {
    var id = d3.select(this).attr("id");
    var radius = 0;
    if (d.fontsize) {
      //if fontsize is already calculated use that.
      return d.fontsize;
    }
    if (!d.computed) {
      //if computed not present, compute text length of longest tspan
      var tspans = this.children;
      d.computed = 0;
      for (var i = 0; i < tspans.length; i++) {
        var tspanLength = tspans[i].getComputedTextLength();
        if (tspanLength > d.computed) {
          d.computed = tspanLength;
        }
      }
      // d.computed = this.getComputedTextLength();
      if (d.computed != 0) {
        //if computed is not 0 then get the visual radius of DOM
        var r = d3.selectAll("#" + id).attr("r");
        //if radius present in DOM use that
        if (r) {
          radius = r;
        }
        //calculate the font size and store it in object for future
        d.fontsize = ((2 * radius - 8) / d.computed) * 12 + "px";
        return d.fontsize;
      }
    }
  };
}

export { createCircleMapUtil };
