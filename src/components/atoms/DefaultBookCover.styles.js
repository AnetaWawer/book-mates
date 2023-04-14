import { styled } from '@mui/material/styles';
import {Paper} from "@mui/material";

export const CoverPaper = styled(Paper)({
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: 'url(http://sasieczno.pl/wp-content/uploads/2022/08/20220711-09-Udorpie3-1024x768.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'navajowhite',
    width: '200px',
    height: '300px',
})