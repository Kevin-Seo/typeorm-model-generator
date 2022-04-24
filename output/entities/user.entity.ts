import { Column, Entity, Index, OneToMany } from "typeorm";
import { WishList } from "./wish-list";

@Index("pk_user_id", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @Column("text", { primary: true, name: "id" })
  id: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt?: Date | null;

  @Column("text", { name: "bnet_id" })
  bnetId: string;

  @Column("text", { name: "bnet_tag" })
  bnetTag: string;

  @Column("double precision", {
    name: "manner_point",
    nullable: true,
    precision: 53,
  })
  mannerPoint?: number | null;

  @Column("timestamp without time zone", {
    name: "manner_updated_at",
    nullable: true,
  })
  mannerUpdatedAt?: Date | null;

  @OneToMany(() => WishList, (wishList) => wishList.user)
  wishLists: WishList[];
}
