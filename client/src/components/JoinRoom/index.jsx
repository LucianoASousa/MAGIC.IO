import { useEffect, useState } from "react";
import { Container} from "./style.js";
import { socket } from "../../services/io.js";


export function JoinRoom() {

  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  const [oldRoom, setOldRoom] = useState("")

  const handleJoinRoom = () => {
  
    if( room !== ""){
      socket.emit("leave_room", oldRoom);
      socket.emit("join_room", room, user);
      setOldRoom(room)
    };

  };

  useEffect(() => {
    socket.on("room_full", (data) => {
      alert(data);
    });
  }, []);

  return(
  <Container>
      <input type="text" 
      placeholder="Room"
      className="joinI"  
      onChange={(e) => setRoom(e.target.value)} />

      <button className="joinB" onClick={handleJoinRoom}>Enter</button>

      <input type="text"
      placeholder="User"
      className="joinI"
      onChange={(e) => setUser(e.target.value)} />
    </Container>
  )
};