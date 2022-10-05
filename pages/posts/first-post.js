import Link from "next/link"
import Head from "next/head"
// import Script from "next/script"
import Layout from "../../components/layout"

export default function FirstPost(){
    return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

    <h1>First post</h1>

    <Link href="/">
    <a className="return_home" target="_blank" rel="noopener noreferrer">
        Return to home
      </a>
    </Link>
     </Layout>
    )
}