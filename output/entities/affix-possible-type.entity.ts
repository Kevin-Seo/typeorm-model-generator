import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AffixOptionGroup } from "./affix-option-group";
import { Affix } from "./affix";

@Index("fk_affixpossibletype_affixid", ["affixId"], {})
@Index("pk_affixpossibletype_id", ["id"], { unique: true })
@Entity("affix_possible_type", { schema: "public" })
export class AffixPossibleType {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "affix_id" })
  affixId: number;

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

  @Column("boolean", { name: "on_magic" })
  onMagic: boolean;

  @Column("boolean", { name: "on_rare" })
  onRare: boolean;

  @OneToMany(
    () => AffixOptionGroup,
    (affixOptionGroup) => affixOptionGroup.affixPossibleType
  )
  affixOptionGroups: AffixOptionGroup[];

  @ManyToOne(() => Affix, (affix) => affix.affixPossibleTypes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "affix_id", referencedColumnName: "id" }])
  affix: Affix;
}
