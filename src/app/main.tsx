import React from 'react'
import Badge from "@/app/components/badge";

const Main: React.FC = () => {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Badge
                    src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white"
                    href="https://t.me/shiinasama"/>
                <Badge
                    src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                    href="mailto:shiinasama2001@gmail.com"/>
                <Badge
                    src={"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"}
                    href={"https://github.com/shiinasama"}/>
                <Badge
                    src={"https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=orange"}
                    href={"https://gitlab.mikumikumi.xyz/kaoru"}/>
            </div>

            <div>
                <h3>About me</h3>
            </div>

            <img alt="github-snake"
                 src="https://raw.githubusercontent.com/shiinasama/shiinasama/output/github-snake.svg"/>
        </div>
    );
}

export default Main;