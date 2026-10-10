// Images
import aliceCustomerPage from "@/images/projects/alice/customer-page.webp";
import aliceCustomerPageMobile from "@/images/projects/alice/customer-page-mobile.webp";
import stockResults from "@/images/projects/stock-locator/results.webp";
import stockResultsMobile from "@/images/projects/stock-locator/results-mobile.webp";
import tradeinValuation from "@/images/projects/online-tools/tradein-valuation.webp";
import tradeinValuationMobile from "@/images/projects/online-tools/tradein-valuation-mobile.webp";
import automotiveApi from "@/images/projects/automotive-api/swagger.webp";
import automotiveApiMobile from "@/images/projects/automotive-api/swagger-mobile.webp";

export const latestWorkData = [
  {
    name: "Stock Locator",
    skills: ["React", "Next.js", "AI", "Payments", "Reverse Proxy"],
    linkTo: "",
    image: stockResults,
    imageMobile: stockResultsMobile,
    imageDescription: "Stock results page",
  },
  {
    name: "Automotive API",
    skills: ["NestJS", "Express", "Sequelize", "PostgreSQL", "Redis"],
    linkTo: "",
    image: automotiveApi,
    imageMobile: automotiveApiMobile,
    imageDescription: "Automotive API documentation",
  },
  {
    name: "ALICE",
    skills: ["React", "Next.js", "AI", "Product Design", "QA"],
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
];
