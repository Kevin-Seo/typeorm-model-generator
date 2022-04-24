import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RunewordEffect } from "./runeword-effect";

@Index("pk_runewordrecipe_id", ["id", "runewordEffectId"], { unique: true })
@Index("fk_runewordrecipe_runewordeffectid", ["runewordEffectId"], {})
@Entity("runeword_recipe", { schema: "public" })
export class RunewordRecipe {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { primary: true, name: "runeword_effect_id" })
  runewordEffectId: number;

  @Column("text", { name: "rune_name" })
  runeName: string;

  @Column("smallint", { name: "recipe_order" })
  recipeOrder: number;

  @ManyToOne(
    () => RunewordEffect,
    (runewordEffect) => runewordEffect.runewordRecipes,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "runeword_effect_id", referencedColumnName: "id" }])
  runewordEffect: RunewordEffect;
}
