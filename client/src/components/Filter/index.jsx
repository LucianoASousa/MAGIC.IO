import React, { useState } from "react";
import Modal from "react-modal";
import { socket } from "../../services/io.js";
import { LegalityTypes } from "../../utils/types.js";
import {Container} from "./style.js";

Modal.setAppElement("#root");

function Filter({isOpen, onRequestClose}) {

    const SORCERY = [LegalityTypes.SORCERY, LegalityTypes.SNOWSORCERY, LegalityTypes.LEGENDARYSORCERY];
    const CREATURE = [LegalityTypes.CREATURE, LegalityTypes.SNOWCREATURE, LegalityTypes.ARTIFACTCREATURE];
    const LEGENDARYCREATURE = [
        LegalityTypes.LEGENDARYCREATURE, LegalityTypes.LEGENDARYSNOWCREATURE, 
        LegalityTypes.LEGENDARYARTIFACTCREATURE, LegalityTypes.LEGENDARYENCHANTMENTCREATURE
    ];

  function handleSubmit(event) {
    event.preventDefault();

  const formData = new FormData(event.target);
  const allowedTypes = formData.getAll("type");
  const otherTypes = formData.getAll("types");
  const allowedFormats = formData.getAll("format");

  if(otherTypes.length > 0){
    otherTypes.forEach((type)=>{
     allowedTypes.push(...type.split(","))
    });
  }
  
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
                    <input type="checkbox" name="types" 
                    value={SORCERY} />
                    Sorcery
                </label>
                <label>
                    <input type="checkbox" name="type" 
                    value={LegalityTypes.INSTANT} />
                    Instant
                </label>
                <label>
                    <input type="checkbox" name="types" 
                    value={CREATURE} />
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
                    <input type="checkbox" name="types" 
                    value={LEGENDARYCREATURE} />
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