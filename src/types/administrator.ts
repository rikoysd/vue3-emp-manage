export class Administrator {
  constructor(
    // id
    private _id: number,
    // 名前
    private _name: string,
    // メールアドレス
    private _mail: string,
    // パスワード
    private _password: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get mail(): string {
    return this._mail;
  }

  public set mail(mail: string) {
    this._mail = mail;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }
}
