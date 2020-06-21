import * as d3 from "d3";

// primary colors on screen
export const primaryColors = {
    'confident-green': 'rgba(134, 194,  50, 0.9)',
    'alma-orange'    : 'rgba(242, 112,  28, 0.9)',
    'kyrstal-blue'   : 'rgba(140, 203, 223, 0.9)'
}

// d3 drawing color scales
const MAXDEPTH = 3;
const d3Green = d3
  .scaleLinear()
  .domain([-1, MAXDEPTH])
  .range(["rgba(134, 194, 50, 0.9)", "rgba(256,256,256,0.5)"])
  .interpolate(d3.interpolateHcl);
const d3Orange = d3.scaleSequential([MAXDEPTH, -2], d3.interpolateOranges)

export const d3ColorSchemes = {
    'confident-green': d3Green,
    'alma-orange'    : d3Orange
}

// theme colors
export const themeLight = {
    text: "#000",
    background: "#f2f2f2"
}

export const themeDark = {
    text: "#fff",
    background: "#222629"
}