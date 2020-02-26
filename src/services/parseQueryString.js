const filterOnEmptyString = (str) => str.trim() !== "";

export const parseQueryString = (queryString) => {
  const chunkedQueryString = 
    queryString
      .slice(queryString.indexOf('?') + 1)
      .split('&')
      .filter(filterOnEmptyString);

  return chunkedQueryString.reduce((accumulator, chunk) => {
    const [key, val] = chunk.split('=');
    accumulator[decodeURIComponent(key)] = decodeURIComponent(val);

    return accumulator;
  }, {});
};