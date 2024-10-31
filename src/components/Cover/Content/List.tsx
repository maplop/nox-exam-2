import { Box, styled, Typography } from "@mui/material"
import check from '/icons/check.png'

const features = [
  "13 Landing Pages for Desktop and Mobile",
  "10+ Extra Sections",
  "100+ components and variants",
  "250+ global design styles",
]

const List = () => {
  return (
    <ListWrapper>
      {features.map((feature, index) => (
        <Item key={index}>
          <img src={check} alt="check-img" />
          <Text>{feature}</Text>
        </Item>
      ))}
    </ListWrapper>
  )
}
export default List

const ListWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  marginTop: 12,
  paddingLeft: 8,

  [theme.breakpoints.down('xl')]: {
    gap: 6,
    marginTop: 8,
    paddingLeft: 4,
  }
}))

const Item = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  [theme.breakpoints.down('xl')]: {
    gap: 6,
  }
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 400,
  lineHeight: '28.8px',
  textAlign: 'left',
  color: '#0F172A',

  [theme.breakpoints.down('xl')]: {
    fontSize: 14,
    lineHeight: '20.8px',
  }
}))
