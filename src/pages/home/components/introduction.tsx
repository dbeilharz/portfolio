// Components
import Wrapper from "../../../components/ui/wrapper";
import Heading from "../../../components/ui/heading";

export default function HomeIntroduction() {
  return (
    <Wrapper>
      <Heading>Hello, my name is Daniel</Heading>
      <div className="p-container">
        <p>
          Full-stack Developer specialising in building modern, scalable
          Front-end applications with React. I have strong Back-end experience
          with PHP and MySQL as well as product design and delivery. I'm highly
          organised, detail-oriented, and passionate about solving complex
          problems. I focus on delivering clean, efficient code and intuitive
          user experiences that improve usability and drive business outcomes.
        </p>
        <p>
          To get in touch send me a message on{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/danielbeilharz/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          .
        </p>
      </div>
    </Wrapper>
  );
}
