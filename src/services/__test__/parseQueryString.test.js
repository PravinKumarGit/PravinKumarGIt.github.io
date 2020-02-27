import { parseQueryString } from "../parseQueryString";

describe('parseQueryString', () => {
  it.each(["", " ", "?", "?&"])
    ('should return an empty object when no query string %s', (queryString) => {
    const result = run(queryString);
    
    expect(result).toStrictEqual({});
  });
  
  it('should return foo bar', () => {
    const result = run("?foo=bar");

    expect(result).toStrictEqual({foo: "bar"})
  });
  
  it('should return foo bar, do re', () => {
    const result = run("?foo=bar&do=re");

    expect(result).toStrictEqual({foo: "bar", do: "re"})
  });
  
  it('should parse encoded uri', () => {
    const result = run("?GR%26ND%40D=GR%26ND%40D");

    expect(result).toStrictEqual({"GR&ND@D": "GR&ND@D"})
  });
  
  const run = (queryString) => {
    return parseQueryString(queryString.toString())
  }
});