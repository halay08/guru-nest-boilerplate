import { Factory, Seeder } from 'typeorm-seeding';
import { UserEntity } from '../../modules/user/user.entity';

export class CreateUser implements Seeder {
    public async run(factory: Factory): Promise<void> {
        await factory(UserEntity)().create();
    }
}
