import actions from '../actions';

const { parseQueryString } = actions;

const stubGlobalWindow = search => {
  const previousWindow = global.window;
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: {
      search
    }
  });
  
  return () => global.window = previousWindow;
};

describe("startup.actions", () => {
  describe("parseQueryString", () => {
    it("should return type SET_QUERY_STRING", () => {
      const { type } = parseQueryString();
      
      expect(type).toBe("INITIALISE_QUERY_STRING");
    });
    
    it("should return object of params for search query string", () => {
      const search = "?foo=bar";
      const cleanup = stubGlobalWindow(search);

      const { payload } = parseQueryString();

      expect(payload).toStrictEqual({foo: "bar"});
      cleanup();
    });
  });
});