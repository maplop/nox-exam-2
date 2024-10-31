import { Box, styled, Typography } from "@mui/material"
import PostList from "./PostList"
import { PostProps } from "../../../../data/pluginsPostData"

interface PostSectionProps {
  sectionTitle: string,
  postList: PostProps[]
}

const PostSection = ({ sectionTitle, postList }: PostSectionProps) => {
  return (
    <Wrapper>
      <Title>{sectionTitle}</Title>
      <PostList postList={postList} />
    </Wrapper>
  )
}
export default PostSection

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 48,
}))

const Title = styled(Typography)(() => ({
  fontSize: 24,
  fontWeight: 700,
  lineHeight: '26.4px',
  textAlign: 'left',
  color: '#21272A'
}))
