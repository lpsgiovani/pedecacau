const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexFile, 'utf8');

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
// Example: style="animation-delay: 0.1s;" -> style={{ animationDelay: '0.1s' }}
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

const homeComponent = `import React, { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';

function Home() {
    const containerRef = useRef(null);

    return (
        <div className="bg-creme text-marrom font-body antialiased selection:bg-rosa selection:text-azul min-h-screen flex flex-col overflow-x-hidden">
            ${bodyHtml}
        </div>
    );
}

export default Home;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Home.jsx'), homeComponent);
console.log("Converted index.html to Home.jsx");
