import { contactsInfo } from "info/contactInfo"
import { nanoid } from "nanoid"
import { ContactBox, ContactsTitle, ContactsLink, ContactsItem } from "./Contacts.styled"

export const Contacts = () => {
    return (<ContactBox>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsLink href="https://www.acmilan.com/en" target="_blank" rel="noreferrer" ><b>Official</b><br/><img src="https://github.com/Kseniia30/images-for-project-ac-milan/blob/main/ac-milan-logo.jpg?raw=true" alt="milan-logo" width="100" style={{borderRadius: "50%"}} /><br/><b>web-site</b></ContactsLink>
        <ul style={{ listStyle: "none" }}>
            {contactsInfo.map(info => {
                const { href, svg } = info
                return (<ContactsItem key={nanoid()}><ContactsLink href={href} target="_blank" rel="noreferrer">{svg}</ContactsLink></ContactsItem>)
            })}
        </ul>
    </ContactBox>)
}