const build = require("esbuild");

build
  .build({
    entryPoints: ["index.js"],
    bundle: true,
    minify: true,
    loader: {
      ".js": "ts"
    },
    format: "esm",
    external: ["react", "react-dom"],
    outfile: "dist/index.mjs"
  })
  .catch(() => process.exit(1));

build
  .build({
    entryPoints: ["index.js"],
    bundle: true,
    minify: true,
    loader: {
      ".js": "ts"
    },
    format: "cjs",
    external: ["react", "react-dom"],
    outfile: "dist/index.js"
  })
  .catch(() => process.exit(1));
