import { Box, styled, Typography } from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CallToAction = () => {
  return (
    <Wrapper>
      < InfoOutlinedIcon sx={{ color: "#2563EB" }} />
      <Box>
        <Title>
          Open Links
        </Title>
        <Subtitle>
          Click the underlined links to open.
        </Subtitle>
      </Box>
    </Wrapper>
  )
}
export default CallToAction

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  gap: 16,
  backgroundColor: 'rgba(2, 68, 207, 0.1)',
  padding: '14px 0px 16px 16px',
  border: '2px solid #2563EB',
  borderRadius: 10
}))

const Title = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 600,
  lineHeight: '15.4px',
  textAlign: 'left',
  color: '#0F172A'
}))

const Subtitle = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '19.6px',
  textAlign: 'left',
  color: '#0F172A'
}))


