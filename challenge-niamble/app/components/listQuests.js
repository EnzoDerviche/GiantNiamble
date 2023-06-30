import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import info from "../quests.json";
import { Div, Header, List, Ul, Li } from '../styles/quests';
import styles from "./actives.module.css";

export default function ListQuests({active, change}) {
  return (
    <Div width={"32%"}>
        <Header justify={"flex-start"}>
          <h2>QUESTS</h2>
        </Header>
        <List>
            <Ul>
              {info.quests && info.quests.map((quest) => (
                active === quest.id ? 
              <Li className={styles.activeList} key={quest.id}>
                <PanoramaFishEyeIcon style={{fontSize: 'large'}}/><p>{quest.name}</p>
              </Li> : 
               <Li onClick={() => change(quest)} key={quest.id}>
               <PanoramaFishEyeIcon style={{fontSize: 'large', visibility: "hidden"}}/><p>{quest.name}</p>
             </Li>
              ))}
            </Ul>
        </List>
      </Div>
  )
}
