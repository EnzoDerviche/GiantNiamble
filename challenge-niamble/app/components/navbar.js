"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';
import { Nav, Ul, Li, BtnNav, Letter } from "../styles/navbar";
import styles from './actives.module.css';

const links = [
  {
    label: "Map",
    route: "",
    targetSegment: "map"
  },
  {
    label: "Quests",
    route: "/",
    targetSegment: null
  },
  {
    label: "Intentory",
    route: "",
    targetSegment: "intentory"
  },
  {
    label: "Blueprint",
    route: "",
    targetSegment: "blueprint"
  },
  {
    label: "Skills",
    route: "/skills",
    targetSegment: "skills"
  },
];


export default function Navbar() {
const activeSegment = useSelectedLayoutSegment()

  return (
    <Nav>
        <BtnNav><Letter>Q</Letter></BtnNav>
      <Ul>
        {links.map(({ label, route, targetSegment}) => (
          <Li className={activeSegment === targetSegment ? styles.activeNav : ''} key={label}>
            <Link href={route}>{label}</Link>
          </Li>
        ))}
      </Ul>
      <BtnNav><Letter>E</Letter></BtnNav>
    </Nav>
  );
}
