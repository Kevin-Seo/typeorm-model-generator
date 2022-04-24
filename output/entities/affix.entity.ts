import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AffixPossibleType } from "./affix-possible-type";

@Index("pk_affix_id", ["id"], { unique: true })
@Entity("affix", { schema: "public" })
export class Affix {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "name" })
  name: string;

  @Column("enum", { name: "affix_type", enum: ["None", "Prefix", "Suffix"] })
  affixType: "None" | "Prefix" | "Suffix";

  @Column("text", { name: "group1" })
  group1: string;

  @Column("text", { name: "group2" })
  group2: string;

  @OneToMany(
    () => AffixPossibleType,
    (affixPossibleType) => affixPossibleType.affix
  )
  affixPossibleTypes: AffixPossibleType[];
}
