import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OptionGroup } from "./option-group";

@Index("pk_optionvary_id", ["id"], { unique: true })
@Index("fk_optionvary_optiongroupid", ["optionGroupId"], {})
@Entity("option_vary", { schema: "public" })
export class OptionVary {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "option_group_id" })
  optionGroupId: number;

  @Column("smallint", { name: "option_order" })
  optionOrder: number;

  @Column("double precision", { name: "min", precision: 53 })
  min: number;

  @Column("double precision", { name: "max", precision: 53 })
  max: number;

  @ManyToOne(() => OptionGroup, (optionGroup) => optionGroup.optionVaries, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "option_group_id", referencedColumnName: "id" }])
  optionGroup: OptionGroup;
}
