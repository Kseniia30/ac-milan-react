import { BsInstagram, BsTelegram, BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export const contactsInfo = [
    { href: "https://t.me/milan_fc", svg: <BsTelegram style={{ width: "40px", height: "40px" }} /> },
    { href: "https://www.facebook.com/ACMilan/", svg: <BsFacebook style={{width: "40px", height: "40px"}}/> },
    { href: "https://twitter.com/acmilan", svg: <AiFillTwitterCircle style={{width: "40px", height: "40px"}}/> },
    { href: "https://www.instagram.com/acmilan/", svg: <BsInstagram style={{width: "40px", height: "40px"}}/> },
    { href: "https://www.youtube.com/c/ACMilan", svg: <BsYoutube style={{width: "40px", height: "40px"}}/> },
]
