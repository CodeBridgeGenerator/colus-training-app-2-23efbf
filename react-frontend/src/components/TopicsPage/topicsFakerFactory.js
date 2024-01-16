
import { faker } from "@faker-js/faker";
export default (count,usernameIds,topicsIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
topicstitle: faker.music.songName(),
topicrating: faker.datatype.number(""),
comment: faker.lorem.lines(),

        };
        data = [...data, fake];
    }
    return data;
};
