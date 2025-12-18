// Components
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HomeIntroduction from "./components/introduction";
import HomeExperience from "./components/experience/experience";
import HomeLatestWork from "./components/latestWork/latestWork";

export default function Home() {
  return (
    <>
      <Header />
      <HomeIntroduction />
      <HomeExperience />
      <HomeLatestWork />
      <Footer />
    </>
  );
}
