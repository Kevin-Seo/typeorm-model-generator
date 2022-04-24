import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AffixOptionGroup } from "./affix-option-group";
import { OptionGroup } from "./option-group";
import { SuperiorOptionGroup } from "./superior-option-group";
import { WtsOptionGroup } from "./wts-option-group";
import { WttOptionGroup } from "./wtt-option-group";

@Index("pk_option_id", ["id"], { unique: true })
@Entity("option", { schema: "public" })
export class Option {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "name" })
  name: string;

  @Column("smallint", { name: "count" })
  count: number;

  @OneToMany(
    () => AffixOptionGroup,
    (affixOptionGroup) => affixOptionGroup.option
  )
  affixOptionGroups: AffixOptionGroup[];

  @OneToMany(() => OptionGroup, (optionGroup) => optionGroup.option)
  optionGroups: OptionGroup[];

  @OneToMany(
    () => SuperiorOptionGroup,
    (superiorOptionGroup) => superiorOptionGroup.option
  )
  superiorOptionGroups: SuperiorOptionGroup[];

  @OneToMany(() => WtsOptionGroup, (wtsOptionGroup) => wtsOptionGroup.option)
  wtsOptionGroups: WtsOptionGroup[];

  @OneToMany(() => WttOptionGroup, (wttOptionGroup) => wttOptionGroup.option)
  wttOptionGroups: WttOptionGroup[];
}
