import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { WtsPost } from "./wts-post";
import { WtsOptionGroup } from "./wts-option-group";

@Index("pk_wtsitem_id", ["id"], { unique: true })
@Index("fk_wtsitem_wtspostid", ["wtsPostId"], {})
@Entity("wts_item", { schema: "public" })
export class WtsItem {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "wts_post_id" })
  wtsPostId: number;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "image" })
  image: string;

  @Column("text", { name: "type" })
  type: string;

  @Column("enum", {
    name: "grade_base",
    enum: ["None", "Normal", "Exceptional", "Elite"],
  })
  gradeBase: "None" | "Normal" | "Exceptional" | "Elite";

  @Column("enum", {
    name: "grade_color",
    enum: [
      "None",
      "Base",
      "Magic",
      "Rare",
      "Unique",
      "Runeword",
      "Set",
      "Craft",
    ],
  })
  gradeColor:
    | "None"
    | "Base"
    | "Magic"
    | "Rare"
    | "Unique"
    | "Runeword"
    | "Set"
    | "Craft";

  @Column("smallint", { name: "size_w" })
  sizeW: number;

  @Column("smallint", { name: "size_h" })
  sizeH: number;

  @Column("enum", {
    name: "equip_part",
    enum: [
      "None",
      "WeaponSheild",
      "Head",
      "Body",
      "Hands",
      "Waist",
      "Foots",
      "Neck",
      "Finger",
      "Inventory",
      "Socket",
    ],
  })
  equipPart:
    | "None"
    | "WeaponSheild"
    | "Head"
    | "Body"
    | "Hands"
    | "Waist"
    | "Foots"
    | "Neck"
    | "Finger"
    | "Inventory"
    | "Socket";

  @Column("boolean", { name: "is_ethereal" })
  isEthereal: boolean;

  @Column("boolean", { name: "is_superior" })
  isSuperior: boolean;

  @Column("boolean", { name: "is_unidentified" })
  isUnidentified: boolean;

  @Column("smallint", { name: "req_str" })
  reqStr: number;

  @Column("smallint", { name: "req_dex" })
  reqDex: number;

  @Column("smallint", { name: "req_lvl" })
  reqLvl: number;

  @Column("smallint", { name: "def_min", nullable: true })
  defMin?: number | null;

  @Column("smallint", { name: "def_max", nullable: true })
  defMax?: number | null;

  @Column("smallint", { name: "oneh_min", nullable: true })
  onehMin?: number | null;

  @Column("smallint", { name: "oneh_max", nullable: true })
  onehMax?: number | null;

  @Column("smallint", { name: "twoh_min", nullable: true })
  twohMin?: number | null;

  @Column("smallint", { name: "twoh_max", nullable: true })
  twohMax?: number | null;

  @Column("smallint", { name: "throw_min", nullable: true })
  throwMin?: number | null;

  @Column("smallint", { name: "throw_max", nullable: true })
  throwMax?: number | null;

  @Column("smallint", { name: "pal_smite_min", nullable: true })
  palSmiteMin?: number | null;

  @Column("smallint", { name: "pal_smite_max", nullable: true })
  palSmiteMax?: number | null;

  @Column("smallint", { name: "ass_kick_min", nullable: true })
  assKickMin?: number | null;

  @Column("smallint", { name: "ass_kick_max", nullable: true })
  assKickMax?: number | null;

  @Column("smallint", { name: "attack_speed", nullable: true })
  attackSpeed?: number | null;

  @Column("smallint", { name: "attack_range", nullable: true })
  attackRange?: number | null;

  @Column("smallint", { name: "block_rate", nullable: true })
  blockRate?: number | null;

  @Column("smallint", { name: "durability", nullable: true })
  durability?: number | null;

  @Column("smallint", { name: "stack", nullable: true })
  stack?: number | null;

  @Column("smallint", { name: "belt_box", nullable: true })
  beltBox?: number | null;

  @Column("smallint", { name: "socket_max" })
  socketMax: number;

  @Column("smallint", { name: "socket" })
  socket: number;

  @Column("smallint", { name: "quality_lvl", nullable: true })
  qualityLvl?: number | null;

  @Column("smallint", { name: "treasure_class", nullable: true })
  treasureClass?: number | null;

  @Column("text", { name: "patch" })
  patch: string;

  @Column("enum", {
    name: "class_only",
    enum: [
      "None",
      "Amazon",
      "Assassin",
      "Barbarian",
      "Druid",
      "Necromancer",
      "Paladin",
      "Sorceress",
    ],
  })
  classOnly:
    | "None"
    | "Amazon"
    | "Assassin"
    | "Barbarian"
    | "Druid"
    | "Necromancer"
    | "Paladin"
    | "Sorceress";

  @Column("text", { name: "base_group", nullable: true })
  baseGroup?: string | null;

  @Column("text", { name: "set_group", nullable: true })
  setGroup?: string | null;

  @Column("smallint", { name: "rune_order", nullable: true })
  runeOrder?: number | null;

  @Column("text", { name: "gem_type", nullable: true })
  gemType?: string | null;

  @Column("text", { name: "gem_grade", nullable: true })
  gemGrade?: string | null;

  @ManyToOne(() => WtsPost, (wtsPost) => wtsPost.wtsItems, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wts_post_id", referencedColumnName: "id" }])
  wtsPost: WtsPost;

  @OneToMany(() => WtsOptionGroup, (wtsOptionGroup) => wtsOptionGroup.wtsItem)
  wtsOptionGroups: WtsOptionGroup[];
}
