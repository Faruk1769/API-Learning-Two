import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('address')

export class Address extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 255 })
    addrsss: string

    @Column({ type: "varchar", length: 255 })
    phone: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date


}