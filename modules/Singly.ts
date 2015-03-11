class Singly {
  private static _instance:Singly = null;
  
  constructor() {
    if(Singly._instance) {
      throw new Error("Error: Instanciation failed! Use getInstance()");
    }
    Singly._instance = this;
  }

  public static getInstance():Singly {
    if(Singly._instance === null) {
      Singly._instance = new Singly();
    }

    return Singly._instance;
  }
}
