import generateDate from "../dateMaker";
import moment from 'moment';

describe('dateMaker', () => {

    it('generateDate is makeing dates', () => {
        let result = generateDate();
        expect(result).toEqual(moment().format('LLLL'));
    })
})