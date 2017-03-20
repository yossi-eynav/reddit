import moment from 'moment';

/**
 * Parsing this string pattern - `Submitted X hours ago` and converting it into ISO format
 * In case rawString is not match the expected pattern - returning -1
 * @param {String} rawString
 * @returns String
 */
const dateParser = (rawString) => {
    const matches = rawString.match(/^Submitted (\d+) hours ago$/i)
    if(!matches) { return -1; }

   const hoursAgo = parseInt(matches.pop());
   return moment().add(-hoursAgo, 'hours').toISOString();
};

/**
 * 
 * Convert ISOString into the default date format.
 * @param {any} ISOString
 * @returns
 */
const dateFormatter = (ISOString) => {
  return moment(ISOString).format('MMM dd, YYYY HH:mm')
}

export {
    dateFormatter,
    dateParser
}