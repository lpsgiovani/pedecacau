const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Usuario\\Documents\\Pé de Cacau\\pedecacau';

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex to find the inline privacy policy link
        const oldRights = /<p class="mt-8">© 2026 Todos os direitos reservados • <a href="politica-privacidade\.html" class="font-bold hover:text-rosa transition-colors">Política de Privacidade<\/a><\/p>/;
        
        if (oldRights.test(content)) {
            const newRights = `<p class="mt-8 mb-1">© 2026 Todos os direitos reservados</p>\n                <p><a href="politica-privacidade.html" class="font-bold hover:text-rosa transition-colors border-b border-rosa/30 pb-0.5 hover:border-rosa">Política de Privacidade</a></p>`;
            content = content.replace(oldRights, newRights);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            console.log(`Skipped ${file}`);
        }
    }
});
