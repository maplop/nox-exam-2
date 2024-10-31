import { Box, styled } from "@mui/material"
import { PostProps } from "../../../../data/pluginsPostData"

interface PostItemProps {
  post: PostProps
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Wrapper>
      <img src={post.img} alt="img" />
      <Content>
        <Title><a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{post.link}</a> {post.title}</Title>
        <Text>
          {post.text}
        </Text>
      </Content>
    </Wrapper>
  )
}
export default PostItem

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

}))

const Content = styled(Wrapper)(() => ({
  gap: 8,
  paddingBottom: 16,
}))

const Title = styled('a')(() => ({
  fontSize: 18,
  fontWeight: 500,
  lineHeight: '19.8px',
  textAlign: 'left',
  color: '#4F46E5'
}))

const Text = styled('a')(() => ({
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: '#0F172A'
}))


