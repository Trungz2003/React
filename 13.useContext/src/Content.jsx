import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Content = () =>{
    const context  = useContext(ThemeContext) // Lấy useContext ra để sử dụng
    return(
        <p className={context.theme}>
            useContextlà một React Hook cho phép bạn đọc và đăng ký ngữ cảnh từ thành phần của bạn.
        </p>
    )
}