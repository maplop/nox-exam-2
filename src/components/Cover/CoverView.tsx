import { Box, styled } from "@mui/material"
import Content from "./Content"
import imgOne from '/img-1.png'
import imgTwo from '/img-2.png'
import imgThree from '/img-3.png'
import decoOne from '/deco-1.png'
import decoTwo from '/deco-2.png'


const CoverView = () => {
  return (
    <CoverViewWrapper>
      <Content />
      <ImgOne>
        <img src={imgOne} alt="img-1" style={{ objectFit: 'cover' }} />
      </ImgOne>
      <ImgThree>
        <img src={imgThree} alt="img-3" style={{ objectFit: 'cover' }} />
      </ImgThree>
      <ImgTwo>
        <img src={imgTwo} alt="img-2" style={{ objectFit: 'cover' }} />
      </ImgTwo>
      <DecoOne>
        <img src={decoOne} alt="deco-1" style={{ objectFit: 'cover' }} />
      </DecoOne>
      <DecoTwo>
        <img src={decoTwo} alt="deco-2" style={{ objectFit: 'cover' }} />
      </DecoTwo>
    </CoverViewWrapper>
  )
}
export default CoverView

const CoverViewWrapper = styled(Box)(() => ({
  position: 'relative',
  height: '100%',
  backgroundColor: '#EDE9FE',
  overflow: 'hidden',
}))

const ImgOne = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 38,
  right: 0,
  overflow: 'hidden',
  boxShadow: '0px 25px 50px - 12px rgba(0, 0, 0, 0.25)',

  img: {
    width: 750,
  },

  [theme.breakpoints.down('xl')]: {
    img: {
      width: 600
    }
  }
}))

const ImgTwo = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: -10,
  left: 450,
  overflow: 'hidden',
  boxShadow: '0px 25px 50px - 12px rgba(0, 0, 0, 0.25)',

  [theme.breakpoints.down('xl')]: {
    left: 'auto',
    right: 260,
    img: {
      width: 600,
      height: 350
    }
  }
}))

const ImgThree = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 75,
  overflow: 'hidden',
  boxShadow: '0px 25px 50px - 12px rgba(0, 0, 0, 0.25)',

  [theme.breakpoints.down('xl')]: {
    left: 60,
    img: {
      width: 450
    }
  }
}))

const DecoOne = styled(Box)(() => ({
  position: 'absolute',
  top: 2,
  left: 0,
  overflow: 'hidden'
}))

const DecoTwo = styled(Box)(() => ({
  position: 'absolute',
  top: 200,
  left: 500,
  overflow: 'hidden'
}))



