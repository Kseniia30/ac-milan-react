import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import { Contacts } from "components/Contacts/Contacts";

import { Navigation, NavList, MenuLink } from "./HomePage.styled";

const HomePage = () => {
    return (
        <div style={{display: "flex"}}>
            <Navigation>
                <NavList>
                    <li>
                        <MenuLink to="/" end>Home</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/history">History</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/colours">Colours and badge</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/honours">Honours</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/players">Players</MenuLink>
                    </li>
                    <li>
                        <MenuLink to="/company">AC Milan as a company</MenuLink>
                    </li>
                </NavList>
                <Contacts/>
            </Navigation>
            <Suspense>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default HomePage