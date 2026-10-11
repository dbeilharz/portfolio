// Components
import Button from "@/components/ui/button";
import Pill from "@/components/ui/pill";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export type latestWorkItemProps = {
  name: string;
  skills: string[];
  linkTo?: string;
  image: string;
  imageMobile: string;
  imageDescription: string;
  delay?: number;
};

export default function LatestWorkItem({
  name,
  skills,
  linkTo,
  image,
  imageMobile,
  imageDescription,
  delay,
}: Readonly<latestWorkItemProps>) {
  return (
    <ScrollReveal className="w-full" delay={delay}>
      <div className="bg-background flex origin-[50%_0%] flex-col gap-6 rounded-lg">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-poppins text-heading text-xl font-light lg:text-2xl">
              {name}
            </h3>
            {linkTo && <Button to={linkTo}>Explore</Button>}
          </div>
        </div>

        <div className="border-secondary-bg overflow-hidden rounded-lg border">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={image}
              width="2000"
              height="1350"
            />
            <source srcSet={imageMobile} width="768" height="1024" />
            <img
              src={image}
              alt={imageDescription}
              width="2000"
              height="1350"
            />
          </picture>
        </div>

        <div className="flex flex-wrap gap-2 lg:gap-3">
          {skills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
