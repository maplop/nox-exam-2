import { Box, styled, Typography } from "@mui/material"
import { socialNetwork } from "../../../data/socialNetwork"
import SocialNetworkItem from "./SocialNetworkItem"

const SocialNetwork = () => {
  return (
    <Wrapper>
      <Text>Follow for more</Text>
      <IconsWrapper>
        {socialNetwork.map((social) => (
          <SocialNetworkItem key={social.name} socialNetwork={social} />
        ))}
      </IconsWrapper>
    </Wrapper>
  )
}
export default SocialNetwork

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 24,

  [theme.breakpoints.down('xl')]: {
    gap: 16,
  }
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: '#0F172A',

  [theme.breakpoints.down('xl')]: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '18.8px',
  }
}))

const IconsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 24,

  [theme.breakpoints.down('xl')]: {
    gap: 16,
  }
}))


