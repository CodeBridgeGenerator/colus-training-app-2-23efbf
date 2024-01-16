
import { faker } from "@faker-js/faker";
export default (count,usernameIds,topicsIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
username: usernameIds[i % usernameIds.length],
organization: faker.company.name(),
department: faker.commerce.department(),
mobile: faker.phone.number(),

        };
        data = [...data, fake];
    }
    return data;
};
