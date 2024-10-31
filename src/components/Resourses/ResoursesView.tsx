import { Box, styled } from "@mui/material"
import SectionHeader from "../common/SectionHeader"
import ResoursesContent from "./Content/ResoursesContent"

const ResoursesView = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="Resources"
        subtitle="We gathered some tutorials, guides, and plugins, to help you learn more about Figma and achieve more from your projects."
      />
      <ResoursesContent />
    </Wrapper>
  )
}
export default ResoursesView

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  height: '100%',
  padding: 48,
  backgroundColor: '#0F172A'
}))

