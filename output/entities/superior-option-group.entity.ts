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
import { Superior } from "./superior";
import { SuperiorOptionVary } from "./superior-option-vary";

@Index("pk_superioroptiongroup_id", ["id"], { unique: true })
@Index("fk_superioroptiongroup_optionid", ["optionId"], {})
@Index("fk_superioroptiongroup_superiorid", ["superiorId"], {})
@Entity("superior_option_group", { schema: "public" })
export class SuperiorOptionGroup {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "superior_id" })
  superiorId: number;

  @Column("integer", { name: "option_id" })
  optionId: number;

  @Column("boolean", { name: "option_variable" })
  optionVariable: boolean;

  @Column("boolean", { name: "option_visible" })
  optionVisible: boolean;

  @ManyToOne(() => Option, (option) => option.superiorOptionGroups, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "option_id", referencedColumnName: "id" }])
  option: Option;

  @ManyToOne(() => Superior, (superior) => superior.superiorOptionGroups, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "superior_id", referencedColumnName: "id" }])
  superior: Superior;

  @OneToMany(
    () => SuperiorOptionVary,
    (superiorOptionVary) => superiorOptionVary.superiorOptionGroup
  )
  superiorOptionVaries: SuperiorOptionVary[];
}
