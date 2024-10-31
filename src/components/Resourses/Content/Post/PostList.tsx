import Grid from '@mui/material/Grid2';
import { PostProps } from "../../../../data/pluginsPostData"
import PostItem from "./PostItem"


interface PostListProps {
  postList: PostProps[]
}

const PostList = ({ postList }: PostListProps) => {
  return (
    <Grid container spacing={'48px'}>
      {postList.map((post, index) => (
        <Grid key={index} size={4}>
          <PostItem post={post} />
        </Grid>
      ))}
    </Grid>
  )
}
export default PostList
