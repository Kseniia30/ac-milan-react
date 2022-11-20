import {historyMenuItems, startSrcHistoryPath, historyMainContent} from "../../info/historyInfo"

import { nanoid } from "nanoid"
import { MainPageBox } from "components/MainPageBox.js/MainPageBox"

const History = () => {
    return (
        <MainPageBox>
            <ul style={{marginBottom: "20px", listStyle: "none"}}>
                {historyMenuItems.map(menuItem => {
                    const {href, text} = menuItem
                    return (<li key={nanoid()}><a href={href}>{text}</a></li>)
                })}
            </ul>
            <ul style={{listStyle: "none"}}>
                {historyMainContent.map(item => {
                    const {id, title, content, firstSrc, firtsAlt, secondSrc, secondAlt, thirdSrc, thirdAlt} = item
                    return (<li key={nanoid()} id={id}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <ul style={{listStyle: "none", display: "flex", marginTop: "10px"}}>
                            <li><img src={`${startSrcHistoryPath}${firstSrc}`} alt={firtsAlt} width="390"/></li>
                            <li><img src={`${startSrcHistoryPath}${secondSrc}`} alt={secondAlt} width="390"/></li>
                            <li><img src={`${startSrcHistoryPath}${thirdSrc}`}alt={thirdAlt} width="390"/></li>
                        </ul>
                    </li>)
                })}
            </ul>
        </MainPageBox>
    )
}

export default History