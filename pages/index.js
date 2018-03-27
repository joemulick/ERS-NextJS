import Head from 'next/head'
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Button } from 'semantic-ui-react'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <div>
    <Head>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    </Head>

    <Layout>
      <h1>My Blog</h1>
      <Button>Click Here</Button>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js"/>
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
      </ul>
    </Layout>
  </div>
)