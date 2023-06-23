import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import axios from "axios";
import {Modal, Typography} from "@mui/material";
import {ModalBox} from "../templates/NewEventModal.styles";
import BasicSnackBar from "../atoms/BasicSnackBar";

const AbuseReportModal = ({open, onClose, item}) => {
    const problemTypes = [
        {
            name: "OFFENSIVE_CONTENT",
            description : "Obraźliwa zawartość"
        },
        {
            name: "VULGARISMS",
            description : "Wulgaryzmy"
        },
        {
            name: "HATRED",
            description : "Propagowanie nienawiści"
        },
        {
            name: "WRONG_INFO",
            description : "Nieprawdziwe informacje"
        },
        {
            name: "SPAM",
            description : "Spam"
        },
        {
            name: "OTHER",
            description : "Inny"
        },
    ]

    const [value, setValue] = useState('');

    const [openInfo, setOpenInfo] = useState(false);
    const [info, setInfo] = useState('');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    }

    const handleCloseInfo = () =>  setOpenInfo(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        console.log(item.id + ", " + data.get('problem-types'))
        axios.post(`http://localhost:8080/api/abuse-reports/`, {
            itemId: item.id,
            itemType: (item.topicId) ? "COMMENT" : "TOPIC",
            problemType: data.get('problem-types'),
            })
            .then((response) => {
                onClose();
                setInfo(response.data);
                setOpenInfo(true);
            })
            .catch(error => {
                onClose();
                setInfo(error.response.data);
                setOpenInfo(true);
            })
    }


    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
            >
                <ModalBox>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 3 }} variant="standard">
                            <FormLabel id="problem-types">
                                <Typography variant="h6">Jaki problem chcesz zgłosić? </Typography>
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="problem-types"
                                name="problem-types"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                {problemTypes.map( (problem) => (
                                    <FormControlLabel key={problem.name} value={problem.name} control={<Radio />} label={problem.description} />
                                ))}
                            </RadioGroup>
                            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                                Wyślij zgłoszenie
                            </Button>
                        </FormControl>
                    </form>
                </ModalBox>
            </Modal>
            <BasicSnackBar
                open={openInfo}
                handleClose={handleCloseInfo}
                message={info}
                autoHideDuration={5000}
            >
            </BasicSnackBar>
        </>
    );
};

export default AbuseReportModal;