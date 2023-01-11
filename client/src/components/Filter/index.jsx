import React, { useState } from "react";
import Modal from "react-modal";
import { socket } from "../../services/io.js";
import { LegalityTypes } from "../../utils/types.js";
import {Container} from "./style.js";

Modal.setAppElement("#root");

function Filter({isOpen, onRequestClose}) {


  function handleSubmit(event) {
    event.preventDefault();

  const formData = new FormData(event.target);
  const allowedTypes = formData.getAll("type");
  onRequestClose()
  
  socket.emit("filter", allowedTypes);
  }

  return(
      <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      className="react-modal"
      overlayClassName="react-overlay"
      >
        <Container onSubmit={handleSubmit}>
          
            <label>
                <input type="checkbox" name="type" 
                value={LegalityTypes.SORCERY} />
                Sorcery
            </label>
            <label>
                <input type="checkbox" name="type" 
                value={LegalityTypes.INSTANT} />
                Instant
            </label>
            <label>
                <input type="checkbox" name="type" 
                value={LegalityTypes.CREATURE} />
                Creature
            </label>
            <label>
                <input type="checkbox" name="type" 
                value={LegalityTypes.LEGENDARYPLANESWALKER} />
                Planeswalkers
            </label>

          <button type="submit">Apply Filter</button>
        </Container>
      </Modal>
  );
}
export default Filter;