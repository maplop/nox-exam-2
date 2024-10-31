import { Box, styled, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { useQuery } from "@tanstack/react-query";
import { Post } from "../../api/getPost";
import { getPosts } from "../../api/getPost";
import { useState } from "react";
import PostItem from "./PostItem";

const PostsView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: posts, isLoading } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  const filteredPosts = posts?.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <Content>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Title>Posts</Title>
          <SearchInput
            size='small'
            variant="outlined"
            placeholder="Busca por título"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: '100%' }}
          />
        </Box>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 287 }}>
            <Typography sx={{ fontSize: 24, fontWeight: 700, lineHeight: '26px', color: '#0F172A' }}>Loading...</Typography>
          </Box>
        ) : (
          <Grid container spacing={"48px"}>
            {filteredPosts && filteredPosts?.length > 0 ? (
              filteredPosts?.map((post) => (
                <Grid key={post.id} size={3}>
                  <PostItem post={post} />
                </Grid>
              ))
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 287 }}>
                <Typography sx={{ fontSize: 24, fontWeight: 700, lineHeight: '26px', color: '#0F172A' }}>No se encontraron publicaciones :(</Typography>
              </Box>
            )}
          </Grid>
        )}
      </Content>
    </Wrapper>
  )
}
export default PostsView

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: 48,
  paddingTop: 84,
  backgroundColor: '#0F172A'
}))

const Content = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 48,
  padding: 48,
  borderRadius: 12,
  backgroundColor: '#FFF'
}))


const Title = styled(Typography)(() => ({
  fontSize: 40,
  fontWeight: 700,
  lineHeight: '44px',
  textAlign: 'left',
  color: "#0F172A"
}))


const SearchInput = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FFF',
    '& fieldset': {
      borderColor: '#ced4da',
    },
    '&:hover fieldset': {
      borderColor: '#80bdff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2563EB',
      borderWidth: '2px',
    },
  },
  '& .MuiInputBase-input': {
    color: '#0F172A',
  },
}));
