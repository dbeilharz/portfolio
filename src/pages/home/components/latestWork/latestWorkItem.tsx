// Utilities
import { Link } from "react-router";

// Components
import Pill from "../../../../components/ui/pill";

export type latestWorkItemProps = {
  name: string;
  skills: string[];
  linkTo?: string;
  image: string;
  imageMobile: string;
  imageDescription: string;
  index: number;
};

export default function LatestWorkItem({
  name,
  skills,
  linkTo,
  image,
  imageMobile,
  imageDescription,
  index,
}: latestWorkItemProps) {
  return (
    <div
      style={{ "--index": `${index + 1}` } as React.CSSProperties}
      className="card sticky w-full grid-cols-1"
    >
      <div className="card__content bg-background flex origin-[50%_0%] flex-col gap-8 rounded-lg p-7 will-change-transform">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-poppins text-heading text-xl font-light lg:text-2xl">
              {name}
            </h3>
            {linkTo && (
              <Link to={linkTo} className="underline">
                View Project
              </Link>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Pill key={skill}>{skill}</Pill>
            ))}
          </div>
        </div>
        <div className="border-secondary-bg border">
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
      </div>
    </div>
  );
}
