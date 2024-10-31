import { Box, styled, Typography } from "@mui/material"

const BreakComponents = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>Break Components - Detach Instance</Title>
        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Text>
            If you find it hard to work with some components used in your layouts and can’t achieve what you want because of that, right click on that component, then click Detach Instance.
          </Text>
        </Box>
      </TextWrapper>
      <img src="/img-5.png" alt="img" style={{ objectFit: 'contain' }} />
    </Wrapper>
  )
}
export default BreakComponents

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
