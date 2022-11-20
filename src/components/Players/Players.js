import { startPlayersSrcPath, playersMainList, playersLoanList } from "../../info/playersInfo"
import { nanoid } from "nanoid"
import {StyledTh, StyledTd} from "./Player.styled"
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { MainPageBox } from "components/MainPageBox.js/MainPageBox";

const Players = () => {
    return (
        <MainPageBox>
            <p>As of 1 September 2022</p>
            <table style={{textAlign: "center"}}>
                <thead>
                    <tr>
                        <StyledTh>No.</StyledTh>
                        <StyledTh>Pos.</StyledTh>
                        <StyledTh>Nation</StyledTh>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Photo</StyledTh>
                        <StyledTh>Social</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {playersMainList.map(player => {
                        const {num, pos, nation, name, src, instagram, facebook } = player
                        return (<tr key={nanoid()}>
                            <StyledTd>{num}</StyledTd>
                            <StyledTd>{pos}</StyledTd>
                            <StyledTd>{nation}</StyledTd>
                            <StyledTd>{name}</StyledTd>
                            <StyledTd><img src={`${startPlayersSrcPath}${src}`} alt={name} width="300"/></StyledTd>
                            <StyledTd>
                                <ul style={{ display: "flex", listStyle: "none" }}>
                                    {instagram && (<li><a href={instagram} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}}><BsInstagram/></a></li>)}
                                    {facebook && (<li style={{marginLeft: "10px"}}><a href={facebook} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}}><BsFacebook/></a></li>)}
                                </ul>
                            </StyledTd>
                        </tr>)
                    })}
                </tbody>
            </table>
            <p>Out on loan</p>
            <table style={{textAlign: "center"}}>
                <thead>
                    <tr>
                        <StyledTh>No.</StyledTh>
                        <StyledTh>Nation.</StyledTh>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Photo</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {playersLoanList.map(player => {
                        const { pos, nation, name, src } = player
                        return (<tr key={nanoid()}>
                            <StyledTd>{pos}</StyledTd>
                            <StyledTd>{nation}</StyledTd>
                            <StyledTd>{name}</StyledTd>
                            <StyledTd><img src={`${startPlayersSrcPath}${src}`} alt={name} height="200"/></StyledTd>
                        </tr>)
                    })}
                </tbody>
            </table>
        </MainPageBox>
    )
}
export default Players