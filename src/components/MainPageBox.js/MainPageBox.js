import { MainPageDiv } from "./MainPageBox.styled"

export const MainPageBox = ({ children }) => {
    return (
        <MainPageDiv>
            {children}
        </MainPageDiv>
    )
}