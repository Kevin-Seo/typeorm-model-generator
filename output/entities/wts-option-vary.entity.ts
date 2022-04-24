import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { WtsOptionGroup } from "./wts-option-group";

@Index("pk_wtsoptionvary_id", ["id"], { unique: true })
@Index("fk_wtsoptionvary_wtsoptiongroupid", ["wtsOptionGroupId"], {})
@Entity("wts_option_vary", { schema: "public" })
export class WtsOptionVary {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "wts_option_group_id" })
  wtsOptionGroupId: number;

  @Column("smallint", { name: "option_order" })
  optionOrder: number;

  @Column("double precision", { name: "min", precision: 53 })
  min: number;

  @Column("double precision", { name: "max", precision: 53 })
  max: number;

  @ManyToOne(
    () => WtsOptionGroup,
    (wtsOptionGroup) => wtsOptionGroup.wtsOptionVaries,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "wts_option_group_id", referencedColumnName: "id" }])
  wtsOptionGroup: WtsOptionGroup;
}
