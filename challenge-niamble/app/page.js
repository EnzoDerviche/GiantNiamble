'use client'
import React, { useState, useEffect} from "react";
import BodyQuest from './components/bodyQuest';
import ListQuests from "./components/listQuests";
import { Body } from './styles/quests';

export default function Quest() {
  const [active, setActive] = useState({
    active: 'principal_quest',
    name: "Principal quest",
    description: "Meet with michael in the sewers",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis orci ullamcorper, rutrum velit sed, vestibulum ante. Donec mollis magna quam, non malesuada tortor commodo ultricies. Vestibulum et ipsum pulvinar, pulvinar tellus at, commodo felis. Donec tincidunt est vel porttitor commodo. Maecenas sit amet mauris sapien. Donec hendrerit est mi, a aliquam ligula dictum eget. Cras bibendum ligula magna, elementum fringilla ipsum condimentum tristique. Fusce accumsan mi diam. Mauris interdum enim quis justo vehicula faucibus. Vestibulum ac volutpat urna, egestas semper magna."
  });

  function changeData(info){
    setActive(prev => {
      return {
        active: info.id,
        name: info.name,
        description: info.description,
        data: info.data
      }
    })
  };

  return (
    <Body>
      <ListQuests active={active.active} change={changeData}/>
      <BodyQuest data={active}/>
    </Body>
  )
}


