"use client";
import Image from "next/image";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './progres.module.css';
import { Div, Head, IconSkill, ContainerImage, Level } from "../styles/skills";

export default function BoxSkills({title, icon, numberLevel, progressLevel, nextLevel, points}) {
  return (
    <Div>
     <Head>
        <h1>{title}</h1>
        <h3>level</h3>
     </Head>
     <IconSkill>
        <ContainerImage>
            <Image priority src={icon} height={140} alt="button view skill" />
        </ContainerImage>
     </IconSkill>
     <Level>
        <p>level</p>
        <p>{numberLevel}</p>
     </Level>
     <Level>
        <p>level progress</p>
        <p>{progressLevel}</p>
     </Level>
     <Level>
        <p>next level</p>
        <p>{nextLevel}</p>
     </Level>
     <Level height="6%">
        <Box sx={{ width: '100%' }}>
            <LinearProgress className={styles.progress} color="inherit" variant="determinate" value={(progressLevel * 100) / nextLevel} />
        </Box>
     </Level>
     <Level height="9%">
        <h4>SKILL POINTS</h4>
        <h4>{points}</h4>
     </Level>
    </Div>
  );
}
