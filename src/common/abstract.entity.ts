import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    BeforeUpdate,
} from 'typeorm';

import { UtilsService } from '../providers/utils.service';
import type { AbstractDto } from './dto/AbstractDto';

export abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt!: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        nullable: true,
        default: () => null,
    })
    updatedAt?: Date;

    @DeleteDateColumn({
        type: 'timestamp',
        name: 'deleted_at',
        nullable: true,
        default: () => null,
    })
    deleteddAt?: Date;

    abstract dtoClass: new (entity: AbstractEntity, options?: any) => T;

    toDto(options?: any): T {
        return UtilsService.toDto(this.dtoClass, this, options);
    }

    @BeforeInsert()
    fillCreatedAt() {
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    fillUpdatedAt() {
        this.updatedAt = new Date();
    }
}
