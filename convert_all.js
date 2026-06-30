const fs = require('fs');
const path = require('path');

const files = [
    'dashboard.html',
    'voto.html',
    'voto-ja-confirmado.html',
    'sobre.html',
    'perfil-cafeteria.html',
    'confirmacao.html'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract body
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyHtml = bodyMatch ? bodyMatch[1] : content;

    // Remove scripts inside body
    bodyHtml = bodyHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Convert class to className
    bodyHtml = bodyHtml.replace(/class=/g, 'className=');

    // Convert for to htmlFor
    bodyHtml = bodyHtml.replace(/for=/g, 'htmlFor=');

    // Self-closing tags: img, input, br, hr
    bodyHtml = bodyHtml.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
    bodyHtml = bodyHtml.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
    bodyHtml = bodyHtml.replace(/<br>/gi, '<br />');
    bodyHtml = bodyHtml.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');

    // Convert inline styles
    bodyHtml = bodyHtml.replace(/style="([^"]*)"/g, (match, p1) => {
        const rules = p1.split(';').filter(Boolean);
        const styleObj = {};
        rules.forEach(rule => {
            const [key, value] = rule.split(':').map(s => s.trim());
            if (key && value) {
                const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                styleObj[camelKey] = value;
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Convert HTML comments to JSX comments
    bodyHtml = bodyHtml.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
    
    // Replace hrefs like "index.html" with "/" or component paths
    bodyHtml = bodyHtml.replace(/href="index\.html"/g, 'href="/"');
    bodyHtml = bodyHtml.replace(/href="([a-zA-Z0-9-]+)\.html"/g, 'href="/$1"');

    // Component Name
    const componentName = file
        .replace('.html', '')
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

    const componentCode = `import React from 'react';

function ${componentName}() {
    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            ${bodyHtml}
        </div>
    );
}

export default ${componentName};
`;

    fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${componentName}.jsx`), componentCode);
    console.log(`Converted ${file} to ${componentName}.jsx`);
});
