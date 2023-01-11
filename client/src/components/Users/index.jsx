import { Container, ButtonFilter } from "./style";
import { useEffect, useState } from "react";
import { socket } from "../../services/io";

export function Users({OpenFilter}) {

    const [user1, setUser1] = useState("");
    const [user2, setUser2] = useState("");
    const [host, setHost] = useState(false);

    useEffect(() => {
        socket.on('update_users', ([user1,user2]) => {
            setUser1(user1);
            setUser2(user2);
        });
        socket.on('host', (host) => {
            setHost(host);
        });
    }, [socket, user1, user2]);

    return(
        <Container>
            <span className="user1">{user1}</span>
            {host ? <ButtonFilter onClick={OpenFilter}></ButtonFilter> : null}
            <span className="user2">{user2}</span>
        </Container>
    );
};