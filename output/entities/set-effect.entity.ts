import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { D2item } from "./d2item";

@Index("fk_seteffect_d2itemid", ["d2itemId"], {})
@Index("pk_seteffect_id", ["id"], { unique: true })
@Entity("set_effect", { schema: "public" })
export class SetEffect {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "d2item_id" })
  d2itemId: number;

  @Column("smallint", { name: "req_count", nullable: true })
  reqCount?: number | null;

  @Column("text", { name: "req_with", nullable: true })
  reqWith?: string | null;

  @Column("text", { name: "patch" })
  patch: string;

  @Column("text", { name: "class_only" })
  classOnly: string;

  @ManyToOne(() => D2item, (d2item) => d2item.setEffects, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "d2item_id", referencedColumnName: "id" }])
  d2item: D2item;
}
