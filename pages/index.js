import Head from "next/head";
import styles from "../styles/404.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <Head>
        <title>404 : Page not found</title>
      </Head>
      <div className={styles.container}>
        <h1>Ooops! I'm currently working on this site.</h1>
        <p>Will be back in no time</p>
        <p>
          Meanwhile, you can checkout my{" "}
          <span>
            <a
              href="https://github.com/fawazsullia"
              rel="noreferrer"
              target="_blank"
            >
              {"Github"}
            </a>
          </span>{" "}
          and{" "}
          <span>
            <a href="https://www.linkedin.com/in/fawazsullia/" target="_blank" rel="noreferrer">
              {"LinkedIn"}
            </a>
          </span>
          . Or, my{" "}
          <span>
            <a href="https://gitconnected.com/fawazsullia/resume" target="_blank" rel="noreferrer">
              {"Resume"}
            </a>
          </span>{" "}
          here.
        </p>
      </div>
    </div>
  );
}

