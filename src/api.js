import faker from 'faker';
import range from 'lodash/range';

export const getItems = query => {
    return new Promise((resolve, reject) => {
        const result = range(100).map(i => ({
            price: faker.commerce.price(),
            name: faker.commerce.product()
        }));
        setTimeout(() => {
            resolve(result);
        })

    })
    

}