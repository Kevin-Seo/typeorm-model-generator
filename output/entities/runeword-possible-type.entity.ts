import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RunewordEffect } from "./runeword-effect";

@Index("pk_runewordpossibletype_id", ["id"], { unique: true })
@Index("fk_runewordpossibletype_runewordeffectid", ["runewordEffectId"], {})
@Entity("runeword_possible_type", { schema: "public" })
export class RunewordPossibleType {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "runeword_effect_id" })
  runewordEffectId: number;

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

  @ManyToOne(
    () => RunewordEffect,
    (runewordEffect) => runewordEffect.runewordPossibleTypes,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "runeword_effect_id", referencedColumnName: "id" }])
  runewordEffect: RunewordEffect;
}
