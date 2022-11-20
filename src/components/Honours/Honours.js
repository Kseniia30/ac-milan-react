import { honoursList } from "../../info/honoursInfo"
import { nanoid } from "nanoid"
import {StyledTh, StyledTd} from "./Honours.styled"
import { MainPageBox } from "components/MainPageBox.js/MainPageBox"

const Honours = () => {
    return (
        <MainPageBox>
            <p>Milan is one of the most successful clubs in Italy, having won a total of 31 domestic honours, in addition international successes. Milan has earned the right to place a star on its jersey in recognition of the fact that it has won at least ten scudetti. In addition, the club is permanently allowed to display a multiple-winner badge on its shirt as it has won more than five European Cups.</p>
            <div style={{position: "relative"}}>
                <table style={{borderCollapse: "collapse"}}>
                <caption>
                    AC Milan honours
                </caption>
                <thead>
                    <tr>
                        <StyledTh>Competition</StyledTh>
                        <StyledTh>Titles</StyledTh>
                        <StyledTh>Seasons</StyledTh>
                    </tr>
                </thead>

                <tbody>
                    {honoursList.map(honour => {
                        const { competition, titles, seasons } = honour
                        return (<tr key={nanoid()}>
                            <StyledTd>{competition}</StyledTd>
                            <StyledTd>{titles}</StyledTd>
                            <StyledTd>{seasons}</StyledTd>
                        </tr>)
                    })}
                </tbody>
            </table>
            <div style={{position: "absolute", right: "30px", bottom: "10px"}}>
                <img src="https://github.com/Kseniia30/images-for-project-ac-milan/blob/main/champions-league-trophy.jpg?raw=true" alt="champions-league-trophy" width="150"/><br/>
                <img src="https://raw.githubusercontent.com/Kseniia30/images-for-project-ac-milan/main/scudetto.webp" alt="scudetto" width="150"/>
            </div>
            </div>
        </MainPageBox>
    )
}

export default Honours