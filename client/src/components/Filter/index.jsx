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
  const allowedFormats = formData.getAll("format");
  console.log(allowedFormats);

  onRequestClose()
  
  socket.emit("filter", allowedTypes, allowedFormats);
  }

  return(
      <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      className="react-modal"
      overlayClassName="react-overlay"
      >
        <Container className="linha" onSubmit={handleSubmit}>
        
            <div className="types">
                    <h2>Types</h2>
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
                <label>
                    <input type="checkbox" name="type" 
                    value={LegalityTypes.ARTIFACT} />
                    Artifact
                </label>
                <label>
                    <input type="checkbox" name="type" 
                    value={LegalityTypes.ENCHANTMENT} />
                    Enchantment
                </label>
                <label>
                    <input type="checkbox" name="type" 
                    value={LegalityTypes.LEGENDARYCREATURE} />
                    Legendary Creature
                </label>
            </div>
            
            <div className="formats">
                    <h2>Formats</h2>
                <label>
                    <input type="radio" name="format"
                    value="standard" />
                    Standard
                </label>
                <label>
                    <input type="radio" name="format"
                    value="historic" />
                    Historic
                </label>
                <label>
                    <input type="radio" name="format"
                    value="explorer" />
                    Explorer
                </label>
            </div>
            <button type="submit">Filter</button>
        </Container>
      </Modal>
  );
}
export default Filter;