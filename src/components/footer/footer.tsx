// Components
import Wrapper from "@/layout/layout";
import Button from "@/components/ui/button";

export default function Footer() {
  return (
    <Wrapper as="footer" bgClassName="bg-secondary-bg" className="text-center">
      <p className="font-poppins text-lg font-light lg:text-2xl">
        Hit me up if you're interested in working together
      </p>
      <div>
        <Button
          href="https://www.linkedin.com/in/danielbeilharz/"
          variant="primary"
          target="_blank"
          rel="noreferrer"
        >
          Get in touch
        </Button>
      </div>
      <p className="text-xs lg:text-sm">
        &copy; Copyright Daniel Beilharz. Built with React. View source code on{" "}
        <a
          className="text-primary"
          href="https://github.com/dbeilharz/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        {"."}
      </p>
    </Wrapper>
  );
}
