const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/<body[^>]*>[\s\S]*<\/body>/i, `<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>`);
fs.writeFileSync('index.html', content);
console.log('Stripped index.html');
