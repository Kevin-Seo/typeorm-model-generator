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
import { WtsItem } from "./wts-item";
import { WtsOptionVary } from "./wts-option-vary";

@Index("pk_wtsoptiongroup_id", ["id"], { unique: true })
@Index("fk_wtsoptiongroup_optinoid", ["optionId"], {})
@Index("fk_wtsoptiongroup_wtsitemid", ["wtsItemId"], {})
@Entity("wts_option_group", { schema: "public" })
export class WtsOptionGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "wts_item_id" })
  wtsItemId: number;

  @Column("integer", { name: "option_id" })
  optionId: number;

  @Column("boolean", { name: "option_variable" })
  optionVariable: boolean;

  @Column("boolean", { name: "option_visible" })
  optionVisible: boolean;

  @ManyToOne(() => Option, (option) => option.wtsOptionGroups, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "option_id", referencedColumnName: "id" }])
  option: Option;

  @ManyToOne(() => WtsItem, (wtsItem) => wtsItem.wtsOptionGroups, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wts_item_id", referencedColumnName: "id" }])
  wtsItem: WtsItem;

  @OneToMany(
    () => WtsOptionVary,
    (wtsOptionVary) => wtsOptionVary.wtsOptionGroup
  )
  wtsOptionVaries: WtsOptionVary[];
}
