import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { UserEntity } from '../../modules/user/user.entity';

define(UserEntity, (faker: typeof Faker) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const avatar = faker.image.avatar();
    const password = faker.internet.password();
    const phone = faker.phone.phoneNumber();
    const email = faker.internet.email();

    const tournament = new UserEntity();
    tournament.firstName = firstName;
    tournament.lastName = lastName;
    tournament.password = password;
    tournament.phone = phone;
    tournament.email = email;
    tournament.avatar = avatar;
    return tournament;
});
