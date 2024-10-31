import { Box, styled, Typography } from "@mui/material"

const Support = () => {
  return (
    <Wrapper>
      <Title>Support / Feedback / Requests</Title>
      <Subtitle>
        If you have questions, feedback to offer, or you’d like to make a feature request, please send us an email at <a href="#" target="_blank" rel="noopener noreferrer">contact@webbyart.com</a> or
        go to <a href="#" target="_blank" rel="noopener noreferrer">https://webbyart.com/contact</a>
      </Subtitle>
    </Wrapper>
  )
}
export default Support

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16
}))


const Title = styled(Typography)(() => ({
  fontSize: 24,
  fontWeight: 700,
  lineHeight: '26px',
  textAlign: 'left',
  color: "#21272A"
}))


const Subtitle = styled(Typography)(() => ({
  fontSize: 18,
  fontWeight: 500,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: "#21272A"
}))

