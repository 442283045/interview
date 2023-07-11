import { faker } from '@faker-js/faker'
// Generate fake data
const fakeData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    date: faker.date.past(),
    status: faker.datatype.boolean({ probability: 0.75 })
}))
export default fakeData
