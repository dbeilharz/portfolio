// Components
import Wrapper from "@/layout/layout";
import Heading from "@/components/ui/heading";
import ExperienceItem from "./experienceItem";
import { experienceList } from "./experienceList";

export default function HomeExperience() {
  return (
    <Wrapper bgClassName="bg-secondary-bg">
      <Heading as="h2">Professional Experience</Heading>
      <div className="flex flex-col gap-5 align-middle">
        {experienceList.map((item) => (
          <ExperienceItem key={`${item.company}-${item.date}`} {...item} />
        ))}
      </div>
    </Wrapper>
  );
}
