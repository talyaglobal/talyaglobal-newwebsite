const fs = require('fs');
const path = require('path');

// Files that need their Navigation import updated
const filesToUpdate = [
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/roi-calculator/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/support/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/insights/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/investments/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/services/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/portfolio/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/venture-ai-studio/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/App.jsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/team/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/news/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/careers/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/mission/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/about/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/admin/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/terms/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/contact/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/vip-zone/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/resources/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/our-journey/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/privacy/page.tsx',
  '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/ai-assessment/page.tsx'
];

// Track statistics
let updatedCount = 0;
let skippedCount = 0;
let errorCount = 0;

filesToUpdate.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Create a backup of the original file
      fs.writeFileSync(`${file}.bak`, content, 'utf8');
      
      // Calculate relative path to the Navigation component
      const componentPath = '/Users/askinguzel/Documents/dev/talyaglobal-newwebsite/app/components/Navigation.tsx';
      const fileDir = path.dirname(file);
      const relativeImportPath = path.relative(fileDir, path.dirname(componentPath)).replace(/\\/g, '/');
      
      // If we're in the app directory, use ./components/Navigation
      // If we're in a subdirectory, use ../components/Navigation or the correct relative path
      const relativePath = relativeImportPath === '' ? './components/Navigation' : `${relativeImportPath}/Navigation`;
      
      // Update import paths to use the correct relative path
      const updatedContent = content.replace(
        /import\s+\{?\s*Navigation\s*\}?\s+from\s+['"].*?Navigation['"]/g,
        `import { Navigation } from '${relativePath}'`
      );
      
      // Only write back if changes were made
      if (content !== updatedContent) {
        fs.writeFileSync(file, updatedContent, 'utf8');
        console.log(`✅ Updated imports in ${file} to use '${relativePath}'`);
        updatedCount++;
      } else {
        console.log(`⏭️  No changes needed for ${file}`);
        skippedCount++;
      }
    } else {
      console.log(`⚠️  File not found: ${file}`);
      errorCount++;
    }
  } catch (error) {
    console.error(`❌ Error updating ${file}:`, error.message);
    errorCount++;
  }
});

console.log('\nNavigation import updates complete!');
console.log(`📊 Summary: ${updatedCount} files updated, ${skippedCount} files skipped, ${errorCount} errors`);