// Components
import Wrapper from "@/layout/layout";
import Heading from "@/components/ui/heading";
import { myStackData } from "@/data/my-stack";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiWordpress,
  SiFigma,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiSequelize,
  SiPhp,
  SiVitest,
  SiJest,
} from "react-icons/si";

// Map icons helper function
const getIcon = (slug: string) => {
  switch (slug) {
    case "react":
      return <SiReact />;
    case "nextjs":
      return <SiNextdotjs />;
    case "html5":
      return <SiHtml5 />;
    case "css3":
      return <SiCss />;
    case "wordpress":
      return <SiWordpress />;
    case "figma":
      return <SiFigma />;
    case "nodejs":
      return <SiNodedotjs />;
    case "nestjs":
      return <SiNestjs />;
    case "typescript":
      return <SiTypescript />;
    case "sql":
      return <SiPostgresql />;
    case "redis":
      return <SiRedis />;
    case "sequelize":
      return <SiSequelize />;
    case "php":
      return <SiPhp />;
    case "vitest":
      return <SiVitest />;
    case "jest":
      return <SiJest />;
    case "playwright":
      return null;
    default:
      return null;
  }
};

export default function HomeMyStack() {
  return (
    <Wrapper>
      <Heading as="h2">My Stack</Heading>
      {myStackData.map((group) => (
        <div key={group.category}>
          <h3 className="font-poppins mb-4 text-sm uppercase">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-4">
            {group.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 rounded-lg border border-black/20 p-3 lg:gap-3"
              >
                <span className="text-primary text-2xl">
                  {getIcon(item.slug)}
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
