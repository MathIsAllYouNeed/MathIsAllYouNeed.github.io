// ── Visual configuration for index.html ────────────────────
const TILING_CONFIG = {
  // Rhombus colors: LEFT, RIGHT, TOP
  COLORS: ["#d963a6", "#e4dfad", "#92dbaa"],

  // Rhombus edge stroke
  STROKE: "#111",
  STROKE_WIDTH: 0.5,

  // Hexagon boundary stroke
  BOUNDARY_STROKE: "#111",
  BOUNDARY_WIDTH: 1.0,

  // 3D height shading (HSL-based)
  SHADING_HUES: [0, 120, 220],    // hue per type: red, green, blue
  SHADING_SAT: 65,                // saturation %
  SHADING_LIGHT_MIN: 35,          // darkest (bottom)
  SHADING_LIGHT_MAX: 82,          // lightest (top)

  // Flippable vertex indicators
  FLIP_R: 0.2,            // radius as fraction of S
  FLIP_FILL: "#ffffff", //"#2563eb",
  FLIP_STROKE: "none",
  FLIP_STROKE_WIDTH: 0,
};
