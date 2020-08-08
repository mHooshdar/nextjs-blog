// * node_modules
import Link from 'next/link';
import Head from 'next/head';
// * components
import Layout from '../../components/layout';


function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to home!</a>
      </Link>
    </Layout>
  );
}

export default FirstPost;
