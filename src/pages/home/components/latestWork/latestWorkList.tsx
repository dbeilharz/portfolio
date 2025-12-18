// Images
import aliceLogin from "/src/images/projects/alice/login.webp";
import aliceLoginMobile from "/src/images/projects/alice/login-mobile.webp";
import stockResults from "/src/images/projects/stock-locator/results.webp";
import stockResultsMobile from "/src/images/projects/stock-locator/results-mobile.webp";
import tradeinValuation from "/src/images/projects/online-tools/tradein-valuation.webp";
import tradeinValuationMobile from "/src/images/projects/online-tools/tradein-valuation-mobile.webp";
import contactForm from "/src/images/projects/wp-plugins/contact-form.webp";
import contactFormMobile from "/src/images/projects/wp-plugins/contact-form-mobile.webp";

export const latestWorkList = [
  {
    name: "ALICE",
    skills: ["React", "NextJS", "AI", "Product Design", "QA"],
    linkTo: "latest-work",
    image: aliceLogin,
    imageMobile: aliceLoginMobile,
    imageDescription: "ALICE Login screen",
  },
  {
    name: "Online Tools",
    skills: ["React", "Vite", "Product Design", "QA"],
    linkTo: "latest-work",
    image: tradeinValuation,
    imageMobile: tradeinValuationMobile,
    imageDescription: "Trade-In Valuation Widget",
  },
  {
    name: "Stock Locator",
    skills: ["PHP", "JS", "MySQL", "API"],
    linkTo: "latest-work",
    image: stockResults,
    imageMobile: stockResultsMobile,
    imageDescription: "Stock results page",
  },
  {
    name: "WordPress Widgets",
    skills: ["PHP", "JS", "API"],
    linkTo: "latest-work",
    image: contactForm,
    imageMobile: contactFormMobile,
    imageDescription: "WordPress Banner Plugin",
  },
];
