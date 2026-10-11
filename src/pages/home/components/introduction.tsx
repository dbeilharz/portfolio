// Components
import Wrapper from "@/layout/layout";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";

// Data
import { introduction } from "@/data/introduction";

export default function HomeIntroduction() {
  return (
    <Wrapper>
      <Heading>Hello, my name is Daniel</Heading>
      <div className="flex w-full flex-col gap-6 text-lg lg:gap-12 lg:text-xl">
        <p>{introduction}</p>

        <div className="flex flex-row gap-6">
          <Button href="#latest-work">Latest Work</Button>

          <Button
            variant="outline"
            href="https://www.linkedin.com/in/danielbeilharz/"
            target="_blank"
            rel="noreferrer"
          >
            Connect
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
