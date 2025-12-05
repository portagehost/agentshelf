import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const promptsDirectory = path.join(process.cwd(), 'content/prompts');

// Get all prompts from a specific category
export function getPromptsByCategory(category) {
  try {
    const categoryPath = path.join(promptsDirectory, category);
    
    // Check if the category directory exists
    if (!fs.existsSync(categoryPath)) {
      return [];
    }

    const fileNames = fs.readdirSync(categoryPath);
    const prompts = fileNames
      .filter(name => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(categoryPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          category,
          content: matterResult.content,
          ...matterResult.data,
        };
      });

    return prompts;
  } catch (error) {
    console.error('Error reading prompts:', error);
    return [];
  }
}

// Get all categories that have prompts
export function getAllCategories() {
  const categories = [
    { name: 'Listing Descriptions', slug: 'listing-descriptions', icon: '📝' },
    { name: 'Client Communication', slug: 'client-communication', icon: '💬' },
    { name: 'Social Media', slug: 'social-media', icon: '📱' },
    { name: 'Lead Generation', slug: 'lead-generation', icon: '🎯' },
    { name: 'Market Analysis', slug: 'market-analysis', icon: '📊' },
    { name: 'Objection Handling', slug: 'objection-handling', icon: '🤝' },
    { name: 'Open Houses', slug: 'open-houses', icon: '🏠' }
  ];
  
  return categories;
}
