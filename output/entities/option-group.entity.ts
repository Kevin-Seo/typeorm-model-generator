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
import { OptionVary } from "./option-vary";

@Index("pk_optiongroup_id", ["id"], { unique: true })
@Index("fk_optiongroup_optionid", ["optionId"], {})
@Entity("option_group", { schema: "public" })
export class OptionGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "option_id" })
  optionId: number;

  @Column("text", { name: "ref_type" })
  refType: string;

  @Column("integer", { name: "ref_id" })
  refId: number;

  @Column("boolean", { name: "option_variable" })
  optionVariable: boolean;

  @Column("boolean", { name: "option_visible" })
  optionVisible: boolean;

  @Column("boolean", { name: "is_socket" })
  isSocket: boolean;

  @Column("enum", {
    name: "socket_part",
    nullable: true,
    enum: ["None", "Weapon", "Helm", "BodyArmor", "Sheild"],
  })
  socketPart: "None" | "Weapon" | "Helm" | "BodyArmor" | "Sheild" | null;

  @ManyToOne(() => Option, (option) => option.optionGroups, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "option_id", referencedColumnName: "id" }])
  option: Option;

  @OneToMany(() => OptionVary, (optionVary) => optionVary.optionGroup)
  optionVaries: OptionVary[];
}
