import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { WishList } from "./wish-list";
import { WtsItem } from "./wts-item";
import { WttItem } from "./wtt-item";

@Index("pk_wtspost_id", ["id"], { unique: true })
@Entity("wts_post", { schema: "public" })
export class WtsPost {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt?: Date | null;

  @Column("text", { name: "seller_id" })
  sellerId: string;

  @Column("double precision", { name: "seller_manner", precision: 53 })
  sellerManner: number;

  @Column("text", { name: "buyer_id", nullable: true })
  buyerId?: string | null;

  @Column("double precision", { name: "buyer_manner", precision: 53 })
  buyerManner: number;

  @Column("boolean", { name: "is_negotiable", default: () => "false" })
  isNegotiable: boolean;

  @Column("boolean", { name: "is_closed", default: () => "false" })
  isClosed: boolean;

  @OneToMany(() => WishList, (wishList) => wishList.wtsPost)
  wishLists: WishList[];

  @OneToMany(() => WtsItem, (wtsItem) => wtsItem.wtsPost)
  wtsItems: WtsItem[];

  @OneToMany(() => WttItem, (wttItem) => wttItem.wtsPost)
  wttItems: WttItem[];
}
