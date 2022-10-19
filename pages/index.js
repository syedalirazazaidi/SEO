import {
  Container,
  VStack,
  Text,
  Wrap,
  WrapItem,
  Avatar,
} from '@chakra-ui/react'
import Head from 'next/head'
import { allblog } from '../Blogs/blog'

export default function Home({ posts }) {
  return (
    <Container my="50px">
      <Head>
        <title>{posts[0].title}</title>
        <meta key="og_title" property="og:title" content={posts[0].title} />
        <meta key="blog:title" property="blog:title" content={posts[0].title} />
        <meta
          key="blog:description"
          property="blog:description"
          content={posts[0].description}
        />
        <meta
          key="og_image:alt"
          property="og:image:alt"
          content={posts[0].title}
        />
        <meta key="og_image:width" property="og:image:width" content="1200" />
        <meta key="og_image:height" property="og:image:height" content="630" />
        <meta property="og:url" content="https://snipcart.com/" />
      </Head>

      <Wrap spacing="60px" my="20px">
        {posts.map((post) => (
          <WrapItem>
            <VStack
              w={['320px', '480px', '480px']}
              h="250px"
              border="1px solid"
              borderRadius="7px"
              p={[2, 5, 5]}
              bg="gray.200"
              _hover={{
                background: 'white',
                color: 'teal.500',
                cursor: 'pointer',
              }}
            >
              <Avatar src={post.image} />

              <Text fontSize="20px">{post.title.slice(0, 10)}</Text>
              <Text fontSize="15px"> {post.description}</Text>
            </VStack>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  )
}
export async function getStaticProps() {
  const res = allblog

  const posts = res

  return {
    props: {
      posts,
    },
  }
}
