// Components
import Wrapper from "../ui/wrapper";

// Images
import headshot from "../../images/headshot.webp";

export default function Header() {
  return (
    <Wrapper
      as="header"
      bgClassName="bg-secondary-bg"
      className="font-poppins items-center justify-between py-5 text-xl font-light lg:flex-row lg:py-9 lg:text-2xl"
    >
      <div className="flex w-full items-center">
        <div className="mr-8 max-w-21">
          <img
            src={headshot}
            className="rounded-full"
            alt="Headshot of Daniel Beilharz"
          />
        </div>
        <div className="leading-8 lg:flex lg:w-full lg:justify-between">
          <p className="text-black dark:text-white">Daniel Beilharz</p>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/danielbeilharz/"
                  className="text-primary flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get in touch <span className="text-lg">&gt;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
}
