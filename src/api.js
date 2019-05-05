import faker from 'faker';
import range from 'lodash/range';

export const getItems = query => {
    return new Promise((resolve, reject) => {
        const result = range(18).map(i => ({
            image: faker.random.image(),
            id: faker.random.number(),
            price: faker.commerce.price(),
            name: faker.commerce.product()
        }));
        setTimeout(() => {
            resolve(result);
        })

    })
}

// export const getSpecificItem =  (data, id) => {
//     return new Promise((resolve, reject) => {
//         const currentItem = data.find((element) => {
//             return element.id === id ;
//           });
//         setTimeout(() => {
//             resolve(currentItem);
//         })

//     })
// }