import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ nullable: true })
    userName: string;

    @Column({ nullable: true })
    userType: string;

    @Column({ nullable: true, unique: true })
    userEmail: string;

    @Column({ nullable: true, unique: true })
    userContact: string;

    @Column({ default: 0, nullable: true }) 
    userIsWinner: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: true })
    updatedAt: Date;
}
