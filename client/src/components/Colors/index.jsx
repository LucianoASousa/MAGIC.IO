import { Container } from "./style"
import { useEffect, useState } from "react"
import {socket} from "../../services/io.js"


export function Colors(){
    const [colors, setColors] = useState([])

    useEffect(() => {
        socket.on("colors", (data) => {
            setColors(data)
        })
    }, [])
    
    return(
        <Container>
            <h1>{colors}</h1>
        </Container>
    )
}