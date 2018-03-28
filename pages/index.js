import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/MyLayout.js'
import IndexHeader from '../components/IndexHeader.js'
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
      <div className="ersMainContainer">
        <img src="https://res.cloudinary.com/ddsihrmda/image/upload/v1522206540/ers-logo_maifpr.png" />

        <IndexHeader />
      </div>
    </Layout>

        	<style jsx>{`
            .ersMainContainer {
              position: absolute;
              top: 12%;
              left: 50%;
              width: 512px;
              height: 512px;
              margin-left: -256px; /* Half the width of the container */
            }
            .ersMainImage {
              width:100%;
              height:auto;
            }
            
                              
        `}</style>

  </div>
)