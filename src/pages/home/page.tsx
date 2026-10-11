// Components
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HomeIntroduction from "./components/introduction";
import HomeExperience from "./components/experience";
import HomeLatestWork from "./components/latest-work";
import MyStack from "./components/my-stack";

export default function Home() {
  return (
    <>
      <meta
        name="description"
        content=" I'm an experienced Full-stack Developer specialising in building
          modern, scalable web applications with React, Next.js, and Node.js."
      />
      <Header />
      <HomeIntroduction />
      <HomeExperience />
      <HomeLatestWork />
      <MyStack />
      <Footer />
    </>
  );
}
