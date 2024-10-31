import { Paper, styled, Box, Typography, Divider } from "@mui/material"
import { Post } from "../../api/getPost"

interface PostItemProps {
  post: Post
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Wrapper elevation={2}>
      <Box sx={{ display: 'flex', justifyContent: 'start' }}>
        <PostIdWrapper>
          <Typography sx={{ fontSize: 18, fontWeight: 400, lineHeight: '24px', color: '#0F172A' }}>
            {post.id}
          </Typography>
        </PostIdWrapper>
      </Box>
      <Title>{post.title}</Title>
      <Divider sx={{ my: 1 }} />
      <Text>{post.body}</Text>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <UserIdWrapper>
          <Typography sx={{
            fontSize: 12, fontWeight: 500, lineHeight: '14px', color: '#0F172A'
          }}>
            user id: {post.userId}
          </Typography>
        </UserIdWrapper>
      </Box>
    </Wrapper >
  )
}
export default PostItem

const Wrapper = styled(Paper)(() => ({
  padding: 18,
}))

const PostIdWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  borderRadius: 4,
  backgroundColor: '#cccccc'
}))

const Title = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '22px',
  textAlign: 'left',
  color: "#0F172A",
  marginTop: 16
}))

const Text = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '18px',
  textAlign: 'left',
  color: "#0F172A",
  marginTop: 16
}))

const UserIdWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 4px',
  backgroundColor: '#FFC700',
  borderRadius: 4
}))
