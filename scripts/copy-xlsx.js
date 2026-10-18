const fs = require("node:fs");
const path = require("node:path");

const packageRoot = path.resolve(__dirname, "..", "node_modules", "@e965", "xlsx");
const vendorRoot = path.resolve(__dirname, "..", "vendor");

fs.mkdirSync(vendorRoot, { recursive: true });
fs.copyFileSync(path.join(packageRoot, "dist", "xlsx.full.min.js"), path.join(vendorRoot, "xlsx.full.min.js"));
fs.copyFileSync(path.join(packageRoot, "LICENSE"), path.join(vendorRoot, "LICENSE.xlsx.txt"));
