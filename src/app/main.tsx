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
                <p>
                    Passionate and wide-ranging developers who have been on GitHub since 2019. Familiarity with multiple
                    technology stacks, including but not limited to:
                    C++, Python, Typescript, etc. I ware contributed code to several open source organizations and
                    projects, and has also hosted a number of projects on GitHub.
                </p>
                <p>
                    I am good at building systems, especially CMake, cross-platform and server backend development, and
                    has a lot of experience in desktop development.
                    He has rich experience in using GitHub Actions, GitLab pipeline, etc. Familiar with MFC, Duilib, Qt,
                    Electron, Spring, etc.
                </p>
                <p>
                    I have to mention that although I was first introduced to coding through Java in 2014, I would
                    hardly actually choose Java as my go-to language for development, ironically still
                    Heavy users of CLion. Currently, he is mainly focused on building his own cross-platform development
                    framework, SESE.
                </p>
            </div>

            <div>
                <h3>Status</h3>

                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 30}}>
                    <img style={{height: 160}} alt="status1"
                         src="https://github-readme-stats.vercel.app/api?username=SHIINASAMA&count_private=true&show_icons=true&theme=tokyonight&hide_border=true"/>
                    <img style={{height: 160}} alt="status2"
                         src="https://github-readme-stats.vercel.app/api/top-langs/?username=SHIINASAMA&hide=cmake,v,powershell&layout=compact&theme=tokyonight&hide_border=true"/>
                </div>

                <picture>
                    <source media="(prefers-color-scheme: dark)"
                            srcSet="https://raw.githubusercontent.com/shiinasama/shiinasama/output/github-snake-dark.svg"/>
                    <source media="(prefers-color-scheme: light)"
                            srcSet="https://raw.githubusercontent.com/shiinasama/shiinasama/output/github-snake.svg"/>
                    <img alt="github-snake"
                         src="https://raw.githubusercontent.com/shiinasama/shiinasama/output/github-snake.svg"/>
                </picture>
            </div>
        </div>
    );
}

export default Main;