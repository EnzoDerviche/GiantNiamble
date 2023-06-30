"use client";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Div, Header, Quest, Info, Footer, TitleQuest, SpaceFooter, InfoFooter } from "../styles/quests";

export default function BodyQuest({data}) {
  return (
    <Div width={"67%"}>
      <Header justify={"space-between"} >
        <h2>{data.name}</h2>
        <h2>STORY QUESTS</h2>
      </Header>
      <Quest>
        <Info>
            <h3>OBJETIVE . TRAKER</h3>
            <TitleQuest>
            <PanoramaFishEyeIcon style={{marginTop: "5px"}}/><h2>{data.description}</h2>
            </TitleQuest>
            <p>{data.data}</p>
        </Info>
        <Footer>
            <SpaceFooter>
              <InfoFooter>
                <p>REWARDS</p>
                <p>You wild receive</p>
                <span>20000</span>
              </InfoFooter>
              <InfoFooter>
                <p>Quest details</p>
                <p>Assigned by <span>troy</span></p>
                <p>Location <span>Old Town</span></p>
              </InfoFooter>
            </SpaceFooter>
        </Footer>
      </Quest>
    </Div>
  );
}