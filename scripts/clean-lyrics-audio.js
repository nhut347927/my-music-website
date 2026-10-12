const fs = require('fs');
const filePath = 'src/app/data/lyrics-data.ts';
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/audio:\s*"\/audio\/[^"]+",?\s*(\/\/[^\n]*)?/g, 'audio: "",');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully cleared all /audio/ references in lyrics-data.ts');
