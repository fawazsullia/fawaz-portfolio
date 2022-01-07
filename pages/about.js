import Head from "next/head";
import Image from "next/image";
import * as aboutStyle from "../styles/About.module.css";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={aboutStyle.container}>
      <Head>
        <title>About Fawaz Sullia</title>
        <meta name="description" content="Get to know Fawaz a bit more." />
      </Head>

      <Navigation path={router.asPath} styles={{ margin: "50px 0 0 0" }} />

      <main className={aboutStyle.main}>
        <p>
          Hey, I’m a full-stack developer. I love both front-end and backend,
          with a slight more inclination towards backend.
        </p>
        <p>
          I’m currently looking for a web developer role, preferably in a
          startup.
        </p>
        <div className={aboutStyle.techStack}>
          <h2>Tech I use in projects</h2>
        </div>
        <div className={aboutStyle.experience}>
        <h2>
          I do have some tech experience!
        </h2>
        <p>Wordpress Ecommerce Developer ( Woocommerce ) - Spring Yields (1.5 years)</p>
        <p className={aboutStyle.jobDesc} >Responsible for everything tech like creating and updating website, inventory, orders, payment integrations etc</p>
        <p className={aboutStyle.downloadResume}>Download my resume here</p>
        </div>
        <p>I’m a huge camping, hiking, fishing and DIY enthusiast. Consider hitting me up if that’s your jam!</p>
        <p>You can contact me via fawazsullia@gmail.com or
my LinkedIn.</p>
      </main>
    </div>
  );
}
