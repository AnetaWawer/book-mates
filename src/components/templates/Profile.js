
import {Typography, Grid, Container, Box} from "@mui/material";

import {useNavigate} from "react-router-dom";
import {Item} from "./Footer.styles";
import {Panel} from "../Container.styles";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import ProfileModal from "./ProfileModal";


const handleEdit = () => {

};

const StyledButton = styled(Button)(({ theme }) => ({
    color:"inherit",
    fontSize:'16px'
}));



function Profile({isProfile, allBooks, readBooks, nickname, id, biogram, user} ) {
    const navigate = useNavigate();
    return (
        <Panel maxWidth={false}>
            <Container container spacing={10} >
                <Box>
                    <Typography variant="h3" component="div">
                        { isProfile ? "Cześć " + nickname  : "profil użytkownka: " + nickname}
                    </Typography>
                </Box>

                <Grid item xs={12} sm container>

                    <Grid item xs={5} md={4} lg={3}>
                        <Typography variant="h6" component="div" >
                            Ilość przeczytanych książek: {readBooks}
                        </Typography>
                        <Item variant="subtitle1"  onClick={() =>navigate("/")} >
                        </Item>
                    </Grid>
                    <Grid item xs={5} md={4} lg={3}>
                        <Typography variant="h6" component="div">
                            Ilość książek na półkach: {allBooks}
                        </Typography>
                    </Grid>
                    <Grid item xs={5} md={4} lg={3}>
                         <ProfileModal user={user} nickname={nickname} biogram={biogram}>
                         </ProfileModal>
                    </Grid>
                </Grid>
                <Box>
                    <Typography variant="h3" component="div">
                        Bio:
                    </Typography>
                    <Typography variant="h1" component="div">
                        {biogram}
                    </Typography>
                </Box>
            </Container>
        </Panel>
    );
}

export default Profile;