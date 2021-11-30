import React from 'react';

import { Get } from '../../Services/publicApiService';
import { ItemList } from './ItemList';

export const ScreenSliderList = () => {

    const mock = [1, 2, 3, 4, 5];

    const getData = async () => {
        try {
            const data = await Get('slides')
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    getData()
    return (
        <div>
            <ItemList />
        </div>
    );
}
