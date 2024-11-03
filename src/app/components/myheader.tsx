import React from "react"

interface HeaderProps {
    img: string,
    title: string,
    description: string,
}

const MyHeader = ({img, title, description}: HeaderProps) => {
    return (
        <div style={{display: "flex", paddingBottom: 20}} >
            <img className="rounded-img" src={img} alt=""/>
            <div style={{paddingLeft: 20}}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default MyHeader;