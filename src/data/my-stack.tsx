export type TechItem = {
  name: string;
  slug: string;
};

export type TechCategory = {
  category: string;
  items: TechItem[];
};

export const myStackData: TechCategory[] = [
  {
    category: "Front-end",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextjs" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "WordPress", slug: "wordpress" },
      { name: "Figma", slug: "figma" },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "Node.js", slug: "nodejs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "SQL", slug: "sql" },
      { name: "Redis", slug: "redis" },
      { name: "Sequelize", slug: "sequelize" },
      { name: "PHP", slug: "php" },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Vitest", slug: "vitest" },
      { name: "Jest", slug: "jest" },
      { name: "Playwright", slug: "playwright" },
    ],
  },
];
