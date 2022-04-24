import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_adminnotice_id", ["id"], { unique: true })
@Entity("admin_notice", { schema: "public" })
export class AdminNotice {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("text", { name: "notice_title" })
  noticeTitle: string;

  @Column("text", { name: "notice_content" })
  noticeContent: string;

  @Column("timestamp without time zone", { name: "release_from" })
  releaseFrom: Date;

  @Column("timestamp without time zone", { name: "release_to" })
  releaseTo: Date;
}
