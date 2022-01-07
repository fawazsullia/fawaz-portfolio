import Head from "next/head";
import Image from "next/image";
import * as homeStyle from "../styles/Home.module.css";

import Navigation from "../components/Navigation";
import { useRouter } from "next/router";
import next from "next";

export default function Home() {
  const router = useRouter();

  return (
    <div className={homeStyle.container}>
      <Head>
        <title>Fawaz Sullia - Software Developer</title>
        <meta
          name="description"
          content="Welcome to fawaz sullia's personal website."
        />
      </Head>
      <main className={homeStyle.main}>
        <h1>Hey, I'm <span>Fawaz Sullia</span></h1>
        <p className={homeStyle.p1}>I’m a <span>full-stack web developer</span> who loves everything tech.</p>
        <p className={homeStyle.p2}>I enjoy building SaaS like full-stack Web-Apps.</p>
      </main>
      <Navigation path={router.asPath} styles={{margin : "80px auto auto 31vw"}} />
    </div>
  );
}
