import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../common/constants/role-type';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { UserDto } from './dto/UserDto';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
    @Column({ nullable: true, name: 'first_name' })
    firstName!: string;

    @Column({ nullable: true, name: 'last_name' })
    lastName!: string;

    @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
    role!: RoleType;

    @Column({ unique: true })
    email!: string;

    @Column({ nullable: true })
    password?: string;

    @Column({ nullable: true })
    phone?: string;

    @Column({ nullable: true })
    avatar?: string;

    @VirtualColumn()
    fullName: string;

    dtoClass = UserDto;
}
