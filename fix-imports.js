const fs = require('fs');
const path = require('path');

// Files to update based on the grep search results
const filesToUpdate = [
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/investments/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/services/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/portfolio/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/about/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/careers/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/contact/page.tsx'
];

filesToUpdate.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace default import with named import
    content = content.replace(
      /import Navigation from ['"]\.\.\/src\/components\/Navigation['"]/g,
      "import { Navigation } from '@/components/Navigation'"
    );
    
    // Replace relative path with @/components/Navigation
    content = content.replace(
      /import Navigation from ['"](?:\.\.\/)*src\/components\/Navigation['"]/g,
      "import { Navigation } from '@/components/Navigation'"
    );
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated imports in ${file}`);
  } catch (error) {
    console.error(`Error updating ${file}:`, error.message);
  }
});

console.log('Import updates complete!');
