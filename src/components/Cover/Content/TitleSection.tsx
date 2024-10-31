import { Box, styled, Typography } from "@mui/material"

const TitleSection = () => {
  return (
    <SectionWrapper>
      <Title>WebbyPages</Title>
      <Subtitle>
        Get inspired and build faster with our landing pages kit
      </Subtitle>
    </SectionWrapper>
  )
}
export default TitleSection

const SectionWrapper = styled(Box)(({ theme }) => ({
  width: 447,

  [theme.breakpoints.down('xl')]: {
    width: 370,
  }
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 72,
  fontWeight: 800,
  lineHeight: '79.2px',
  color: '#0F172A',
  textAlign: 'left',

  [theme.breakpoints.down('xl')]: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: '50px',
  }
}))

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 300,
  lineHeight: '51.2px',
  color: '#0F172A',
  textAlign: 'left',

  [theme.breakpoints.down('xl')]: {
    fontSize: 24,
    lineHeight: '32px',
  }
}))