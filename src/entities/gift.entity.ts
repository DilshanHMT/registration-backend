import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";

@Entity()
export class Gift extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    giftName: string;

    @Column({ nullable: true })
    giftWinner: string;

    @Column({ nullable: true })
    giftWinnerName: string;

    @Column({ default: 0, type: "tinyint", nullable: true }) 
    giftIsSelected: boolean;

    @Column({ default: 0, type: "tinyint", nullable: true }) 
    giftIsSpecial: boolean;

    @Column("integer", { nullable: true })
    createdBy: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: true })
    createdAt: Date;

    @Column("integer", { nullable: true })
    updatedBy: number;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: true })
    updatedAt: Date;
}
