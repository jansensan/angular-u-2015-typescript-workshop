// DEFINING STATIC PROPERTIES
class Constants {
  // FIXME: figure out why error is thrown about missing a constructor
  static get SOME_CONSTANT():string { return 'asdf';}
  static get SOME_OTHER_CONSTANT():number {return 1324;}
}

// log SOME_CONSTANT
console.log('Constants.SOME_CONSTANT: ' + Constants.SOME_CONSTANT);
console.log('Constants.SOME_OTHER_CONSTANT: ' + Constants.SOME_OTHER_CONSTANT);