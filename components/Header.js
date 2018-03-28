import Link from 'next/link'

const IndexHeader = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
    </div>
)

export default IndexHeader