import { Route } from '@vaadin/router';
import { IconType, NavItem } from '../interfaces/navigation.interface';
import { MfeItem } from '../utilities/mfe-loader.utility';
import { MFE_LOADER_CONFIG } from './mfes';

export const getAccessPermissions = (
  item: NavItem,
  accesses: string[],
): boolean => item.levelOfAccess.some(access => accesses.includes(access));

export const getMfeComponent = (internalTagName: string) => {
  const mfe = MFE_LOADER_CONFIG.filter(
    (mfe: MfeItem) => mfe.associatedInternalTag === internalTagName,
  );

  return mfe.length > 0 ? mfe[0] : {};
};

export const routesBuilt = (
  navItems: NavItem[],
  accesses: string[],
  includeWildcardRoute = false,
) => {
  if (!accesses.length && includeWildcardRoute) {
    return [{ path: '(.*)', component: 'no-access' }];
  }

  const navigation = navItems.map((navItem: NavItem) => ({
    name: navItem.name,
    path: navItem.path,
    component: navItem.component,
    levelOfAccess: navItem.levelOfAccess,
    icon: navItem.icon || ('' as IconType),
    filePath: navItem.filePath,
    directory: navItem.directory,
    tagName: navItem.tagName,
    mfeComponent: getMfeComponent(navItem.tagName),
    userHasPermission: getAccessPermissions(navItem, accesses),
    children: navItem.children?.map((child: NavItem) => ({
      name: child.name,
      path: child.path,
      component: child.component,
      levelOfAccess: child.levelOfAccess,
      filePath: child.filePath,
      directory: child.directory,
      icon: child.icon || ('' as IconType),
      tagName: child.tagName,
      userHasPermission: getAccessPermissions(navItem, accesses),
    })),
    action: async () =>
      await import(`../../views/${navItem.directory}/${navItem.component}.ts`),
  }));

  if (includeWildcardRoute) {
    return [
      ...navigation,
      { path: '/', redirect: navigation[0].path },
      { path: '(.*)', component: 'page-not-found' },
    ] as Route[];
  }

  return [...navigation] as unknown as Route[];
};
