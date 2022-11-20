import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Navigation = styled.div`
    background-image: linear-gradient(rgba(110, 25, 25, 0.9), rgba(110, 25, 25, 0.9));
    margin-right: 30px;
    text-align: center;
    padding: 35px;
    width: 200px; 
    margin-right: 30px; 
    padding-top: 40p;"
`
const NavList = styled.ul`
    text-align: left;
    color: black;
`
const MenuLink = styled(NavLink)`
    color: black;
    font-weight: bold;

    &.active {
        color: red;
        text-decoration: underline;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: blue;
    }
`

export {Navigation, NavList, MenuLink}