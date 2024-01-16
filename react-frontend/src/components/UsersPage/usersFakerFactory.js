
import { faker } from "@faker-js/faker";
export default (count,usernameIds,topicsIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.name.firstName(),
email: faker.internet.email(),

        };
        data = [...data, fake];
    }
    return data;
};
