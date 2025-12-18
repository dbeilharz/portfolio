// Images
import aliceCustomerPage from "/src/images/projects/alice/customer-page.webp";
import aliceCustomerPageMobile from "/src/images/projects/alice/customer-page-mobile.webp";
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
    linkTo: "",
    image: aliceCustomerPage,
    imageMobile: aliceCustomerPageMobile,
    imageDescription: "ALICE Customer Page",
  },
  {
    name: "Online Tools",
    skills: ["React", "Vite", "Product Design", "QA"],
    linkTo: "",
    image: tradeinValuation,
    imageMobile: tradeinValuationMobile,
    imageDescription: "Trade-In Valuation Widget",
  },
  {
    name: "Stock Locator",
    skills: ["PHP", "JS", "MySQL", "API"],
    linkTo: "",
    image: stockResults,
    imageMobile: stockResultsMobile,
    imageDescription: "Stock results page",
  },
  {
    name: "WordPress Widgets",
    skills: ["PHP", "JS", "API"],
    linkTo: "",
    image: contactForm,
    imageMobile: contactFormMobile,
    imageDescription: "WordPress Banner Plugin",
  },
];
