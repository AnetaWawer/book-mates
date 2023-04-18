import { styled } from '@mui/material/styles';
import {Box, Container, Typography} from "@mui/material";

export const HeaderContainer = styled(Container)({
    position: "relative",
    marginBottom: "75px",
})

export const HeaderBox = styled(Box)({
  fontSize: "2em",
  lineHeight: 1,
  position: "relative",
  textAlign: "center",
  '&:before, &:after': {
    content:  '""',
    borderBottom: "1px solid #E0E0E0",
    position: "absolute",
    top: "30px",
    width: "25%",
    alignItems: "center",
  },
  '&:before':{
    left: "3px",
  },
  '&:after':{
    right: "3px",
  },
})

export const Header = styled(Typography)({
  fontSize: 50
})