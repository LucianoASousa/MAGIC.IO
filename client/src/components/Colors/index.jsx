import { Container } from "./style"
import { useEffect, useState } from "react"
import {socket} from "../../services/io.js"
import { ColorsAndGuilds } from "../../utils/types"


export function Colors(){
    const [colors, setColors] = useState([]);
    const [numUsers, setNumUsers] = useState(0)
    const [host, setHost] = useState(false)
    

    useEffect(() => {
        socket.on("colors", (data) => {
            setColors(data)
        });
        socket.on("numUsers", (data) => {
            setNumUsers(data)
        });
        socket.on("host", (data) => {
            setHost(data)
        });
    }, [])

    function getGuild(colors) {
        for (const guild in ColorsAndGuilds) {
          if (ColorsAndGuilds[guild].Colors.every((c) => colors.includes(c)) 
          && ColorsAndGuilds[guild].Colors.length === colors.length) {
            return ColorsAndGuilds[guild];
          }
        }
    
        return ColorsAndGuilds.COLORLESS;
    }
    
    const guild = getGuild(colors);

    if(numUsers === 2 && host){
        return(
            <Container>
                <img className="host" src={guild.url} alt={guild.name} />
            </Container>
        )
      }
      if(numUsers === 2 && !host){
        return(
            <Container>
                <img className="notHost" src={guild.url} alt={guild.name} />
            </Container>
        )
      }
    
        return(
            <></>
        );
}