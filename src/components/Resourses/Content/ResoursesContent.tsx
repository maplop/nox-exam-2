import { Box, styled, Typography } from "@mui/material"
import CallToAction from "../../common/CallToAction"
import PostSection from "./Post/PostSection"
import { tutorialPostData } from "../../../data/tutorialPostData"
import { pluginsPostData } from "../../../data/pluginsPostData"


const ResoursesContent = () => {
  return (
    <Wrapper>
      <CallToAction />
      <PostSection sectionTitle="Tutorials & Guides" postList={tutorialPostData} />
      <PostSection sectionTitle="Recommended Plugins" postList={pluginsPostData} />
      <Text>
        P.S.: Do not limit yourself to these resources and for whatever Figma-related questions you have go to your favorite search engine to find a huge variety of resources, tips, and guidelines created by the Figma Community.
      </Text>
    </Wrapper>
  )
}
export default ResoursesContent

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 80,
  padding: 48,
  borderRadius: 12,
  backgroundColor: '#FFF'
}))

const Text = styled(Typography)(() => ({
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: '#0F172A'

}))