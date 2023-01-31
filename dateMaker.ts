import moment from 'moment'

function generateDate() {
    let newDate = moment().format('LLLL');
    return newDate;
}

export default generateDate