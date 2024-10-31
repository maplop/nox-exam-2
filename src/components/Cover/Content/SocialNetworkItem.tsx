import { Box, styled } from "@mui/material"
import { SocialNetworkProps } from "../../../data/socialNetwork"

interface SocialNetworkItemProps {
  socialNetwork: SocialNetworkProps
}

const SocialNetworkItem = ({ socialNetwork }: SocialNetworkItemProps) => {
  return (
    <Wrapper>
      <img src={socialNetwork.imgLink} alt={`${socialNetwork.name}-img`} />
      <Link href={socialNetwork.url} target="_blank" rel="noopener noreferrer">{socialNetwork.name}</Link>
    </Wrapper>
  )
}
export default SocialNetworkItem

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  [theme.breakpoints.down('xl')]: {
    gap: 4,
  }
}))

const Link = styled('a')(({ theme }) => ({
  fontSize: 18,
  fontEeight: 400,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: "#0F172A",

  [theme.breakpoints.down('xl')]: {
    fontSize: 14,
    fontEeight: 400,
    lineHeight: '18.8px',
  }
}))