export type ExperienceItemProps = {
  date: string;
  position: string;
  company: string;
  href?: string;
};

export default function ExperienceItem({
  date,
  position,
  company,
  href,
}: ExperienceItemProps) {
  return (
    <div className="border-b border-dashed pb-5">
      <p className="text-sm lg:text-base">{date}</p>
      <div className="text-lg lg:text-xl">
        {position}{" "}
        <span className="block lg:inline">
          @{" "}
          {href ? (
            <a
              className="underline"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {company}
            </a>
          ) : (
            company
          )}
        </span>
      </div>
    </div>
  );
}
