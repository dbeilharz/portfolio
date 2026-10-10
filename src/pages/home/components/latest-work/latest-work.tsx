// Components
import Wrapper from "@/layout/layout";
import Heading from "@/components/ui/heading";
import LatestWorkItem from "./latest-work-item";

// Data
import { latestWorkData } from "@/data/latest-work";

export default function HomeLatestWork() {
  return (
    <Wrapper>
      <Heading as="h2">Latest Work</Heading>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {latestWorkData.map((item) => (
          <LatestWorkItem key={item.name} {...item} />
        ))}
      </div>
    </Wrapper>
  );
}
