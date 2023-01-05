import { Container } from "./style";
import { useEffect, useState } from "react";
import { socket } from "../../services/io";

export function Users() {

    const [user1, setUser1] = useState("");
    const [user2, setUser2] = useState("");

    useEffect(() => {
        socket.on('update_users', ([user1,user2]) => {
            setUser1(user1);
            setUser2(user2);
        });
    }, [socket, user1, user2]);

    return(
        <Container>
            <span className="user1">{user1}</span>
            <span className="user2">{user2}</span>
        </Container>
    );
};