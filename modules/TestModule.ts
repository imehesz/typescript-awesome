module Testing {
  export class TestModule {
    cnt: number;
    constructor() {
      this.cnt = 0;
    }
  
    eq(msg:string, one:any,two:any) {
      if(!msg) {
        msg = "Testing ...";
      }
      this.cnt++;
      var OK = "[OK]";
      var FAIL = "[F A I L!]";
      one == two ? 
        console.info(this.cnt + ". " + OK, " --- ", msg) : 
        console.warn(this.cnt + ". " + FAIL, " --- ", msg, one, "vs", two);
    }
  }
}
