import styled from "styled-components"

const ContactBox = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 35px;
`

const ContactsTitle = styled.h1`
    margin-bottom: 10px;
    color: white;
`

const ContactsLink = styled.a`
    text-decoration: none;
    color: black;

    :focus, :hover {
        color: red;
    }
`

const ContactsItem = styled.li`
    :not(:last-child) {
        margin-bottom: 10px;
    }
    :first-child {
        margin-top: 20px;
    }
`

export {ContactBox, ContactsTitle, ContactsLink, ContactsItem}