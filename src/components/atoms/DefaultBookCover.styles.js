import { styled } from '@mui/material/styles';
import {Paper} from "@mui/material";
import defaultBookCover from './default-book-cover.png';


export const CoverPaper = styled(Paper)({
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${defaultBookCover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'cadetblue',
    width: '200px',
    height: '300px',
})