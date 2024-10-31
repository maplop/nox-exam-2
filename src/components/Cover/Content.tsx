import { Box, styled } from "@mui/material"
import TitleSection from "./Content/TitleSection"
import SocialNetwork from "./Content/SocialNetwork"
import List from "./Content/List"
import frame from '/frame.png'

const Content = () => {
  return (
    <ContentWrapper>
      <TitleSection />
      <SocialNetwork />
      <List />
      <ImgWrapper>
        <img src={frame} alt="frame-img" />
      </ImgWrapper>
    </ContentWrapper>
  )
}
export default Content

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 75,
  left: 80,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 30,

  [theme.breakpoints.down('xl')]: {
    gap: 10
  }
}))

const ImgWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'left',

  [theme.breakpoints.down('xl')]: {
    marginTop: 12,

    img: {
      width: 150
    }
  }
}))
