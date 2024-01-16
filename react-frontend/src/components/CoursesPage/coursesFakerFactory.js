
import { faker } from "@faker-js/faker";
export default (count,usernameIds,topicsIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.commerce.productAdjective(),
topics: topicsIds[i % topicsIds.length],
datestart: faker.date.past(),
dateend: faker.date.future(),

        };
        data = [...data, fake];
    }
    return data;
};
