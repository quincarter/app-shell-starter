import { NavItem } from '../interfaces/navigation.interface';

export class AppRootUtilities {
  /**
   *
   * @param fullNavList An array of all NavItems configured for the application
   * @param notAlowedRouteList An array of items that may not be allowed access for the current user.
   * @returns {navItems, notAllowed}
   */
  static getNotAllowedRoutes(
    fullNavList: NavItem[],
    notAlowedRouteList: NavItem[],
  ) {
    let notAllowed: NavItem[] = [];
    const navItems = fullNavList.filter(item => {
      if (item.userHasPermission) {
        return true;
      }

      notAllowed.push(item);
      return false;
    });

    notAllowed = [...notAlowedRouteList, ...notAllowed];
    return { navItems, notAllowed };
  }
}
