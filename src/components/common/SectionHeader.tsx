import { Box, styled, Typography } from "@mui/material"

interface SectionHeaderProps {
  title: string,
  subtitle: string
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <Wrapper>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Wrapper>
  )
}
export default SectionHeader


const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16
}))

const Title = styled(Typography)(() => ({
  fontSize: 40,
  fontWeight: 700,
  lineHeight: '44px',
  textAlign: 'left',
  color: "#FFF"
}))


const Subtitle = styled(Typography)(() => ({
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: "#FFF"
}))

