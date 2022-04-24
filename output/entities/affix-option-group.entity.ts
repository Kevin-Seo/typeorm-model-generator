import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AffixPossibleType } from "./affix-possible-type";
import { Option } from "./option";
import { AffixOptionVary } from "./affix-option-vary";

@Index("fk_affixoptiongroup_affixpossibletypeid", ["affixPossibleTypeId"], {})
@Index("pk_affixoptiongroup_id", ["id"], { unique: true })
@Index("fk_affixoptiongroup_optionid", ["optionId"], {})
@Entity("affix_option_group", { schema: "public" })
export class AffixOptionGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "option_id" })
  optionId: number;

  @Column("integer", { name: "affix_possible_type_id" })
  affixPossibleTypeId: number;

  @Column("boolean", { name: "option_variable" })
  optionVariable: boolean;

  @Column("boolean", { name: "option_visible" })
  optionVisible: boolean;

  @Column("smallint", { name: "item_lvl_min" })
  itemLvlMin: number;

  @Column("smallint", { name: "item_lvl_max" })
  itemLvlMax: number;

  @ManyToOne(
    () => AffixPossibleType,
    (affixPossibleType) => affixPossibleType.affixOptionGroups,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "affix_possible_type_id", referencedColumnName: "id" }])
  affixPossibleType: AffixPossibleType;

  @ManyToOne(() => Option, (option) => option.affixOptionGroups, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "option_id", referencedColumnName: "id" }])
  option: Option;

  @OneToMany(
    () => AffixOptionVary,
    (affixOptionVary) => affixOptionVary.affixOptionGroup
  )
  affixOptionVaries: AffixOptionVary[];
}
