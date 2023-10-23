import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class user extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string
    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    is_active!: boolean

    @Column()
    role!: string

    @Column()
    created_at!: Date

    @Column()
    updated_at!: Date

}