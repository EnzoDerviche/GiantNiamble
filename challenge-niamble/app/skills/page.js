'use client'
import Image from "next/image";
import survivor from "../../img/Icon_medal.svg";
import agility from "../../img/Icon_Agility.svg";
import power from "../../img/Icon_power.svg";
import BoxSkills from "../components/boxSkills";
import { Body } from '../styles/skills';

const skills = [
  {
    title: "Survivor",
    icon: survivor,
    numberLevel: 11,
    progressLevel: 21660,
    nextLevel: 65000,
    points: 1
  },
  {
    title: "Agility",
    icon: agility,
    numberLevel: 10,
    progressLevel: 40000,
    nextLevel: 50000,
    points: 1
  },
  {
    title: "Power",
    icon: power,
    numberLevel: 11,
    progressLevel: 32500,
    nextLevel: 65000,
    points: 0
  }
];

export default function Skills() {
  return (
    <Body>
       {skills.map(({ title, icon, numberLevel, progressLevel, nextLevel, points }) => (
          <BoxSkills title={title} icon={icon} numberLevel={numberLevel} progressLevel={progressLevel} nextLevel={nextLevel} points={points}/>
        ))}
    </Body>
  )
}
