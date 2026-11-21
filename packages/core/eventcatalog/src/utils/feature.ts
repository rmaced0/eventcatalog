// Feature checks also run during Astro config evaluation, before @config exists.
import config from './eventcatalog-config/source';

// Open-source feature flags
export const isEventCatalogChatVisible = () => config?.chat?.enabled ?? true;
export const isSSR = () => config?.output === 'server';
export const isVisualiserEnabled = () => config?.visualiser?.enabled ?? true;
// Opt-in while in beta — building the whole-catalog graph is unproven on very large catalogs
export const isArchitectureGraphEnabled = () =>
  isVisualiserEnabled() && (config?.visualiser?.architectureGraph?.enabled ?? false);
export const isChangelogEnabled = () => config?.changelog?.enabled ?? false;
export const isRSSEnabled = () => config?.rss?.enabled ?? false;
export const isLLMSTxtEnabled = () => config?.llmsTxt?.enabled ?? true;
export const isMarkdownDownloadEnabled = () => config?.llmsTxt?.enabled ?? true;
export const isFullCatalogAPIEnabled = () => config?.api?.fullCatalogAPIEnabled ?? false;
export const isDevMode = () => process.env.EVENTCATALOG_DEV_MODE === 'true';

// Plan-gated features. The commercial code behind these was removed from
// OpenCatalog, so they are permanently off. The functions stay so existing
// callers keep working and upstream EventCatalog v4 fixes merge cleanly.
const off = () => false;

export const isEventCatalogStarterEnabled = off;
export const isEventCatalogScaleEnabled = off;
export const isPrivateRemoteSchemaEnabled = off;
export const isEmbedEnabled = off;
export const showEventCatalogBranding = off;
export const showCustomBranding = off;
export const isCustomDocsEnabled = off;
export const isResourceDocsEnabled = off;
export const isEventCatalogChatEnabled = off;
export const isEventCatalogUpgradeEnabled = off;
export const isCustomPagesEnabled = off;
export const isAuthEnabled = off;
export const isCustomStylesEnabled = off;
export const isEventCatalogMCPEnabled = off;
export const isEventCatalogMCPAuthEnabled = off;
export const isIntegrationsEnabled = off;
export const isCustomLandingPageEnabled = () => true;
