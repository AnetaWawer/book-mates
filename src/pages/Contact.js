import React from 'react';
import ContactForm from "../components/templates/ContactForm";
import SectionHeader from "../components/atoms/SectionHeader";
import {MainContainer} from "../components/Container.styles";

function Contact() {
    const bookHeader = "Kontakt"
    return (
        <MainContainer>
            <SectionHeader header={bookHeader}/>
            <ContactForm />
        </MainContainer>
    );
}

export default Contact;