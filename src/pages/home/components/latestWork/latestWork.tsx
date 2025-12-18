// Components
import Wrapper from "../../../../components/ui/wrapper";
import Heading from "../../../../components/ui/heading";
import LatestWorkItem from "./latestWorkItem";
import { latestWorkList } from "./latestWorkList";

export default function HomeLatestWork() {
  return (
    <Wrapper>
      <Heading as="h2">Latest Work</Heading>
      <div
        className="cards grid gap-8"
        style={
          { "--numcards": `${latestWorkList.length}` } as React.CSSProperties
        }
      >
        {latestWorkList.map((item, index) => (
          <LatestWorkItem key={item.name} {...item} index={index} />
        ))}
      </div>
    </Wrapper>
  );
}
