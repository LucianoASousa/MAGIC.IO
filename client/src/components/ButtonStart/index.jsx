import { useEffect, useState} from "react";
import { socket } from "../../services/io.js";
import button from "../../assets/button.png";
import { Container } from "./style.js";


export function ButtonStart() {

  const [numUsers, setNumUsers] = useState(0);

  useEffect(() => {
    socket.on("numUsers", (data) => {
      setNumUsers(data);
    });
  }, []);

  const startGame = () => {
    socket.emit("button_pressed");
  };

  if(numUsers === 2) {
    return(
      <Container>
        <button className="start" onClick={startGame}>
          <img src={button} />
        </button> 
      </Container>
    
    );
  }

  return (
    <></>
);
}