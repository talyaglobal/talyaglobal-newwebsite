const fs = require('fs');
const path = require('path');

// Files that need their Navigation import updated
const filesToUpdate = [
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/investments/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/services/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/portfolio/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/venture-ai-studio/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/App.jsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/team/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/news/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/support/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/careers/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/mission/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/admin/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/vip-zone/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/terms/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/about/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/privacy/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/roi-calculator/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/resources/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/our-journey/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/contact/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/insights/page.tsx'
];

filesToUpdate.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Update import paths to use the correct relative path
      content = content.replace(
        /import\s+\{?\s*Navigation\s*\}?\s+from\s+['"]\.\.\/components\/Navigation['"]/g,
        "import { Navigation } from './components/Navigation'"
      );
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✅ Updated imports in ${file}`);
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${file}:`, error.message);
  }
});

console.log('\nImport path updates complete!');
