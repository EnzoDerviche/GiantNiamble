"use client";
import Image from "next/image";
import ecs from "../../img/Button_Ecs.svg";
import back from "../../img/Button_Back.svg";
import { Div, Button, Letters } from "../styles/footer";

export default function Footer() {
  return (
    <Div>
      <Button>
        <Image priority src={back} height={25} alt="button view skill" />
        <Letters>VIEW SKILL TREE</Letters>
      </Button>
      <Button>
        <Image priority src={ecs} height={25} alt="button ecs" />
        <Letters>BACK</Letters>
      </Button>
    </Div>
  );
}
