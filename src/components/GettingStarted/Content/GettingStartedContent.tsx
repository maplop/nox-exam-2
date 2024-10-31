import { Box, styled } from "@mui/material"
import CallToAction from "../../common/CallToAction"
import Support from "./Support"
import EditComponent from "./EditComponent"
import BreakComponents from "./BreakComponents"

const GettingStartedContent = () => {
  return (
    <Wrapper>
      <CallToAction />
      <Support />
      <Box sx={{ fontSize: 24, fontWeight: 700, lineHeight: '26.4px', textAlign: 'left', color: '#0F172A' }}>Tips & Tricks</Box>
      <EditComponent />
      <BreakComponents />
    </Wrapper>
  )
}
export default GettingStartedContent

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 80,
  padding: 48,
  borderRadius: 12,
  backgroundColor: '#FFF'
}))
