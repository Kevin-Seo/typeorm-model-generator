import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AffixOptionGroup } from "./affix-option-group";

@Index("fk_affixoptionvary_affixoptiongroupid", ["affixOptionGroupId"], {})
@Index("pk_affixoptionvary_id", ["id"], { unique: true })
@Entity("affix_option_vary", { schema: "public" })
export class AffixOptionVary {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "affix_option_group_id" })
  affixOptionGroupId: number;

  @Column("smallint", { name: "option_order" })
  optionOrder: number;

  @Column("double precision", { name: "min", precision: 53 })
  min: number;

  @Column("double precision", { name: "max", precision: 53 })
  max: number;

  @ManyToOne(
    () => AffixOptionGroup,
    (affixOptionGroup) => affixOptionGroup.affixOptionVaries,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "affix_option_group_id", referencedColumnName: "id" }])
  affixOptionGroup: AffixOptionGroup;
}
