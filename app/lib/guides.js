import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const guidesDirectory = path.join(process.cwd(), "content/guides");

// Get all guides data
export function getAllGuides() {
  try {
    // Check if the guides directory exists
    if (!fs.existsSync(guidesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(guidesDirectory);
    const allGuidesData = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(guidesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the guide metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        return {
          slug,
          ...matterResult.data,
        };
      });

    // Sort guides by date
    return allGuidesData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading guides:", error);
    return [];
  }
}

// Get a single guide by slug
export async function getGuideBySlug(slug) {
  try {
    const fullPath = path.join(guidesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the guide metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and content
    return {
      slug,
      contentHtml,
      ...matterResult.data,
    };
  } catch (error) {
    console.error("Error reading guide:", error);
    return null;
  }
}
