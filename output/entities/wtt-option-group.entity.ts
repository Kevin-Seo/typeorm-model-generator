import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Option } from "./option";
import { WttItem } from "./wtt-item";
import { WttOptionVary } from "./wtt-option-vary";

@Index("pk_wttoptiongroup_id", ["id"], { unique: true })
@Index("fk_wttoptiongroup_optionid", ["optionId"], {})
@Index("fk_wttoptiongroup_", ["wttItemId"], {})
@Entity("wtt_option_group", { schema: "public" })
export class WttOptionGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "wtt_item_id" })
  wttItemId: number;

  @Column("integer", { name: "option_id" })
  optionId: number;

  @Column("boolean", { name: "option_variable" })
  optionVariable: boolean;

  @Column("boolean", { name: "option_visible" })
  optionVisible: boolean;

  @ManyToOne(() => Option, (option) => option.wttOptionGroups, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "option_id", referencedColumnName: "id" }])
  option: Option;

  @ManyToOne(() => WttItem, (wttItem) => wttItem.wttOptionGroups, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wtt_item_id", referencedColumnName: "id" }])
  wttItem: WttItem;

  @OneToMany(
    () => WttOptionVary,
    (wttOptionVary) => wttOptionVary.wttOptionGroup
  )
  wttOptionVaries: WttOptionVary[];
}
