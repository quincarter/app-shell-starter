import { MfeItem } from '../utilities/mfe-loader.utility';

export interface NavItem {
  name: string;
  path: string;
  directory: string;
  filePath: string;
  levelOfAccess: string[];
  action?: () => {};
  children?: NavItem[];
  component: string;
  tagName: string;
  icon?: IconType;
  userHasPermission?: boolean;
  mfeComponent?: MfeItem;
  isMfe: boolean;
}

export declare type IconType = 'test';
