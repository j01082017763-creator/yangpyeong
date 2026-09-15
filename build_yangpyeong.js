const fs = require('fs');

// 1. Read _source_html
let html = fs.readFileSync('stitch_smart_farm_community_landing_page/_3/code.html', 'utf8');
console.log('Original html length:', html.length);

fs.writeFileSync('yangpyeong.html', html, 'utf8');
console.log('Test write success');
