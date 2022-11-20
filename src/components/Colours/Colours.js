import { badgesArray } from "../../info/coloursInfo"
import { nanoid } from "nanoid"
import { MainPageBox } from "components/MainPageBox.js/MainPageBox"

const Colours = () => {
    return (
        <MainPageBox>
            <p>Red and black are the colours which have represented the club throughout its entire history. They were chosen to represent the players' fiery ardor (red) and the opponents' fear to challenge the team (black). Rossoneri, the team's widely used nickname, literally means "the red & blacks" in Italian, in reference to the colours of the stripes on its jersey. Another nickname derived from the club's colours is the Devil. An image of a red devil was used as Milan's logo at one point with a Golden Star for Sport Excellence located next to it. As is customary in Italian football, the star above the logo was awarded to the club after winning 10 league titles, in 1979. For many years, Milan's badge was simply the Flag of Milan, which was originally the flag of Saint Ambrose. The modern badge used today represents the club colours and the flag of the Comune di Milano, with the acronym ACM at the top and the foundation year (1899) at the bottom. White shorts and black socks are usually worn as part of the home strip. Milan's away strip has always been completely white. It is considered by both the fans and the club to be a lucky strip in Champions League finals, due to the fact that Milan has won six finals out of eight in an all white strip (losing only to Ajax in 1995 and Liverpool in 2005), and only won one out of three in the home strip. The third strip, which is rarely used, changes yearly, being mostly black with red trimmings in recent seasons. "I can't think of many shirts out there that are as recognisable as Milan's. – Our kits go beyond just the sphere of football." — In an interview with SoccerBible, Milan player Gianluca Lapadula complimented the iconic design of Rossoneri</p>
            <ul style={{listStyle: "none", display: "flex"}}>
                {badgesArray.map(badge => {
                    const { src, alt, note } = badge
                    return (<li key={nanoid()}>
                        <img src={src} alt={alt} />
                        <p>{note}</p>
                    </li>)
                })}
            </ul>
        </MainPageBox>
    )
}

export default Colours