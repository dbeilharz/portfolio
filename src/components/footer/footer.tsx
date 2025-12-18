// Components
import Wrapper from "../ui/wrapper";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Wrapper as="footer" bgClassName="bg-secondary-bg" className="text-center">
      <p className="font-poppins text-lg font-light lg:text-2xl">
        Hit me up if you're interested in working together
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/danielbeilharz/"
          className="btn bg-primary text-white lg:text-xl"
          target="_blank"
          rel="noreferrer"
        >
          Get in touch
        </a>
      </div>
      <p className="text-xs lg:text-sm">
        &copy; Copyright {year} Daniel Beilharz.
      </p>
    </Wrapper>
  );
}
