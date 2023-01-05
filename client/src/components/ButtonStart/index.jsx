import { useEffect, useState} from "react";
import { socket } from "../../services/io.js";
import button from "../../assets/button.png";
import { Container } from "./style.js";
import verso from "../../assets/verso.png";
import { fetchCards } from "../../services/fetchs.js";
import { debounce } from "lodash";


export function ButtonStart() {

  const [numUsers, setNumUsers] = useState(0);
  const [busy, setBusy] = useState(false);
  const [card1, setCard1] = useState("");
  const [card2, setCard2] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  async function execute() {
    setBusy(true);
    console.log("executando");

    const card1 = await fetchCards();
    const card2 = await fetchCards();
    if (card1 === undefined || card2 === undefined) {
      execute();
      return;
    }
    if (!card1.image_uris || !card1.colors || !card2.image_uris || !card2.colors) {
      execute();
      return;
    }
      setCard1(card1.image_uris.normal ?? card1.image_uris.large);
      setCard2(card2.image_uris.normal ?? card2.image_uris.large);
      socket.emit("colors", card1.colors ,card2.colors);

    setBusy(false);
  }
  const debouncedExecute = debounce(execute, 10)

useEffect(() => {
  socket.on("numUsers", (data) => {
    setNumUsers(data);
  });
  socket.on("all_buttons_pressed", () => {
    if(!gameStarted){
      setGameStarted(true)
      debouncedExecute()
      
    };
  });
}, []);

  const startGame = () => {
    socket.emit("button_pressed");
  };
  
  if(numUsers === 2) {
    if(busy) {
      return (
          <Container>
              <div id="loading">
                  <img src={button}/>
              </div>
          </Container>
      )    
  }else{
    return(
    <Container>
      <img className="card1" src={card1 === "" ? verso : card1} />
      <button className="start" onClick={()=>{
                    setGameStarted(false)
                    startGame()}}>
        <img src={button} />
      </button>
      <img className="card2" src={card2 === "" ? verso : card2} />
    </Container>
  );
  }
}

  return (
    <></>
  );
}