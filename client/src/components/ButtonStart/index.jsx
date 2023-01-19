import { useEffect, useState} from "react";
import { socket } from "../../services/io.js";
import button from "../../assets/button.png";
import { Container } from "./style.js";
import verso from "../../assets/verso.png";
import { fetchCards } from "../../services/fetchs.js";
import {debounce} from "lodash";


export function ButtonStart() {


  const [numUsers, setNumUsers] = useState(0);
  const [busy, setBusy] = useState(false);
  const [card1, setCard1] = useState("");
  const [card2, setCard2] = useState("");
  const [host, setHost] = useState(false);

  async function execute(AllowedTypes, AllowedFormats) {
    
    socket.emit("busy", true)

    const card1 = await fetchCards(AllowedTypes, AllowedFormats);
    const card2 = await fetchCards(AllowedTypes, AllowedFormats);
    const image1 = card1.image_uris ? card1.image_uris.normal : card1.card_faces[0].image_uris.large;
    const image2 = card2.image_uris ? card2.image_uris.normal : card2.card_faces[0].image_uris.large;

    setCard1(image1);
    setCard2(image2);
    socket.emit("colors", card1.color_identity, card2.color_identity);
    
    socket.emit("busy", false)
  }
  
const debounceExecute = debounce(execute, 100);
  useEffect(() => {
    socket.on("numUsers", (data) => {
      setNumUsers(data);
    });
    socket.on("host", (data) => {
      setHost(data);
    });
    socket.on("start", (allowedTypes, allowedFormats) => {
      debounceExecute(allowedTypes, allowedFormats);
    });
    socket.on("busy", (data) => {
      setBusy(data);
    });
  }, []);

  if (numUsers === 2 && host) {
    if (busy) {
      return (
        <Container>
          <div id="loading">
            <img src={button} />
          </div>
        </Container>
      )
    } else {
      return (
        <Container>
          <img className="card1" src={card1 === "" ? verso : card1} />

          <button className="start" onClick={() => {socket.emit("start");}}>
            <img src={button} />
          </button>

          <img className="card2" src={card2 === "" ? verso : card2} />
        </Container>
      );
    }
  } else if (numUsers === 2 && !busy) {
    return (
      <Container>
        <img className="card1H" src={card1 === "" ? verso : card1} />
        <img className="card2H" src={card2 === "" ? verso : card2} />
      </Container>
    );
  }

  return (
    <></>
  );
}