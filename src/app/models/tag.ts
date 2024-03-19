export class Tag{
  private constructor(private readonly key: string, public readonly color: string){

  }

  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly REACT = new Tag('React', 'blue');
  static readonly PYTHON = new Tag('Python', 'olive');
  static readonly CSHARP = new Tag('C#', 'green');
  static readonly TYPESCRIPT = new Tag('Typescript', 'brown');
  static readonly NODEJS = new Tag('Nodejs', 'darkolivegreen');
  static readonly JAVA = new Tag('Java', 'magenta');
  static readonly ASPNET = new Tag('Java', 'black');
  static readonly JAVASCRIPT = new Tag('Java', 'cyan');

  toString(){
    return this.key;
  }
};
