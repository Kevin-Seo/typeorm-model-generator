import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SuperiorOptionGroup } from "./superior-option-group";

@Index("pk_superior_id", ["id"], { unique: true })
@Entity("superior", { schema: "public" })
export class Superior {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("enum", {
    name: "type",
    enum: [
      "None",
      "Amulet",
      "BodyArmor",
      "BarbarianHelm",
      "Belt",
      "Boots",
      "Gloves",
      "Helm",
      "Circlet",
      "Pelt",
      "Ring",
      "ShrunkenHead",
      "Shield",
      "PaladinShield",
      "SmallCharm",
      "LargeCharm",
      "GrandCharm",
      "Jewel",
      "Axe",
      "Katar",
      "Dagger",
      "Sword",
      "Hammer",
      "Mace",
      "Club",
      "Scepter",
      "Polearm",
      "AmazonSpear",
      "Spear",
      "AmazonBow",
      "Bow",
      "Crossbow",
      "AmazonJavelin",
      "Javelin",
      "ThrowingWeapon",
      "Orb",
      "Staff",
      "Wand",
    ],
  })
  type:
    | "None"
    | "Amulet"
    | "BodyArmor"
    | "BarbarianHelm"
    | "Belt"
    | "Boots"
    | "Gloves"
    | "Helm"
    | "Circlet"
    | "Pelt"
    | "Ring"
    | "ShrunkenHead"
    | "Shield"
    | "PaladinShield"
    | "SmallCharm"
    | "LargeCharm"
    | "GrandCharm"
    | "Jewel"
    | "Axe"
    | "Katar"
    | "Dagger"
    | "Sword"
    | "Hammer"
    | "Mace"
    | "Club"
    | "Scepter"
    | "Polearm"
    | "AmazonSpear"
    | "Spear"
    | "AmazonBow"
    | "Bow"
    | "Crossbow"
    | "AmazonJavelin"
    | "Javelin"
    | "ThrowingWeapon"
    | "Orb"
    | "Staff"
    | "Wand";

  @OneToMany(
    () => SuperiorOptionGroup,
    (superiorOptionGroup) => superiorOptionGroup.superior
  )
  superiorOptionGroups: SuperiorOptionGroup[];
}
