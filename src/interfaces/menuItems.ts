export interface IMenuItem {
  id: string;
  name: string;
}

export interface IMenuItems extends Array<IMenuItem> {
  [index: number]: IMenuItem;
}
