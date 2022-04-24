import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { WttOptionGroup } from "./wtt-option-group";

@Index("pk_wttoptionvary_id", ["id"], { unique: true })
@Index("fk_wttoptionvary_wttoptiongroupid", ["wttOptionGroupId"], {})
@Entity("wtt_option_vary", { schema: "public" })
export class WttOptionVary {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "wtt_option_group_id" })
  wttOptionGroupId: number;

  @Column("smallint", { name: "option_order" })
  optionOrder: number;

  @Column("double precision", { name: "min", precision: 53 })
  min: number;

  @Column("double precision", { name: "max", precision: 53 })
  max: number;

  @ManyToOne(
    () => WttOptionGroup,
    (wttOptionGroup) => wttOptionGroup.wttOptionVaries,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "wtt_option_group_id", referencedColumnName: "id" }])
  wttOptionGroup: WttOptionGroup;
}
