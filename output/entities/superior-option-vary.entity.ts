import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SuperiorOptionGroup } from "./superior-option-group";

@Index("pk_superioroptionvary_id", ["id"], { unique: true })
@Index(
  "fk_superioroptionvary_superioroptiongroupid",
  ["superiorOptionGroupId"],
  {}
)
@Entity("superior_option_vary", { schema: "public" })
export class SuperiorOptionVary {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "superior_option_group_id" })
  superiorOptionGroupId: number;

  @Column("smallint", { name: "option_order" })
  optionOrder: number;

  @Column("double precision", { name: "min", precision: 53 })
  min: number;

  @Column("double precision", { name: "max", precision: 53 })
  max: number;

  @ManyToOne(
    () => SuperiorOptionGroup,
    (superiorOptionGroup) => superiorOptionGroup.superiorOptionVaries,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "superior_option_group_id", referencedColumnName: "id" },
  ])
  superiorOptionGroup: SuperiorOptionGroup;
}
