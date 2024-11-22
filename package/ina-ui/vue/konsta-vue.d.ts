import { Ref, ComponentOptionsMixin, DefineComponent } from 'vue';
import iActions from './types/Actions';
import iActionsButton from './types/ActionsButton';
import iActionsGroup from './types/ActionsGroup';
import iActionsLabel from './types/ActionsLabel';
import iApp from './types/App';
import iBadge from './types/Badge';
import iBlock from './types/Block';
import iBlockFooter from './types/BlockFooter';
import iBlockHeader from './types/BlockHeader';
import iBlockTitle from './types/BlockTitle';
import iBreadcrumbs from './types/Breadcrumbs';
import iBreadcrumbsCollapsed from './types/BreadcrumbsCollapsed';
import iBreadcrumbsItem from './types/BreadcrumbsItem';
import iBreadcrumbsSeparator from './types/BreadcrumbsSeparator';
import iButton from './types/Button';
import iCard from './types/Card';
import iCheckbox from './types/Checkbox';
import iChip from './types/Chip';
import iDialog from './types/Dialog';
import iDialogButton from './types/DialogButton';
import iFab from './types/Fab';
import iIcon from './types/Icon';
import iLink from './types/Link';
import iList from './types/List';
import iListButton from './types/ListButton';
import iListGroup from './types/ListGroup';
import iListInput from './types/ListInput';
import iListItem from './types/ListItem';
import iMenuList from './types/MenuList';
import iMenuListItem from './types/MenuListItem';
import iMessage from './types/Message';
import iMessagebar from './types/Messagebar';
import iMessages from './types/Messages';
import iMessagesTitle from './types/MessagesTitle';
import iNavbar from './types/Navbar';
import iNavbarBackLink from './types/NavbarBackLink';
import iNotification from './types/Notification';
import iPage from './types/Page';
import iPanel from './types/Panel';
import iPopover from './types/Popover';
import iPopup from './types/Popup';
import iPreloader from './types/Preloader';
import iProgressbar from './types/Progressbar';
import iRadio from './types/Radio';
import iRange from './types/Range';
import iSearchbar from './types/Searchbar';
import iSegmented from './types/Segmented';
import iSegmentedButton from './types/SegmentedButton';
import iSheet from './types/Sheet';
import iStepper from './types/Stepper';
import iTabbar from './types/Tabbar';
import iTabbarLink from './types/TabbarLink';
import iTable from './types/Table';
import iTableBody from './types/TableBody';
import iTableCell from './types/TableCell';
import iTableHead from './types/TableHead';
import iTableRow from './types/TableRow';
import iToast from './types/Toast';
import iToggle from './types/Toggle';
import iToolbar from './types/Toolbar';

// PROVIDER
declare const iProvider: DefineComponent<
  {
    /**
     * App theme. If set to `'parent'` it will look for `ios` or `md` class on root `<html>` element, useful to use with parent framework like Framework7 or Ionic
     *
     * @default 'material'
     */
    theme: {
      type: StringConstructor;
      default: 'material';
    };
    /**
     * Include `dark:` variants (if dark theme is in use)
     *
     * @default false
     * */
    dark: {
      type: BooleanConstructor;
      default: false;
    };
    /**
     * Enables touch ripple effect in Material theme. Allows to globally disable touch ripple for all components
     *
     * @default true
     */
    touchRipple: {
      type: BooleanConstructor;
      default: true;
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {}
>;

// HELPERS
declare const useTheme: () => Ref<'material' | 'ios'>;

export { iActions, iActions as Actions, iActionsButton, iActionsButton as ActionsButton, iActionsGroup, iActionsGroup as ActionsGroup, iActionsLabel, iActionsLabel as ActionsLabel, iApp, iApp as App, iBadge, iBadge as Badge, iBlock, iBlock as Block, iBlockFooter, iBlockFooter as BlockFooter, iBlockHeader, iBlockHeader as BlockHeader, iBlockTitle, iBlockTitle as BlockTitle, iBreadcrumbs, iBreadcrumbs as Breadcrumbs, iBreadcrumbsCollapsed, iBreadcrumbsCollapsed as BreadcrumbsCollapsed, iBreadcrumbsItem, iBreadcrumbsItem as BreadcrumbsItem, iBreadcrumbsSeparator, iBreadcrumbsSeparator as BreadcrumbsSeparator, iButton, iButton as Button, iCard, iCard as Card, iCheckbox, iCheckbox as Checkbox, iChip, iChip as Chip, iDialog, iDialog as Dialog, iDialogButton, iDialogButton as DialogButton, iFab, iFab as Fab, iIcon, iIcon as Icon, iLink, iLink as Link, iList, iList as List, iListButton, iListButton as ListButton, iListGroup, iListGroup as ListGroup, iListInput, iListInput as ListInput, iListItem, iListItem as ListItem, iMenuList, iMenuList as MenuList, iMenuListItem, iMenuListItem as MenuListItem, iMessage, iMessage as Message, iMessagebar, iMessagebar as Messagebar, iMessages, iMessages as Messages, iMessagesTitle, iMessagesTitle as MessagesTitle, iNavbar, iNavbar as Navbar, iNavbarBackLink, iNavbarBackLink as NavbarBackLink, iNotification, iNotification as Notification, iPage, iPage as Page, iPanel, iPanel as Panel, iPopover, iPopover as Popover, iPopup, iPopup as Popup, iPreloader, iPreloader as Preloader, iProgressbar, iProgressbar as Progressbar, iRadio, iRadio as Radio, iRange, iRange as Range, iSearchbar, iSearchbar as Searchbar, iSegmented, iSegmented as Segmented, iSegmentedButton, iSegmentedButton as SegmentedButton, iSheet, iSheet as Sheet, iStepper, iStepper as Stepper, iTabbar, iTabbar as Tabbar, iTabbarLink, iTabbarLink as TabbarLink, iTable, iTable as Table, iTableBody, iTableBody as TableBody, iTableCell, iTableCell as TableCell, iTableHead, iTableHead as TableHead, iTableRow, iTableRow as TableRow, iToast, iToast as Toast, iToggle, iToggle as Toggle, iToolbar, iToolbar as Toolbar }
export { useTheme, iProvider, iProvider as Provider };
