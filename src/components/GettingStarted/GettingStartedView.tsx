import { Box, styled } from "@mui/material"
import SectionHeader from "../common/SectionHeader"
import GettingStartedContent from "./Content/GettingStartedContent"

const GettingStartedView = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="Getting Started"
        subtitle="Welcome to our Landing Page kit, a  kit that helps designers, developers, stakeholders, and many others, to build their web projects."
      />
      <GettingStartedContent />
    </Wrapper>
  )
}
export default GettingStartedView

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  height: '100%',
  padding: 48,
  backgroundColor: '#0F172A'
}))

