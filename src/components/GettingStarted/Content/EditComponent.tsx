import { Box, styled, Typography } from "@mui/material"

const EditComponent = () => {
  return (
    <Wrapper>
      <img src="/img-4.png" alt="img" style={{ objectFit: 'contain' }} />
      <TextWrapper>
        <Title>Edit Components</Title>
        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Text>
            To make it easier for you to customize the wireframe we have created as many options as possible for most components. Just select the component you wish to edit and check on the right sidebar of Figma if the component has any options.
          </Text>
          <Text>
            To make it less restrictive for you, we have not added any options to the bigger sections used in templates, but the components contained within them may have options.
          </Text>
        </Box>
      </TextWrapper>
    </Wrapper>
  )
}
export default EditComponent

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  gap: 48,
}))

const TextWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16
}))

const Title = styled(Typography)(() => ({
  fontSize: 24,
  fontWeight: 700,
  lineHeight: '26.4px',
  textAlign: 'left',
  color: '#0F172A'
}))

const Text = styled(Typography)(() => ({
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: '#0F172A'
}))
