module Util {
  export class StringHelper {
    public static toTitleCase (str:String) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    public static snakify (str:String) {
      return !str ? "" : str.replace(/[^a-z|A-Z|0-9]/g, "-").replace(/(\-+)/g, "-").replace(/\-$/, '').toLowerCase();
    }
  }

  export class ObjectHelper {
    public static isArray (e) {
      return (e && typeof e === 'object' && e instanceof Array);
    }
  }
}
