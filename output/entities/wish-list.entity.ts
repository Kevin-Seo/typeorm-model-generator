import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";
import { WtsPost } from "./wts-post";

@Index("pk_wishlist_id", ["id"], { unique: true })
@Index("fk_wishlist_userid", ["userId"], {})
@Index("fk_wishlist_wtspostid", ["wtsPostId"], {})
@Entity("wish_list", { schema: "public" })
export class WishList {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("text", { name: "user_id" })
  userId: string;

  @Column("integer", { name: "wts_post_id" })
  wtsPostId: number;

  @ManyToOne(() => User, (user) => user.wishLists, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;

  @ManyToOne(() => WtsPost, (wtsPost) => wtsPost.wishLists, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wts_post_id", referencedColumnName: "id" }])
  wtsPost: WtsPost;
}
