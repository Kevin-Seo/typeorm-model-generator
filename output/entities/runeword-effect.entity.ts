import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RunewordPossibleType } from "./runeword-possible-type";
import { RunewordRecipe } from "./runeword-recipe";

@Index("pk_runewordeffect_id", ["id"], { unique: true })
@Entity("runeword_effect", { schema: "public" })
export class RunewordEffect {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "patch" })
  patch: string;

  @Column("enum", {
    name: "class_only",
    enum: [
      "None",
      "Amazon",
      "Assassin",
      "Barbarian",
      "Druid",
      "Necromancer",
      "Paladin",
      "Sorceress",
    ],
  })
  classOnly:
    | "None"
    | "Amazon"
    | "Assassin"
    | "Barbarian"
    | "Druid"
    | "Necromancer"
    | "Paladin"
    | "Sorceress";

  @OneToMany(
    () => RunewordPossibleType,
    (runewordPossibleType) => runewordPossibleType.runewordEffect
  )
  runewordPossibleTypes: RunewordPossibleType[];

  @OneToMany(
    () => RunewordRecipe,
    (runewordRecipe) => runewordRecipe.runewordEffect
  )
  runewordRecipes: RunewordRecipe[];
}
