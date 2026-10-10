// Components
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HomeIntroduction from "./components/introduction";
import HomeExperience from "./components/experience/experience";
import HomeLatestWork from "./components/latest-work/latest-work";
import MyStack from "./components/my-stack/my-stack";

export default function Home() {
  return (
    <>
      <meta
        name="description"
        content="Full-stack Developer specialising in building modern, scalable Front-end applications with React. I have strong Back-end experience with PHP and MySQL as well as product design and delivery."
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
