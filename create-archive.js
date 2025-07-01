const fs = require('fs');
const path = require('path');

// Function to get all files recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    
    // Skip node_modules, dist, and other unnecessary directories
    if (file === 'node_modules' || file === 'dist' || file === '.git' || file.startsWith('.')) {
      return;
    }

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Function to create a simple tar-like archive
function createArchive() {
  const files = getAllFiles('./');
  const archiveContent = [];

  console.log('Creating archive with the following files:');
  
  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative('./', filePath);
      
      console.log(`- ${relativePath}`);
      
      archiveContent.push({
        path: relativePath,
        content: content
      });
    } catch (error) {
      // Skip binary files or files that can't be read as text
      console.log(`- ${filePath} (skipped - binary or unreadable)`);
    }
  });

  // Create a JSON archive
  const archive = {
    projectName: 'MagentoTechVite',
    createdAt: new Date().toISOString(),
    files: archiveContent
  };

  fs.writeFileSync('magentotechvite-project.json', JSON.stringify(archive, null, 2));
  console.log('\nArchive created successfully: magentotechvite-project.json');
  console.log(`Total files archived: ${archiveContent.length}`);
}

createArchive();