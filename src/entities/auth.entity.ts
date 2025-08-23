import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";

@Entity()
export class Auth extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    authCode: string;

    @Column()
    authName: string;

    @Column()
    authEmail: string;

    @Column()
    rpassword: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;
}
