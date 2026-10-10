// Components
import Wrapper from "@/layout/layout";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";

export default function HomeIntroduction() {
  return (
    <Wrapper>
      <Heading>Hello, my name is Daniel</Heading>
      <div className="flex w-full flex-col gap-6 text-lg lg:gap-12 lg:text-xl">
        <p>
          I'm an experienced Full-stack Developer specialising in building
          modern, scalable web applications with React, Next.js, and Node.js. I
          have a proven track record of architecting end-to-end digital
          platforms with robust back-ends and intuitive user interfaces. Highly
          organised and detail-oriented I thrive on solving complex technical
          challenges. I focus on delivering clean, efficient code and seamless
          user experiences that improve usability and drive business outcomes.
        </p>

        <div className="flex flex-row gap-6">
          <Button variant="primary" onClick={() => console.log("Clicked!")}>
            Latest Work
          </Button>

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
