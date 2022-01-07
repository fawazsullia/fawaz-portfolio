import Head from 'next/head'
import Image from 'next/image'
import * as aboutStyle from '../styles/About.module.css'
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation'

export default function Home() {
  const router = useRouter();
  return (
    <div >
      <Head>
        <title>About Fawaz Sullia</title>
        <meta name="description" content="Get to know Fawaz a bit more." />
      </Head>
      <Navigation path={router.asPath} styles={{margin : "auto"}} />
    <main>
      <h1>Hello World from Next App: about js</h1>
    </main>

    </div>
  )
}
