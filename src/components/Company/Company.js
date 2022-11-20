import { MainPageBox } from "components/MainPageBox.js/MainPageBox"
import {CompanyText, CompanyImgDiv, Imgsubscribe} from "./Company.styled"
const Company = () => {
    return (
        <MainPageBox>
            <div style={{display: "flex"}}>
                <div>
                    <CompanyText>On 13 April 2017 Milan became a subsidiary of Rossoneri Sport Investment Luxembourg, which acquired 99.92973% shares of AC Milan S.p.A. from Fininvest. Li Yonghong became the new chairman and Marco Fassone was confirmed as CEO. The other members of the board of directors were Roberto Cappelli, David Han Li, Lu Bo, Marco Patuano, Paolo Scaroni and Xu Renshuo.However, Li Yonghong's investment vehicle was removed as the shareholder of Rossoneri Sport Investment Luxembourg on 10 July after defaulted in a pledge to Elliott Management Corporation, which lent a large sum of money to Li in 2017 to finalise the acquisition. Other partners of Elliott were Arena Investors and Blue Skye, according to news reports.</CompanyText>
                    <CompanyText>Elliott nominated new board of directors for both Rossoneri Sport Investment Luxembourg and Milan, with Paolo Scaroni as the new chairman (Italian: presidente) of the board of Milan and interim CEO. The four previous Chinese member of the board and former CEO Marco Fassone were all dismissed.</CompanyText>
                </div>
                <CompanyImgDiv>
                    <img src="https://github.com/Kseniia30/images-for-project-ac-milan/blob/main/milan-headquarter.jpg?raw=true" alt="milan-headquarter" width="350"/>
                    <Imgsubscribe>AC Milan headquarter in Milan</Imgsubscribe>
                </CompanyImgDiv>
            </div>
            <CompanyText>According to The Football Money League published by consultants Deloitte, in the 2005–06 season, Milan was the fifth-highest earning football club in the world with an estimated revenue of €233.7 million. However, it fell to eighth in 2011–12 season, tenth in 2012–13 and twelfth in 2013–14 season. The club is also ranked as the eighth-wealthiest football club in the world by Forbes magazine as of 2014, making it the wealthiest in Italian football, just surpassing ninth-ranked Juventus by a narrow margin.</CompanyText>
            <div style={{display: "flex"}}>
                <CompanyImgDiv>
                        <img src="https://github.com/Kseniia30/images-for-project-ac-milan/blob/main/Milanello_Sports_Center_AC_Milan_(2018).jpg?raw=true" alt="Centro sportivo Milanello" width="350"/>
                        <Imgsubscribe>Entrance to the AC Milan training facility Centro sportivo Milanello</Imgsubscribe>
                </CompanyImgDiv>
                <div>
                    <CompanyText>Entrance to the AC Milan training facility Centro sportivo Milanello Emirates is the current main sponsor for Milan's shirt starting from the 2010–11 season and through to the 2019–20 season. This follows a four-year relationship with Austrian online betting company bwin.com as sponsor.</CompanyText>
                    <CompanyText>Previously, German car manufacturer Opel had sponsored Milan for 12 seasons. For most of those 12 years, "Opel" was displayed on the front of the shirt, but in the 2003–04 and the 2005–06 seasons respectively, "Meriva" and "Zafira" (two cars from the company's range) were displayed.</CompanyText>
                </div>
            </div>
            <CompanyText>The current shirts are supplied by Puma. Previously it was supplied by German sportswear manufacturer Adidas, whose deal was scheduled to run until 2023. The deal made Adidas the official manufacturer of all kits, training equipment and replica outfits. However, an early termination of the deal was announced in October 2017, effective on 30 June 2018. Prior to Adidas, the Italian sports company Lotto produced Milan's sportswear.</CompanyText>
            <CompanyText>AC Milan Group made an aggregate net loss in recent years, which was one of the largest among the Italian clubs, notably: 2005, net loss of €4.5 million (separate account); 2006, a net income of €11.9 million (mainly contributed by the sales of Andriy Shevchenko); 2007, a net loss of €32 million; 2008, a net loss of €77 million; 2009, a net loss of €19 million (the decreased net loss was mainly contributed by the sales of Kaká); 2010, a net loss of €65 million; in 2011, a net loss of €67.334 million, in 2012, a net loss of €6.857 million (contributed by the sales of Thiago Silva and Zlatan Ibrahimović), and in 2013, a net loss of €15.7 million (with some contribution by the sales of Kevin-Prince Boateng and Alexandre Pato and other players, as well as decrease in wage bill.)</CompanyText>
            <div style={{ display: "flex" }}>
                <CompanyText>As a consequence of the aggregate 2.5-year financial result in the reporting periods ending at 31 December 2015, 31 December 2016 and 30 June 2017 (a FFP-adjusted net loss of €146 million, €121 million in excess of the acceptable deviation in the regulation, Milan was initially banned from European competitions due to breach in UEFA Financial Fair Play Regulations. However, the European ban was lifted by an appeal to the Court of Arbitration for Sport.Milan was allowed to achieve the break even condition on or before 30 June 2021.</CompanyText>
                <CompanyImgDiv>
                    <img src="https://github.com/Kseniia30/images-for-project-ac-milan/blob/main/Vetrina-CasaMilan.png?raw=true" alt="Vetrina-Casa" width="350"/>
                </CompanyImgDiv>
            </div>
        </MainPageBox>
    )
}

export default Company