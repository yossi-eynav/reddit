import moment from 'moment';

/**
 * Parsing this string pattern - `Submitted X hours ago` and converting it into this pattern - `MMM dd, YYYY HH:MM`
 * In case rawString is not match the expected pattern - returning an empty string.
 * @param {String} rawString
 * @returns String
 */
const dateParser = (rawString) => {
    const matches = rawString.match(/^Submitted (\d+) hours ago$/i)
    if(!matches) { return ''; }

   const hoursAgo = parseInt(matches.pop());
   return moment().add(-hoursAgo, 'hours').format('MMM dd, YYYY HH:MM')
};

export {
    dateParser
}