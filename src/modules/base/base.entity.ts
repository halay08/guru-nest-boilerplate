import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiPropertyOptional()
    public id: number;
}
