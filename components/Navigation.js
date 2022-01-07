import * as navigationStyle from '../styles/Navigation.module.css'
import Link from 'next/link';



export default function Navigation({path, styles}){


    return(
    <nav className={navigationStyle.nav} style={{ margin : styles.margin}}>
<ul>
    { path != "/" && <li><Link href="/">Home</Link></li>}
    { path != "/about" && <li><Link href="/about">About</Link></li>}
    { path != "/projects" && <li><Link href="/projects">Projects</Link></li>}
    { path != "/blog" && <li><Link href="/blog">Blog</Link></li>}
    { path != "/develop" && <li><Link href="/develop">Develop</Link></li>}
    
</ul>
    </nav>)
}