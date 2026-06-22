import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';
import { MenuWrapper } from './components/MenuWrapper';
import { SandboxFooter } from './components/SandboxFooter';
import { DropDownToggler } from './components/DropDownToggler';
import { CatalogBanner } from './components/CatalogBanner';

export {
  MenuWrapper, SandboxFooter, DropDownToggler, CatalogBanner,
};
// Example slot settings you can use in your deployment. You may be able to import these
// for quick development usage.
export const slotSettings = {
  'org.openedx.frontend.layout.header_desktop_user_menu_toggle.v1': {
    keepDefault: false,
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'custom_desktop_toggle',
          type: DIRECT_PLUGIN,
          RenderWidget: DropDownToggler,
        },
      },
    ],
  },
  desktop_user_menu_slot: {
    keepDefault: true,
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Wrap,
        widgetId: 'default_contents',
        wrapper: MenuWrapper,
      },
    ],
  },
  mobile_user_menu_slot: {
    keepDefault: true,
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Wrap,
        widgetId: 'default_contents',
        wrapper: MenuWrapper,
      },
    ],
  },
  footer_slot: {
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Hide,
        widgetId: 'default_contents',
      },
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'custom_footer',
          type: DIRECT_PLUGIN,
          RenderWidget: SandboxFooter,
        },
      },
    ],
  },
  'org.openedx.frontend.catalog.home_page.banner': {
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Hide,
        widgetId: 'default_contents',
      },
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'custom_catalog_banner',
          type: DIRECT_PLUGIN,
          RenderWidget: CatalogBanner,
        },
      },
    ],
  },
};
