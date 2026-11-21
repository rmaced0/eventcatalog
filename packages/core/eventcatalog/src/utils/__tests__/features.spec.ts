import path from 'path';
import {
  isEventCatalogStarterEnabled,
  isEventCatalogScaleEnabled,
  isCustomDocsEnabled,
  isResourceDocsEnabled,
  isEventCatalogChatEnabled,
  isEventCatalogChatVisible,
  isEventCatalogUpgradeEnabled,
  isCustomLandingPageEnabled,
  isMarkdownDownloadEnabled,
  showEventCatalogBranding,
  showCustomBranding,
  isPrivateRemoteSchemaEnabled,
  isCustomStylesEnabled,
} from '../feature';

import config from '@config';
import fs from 'fs';

vi.mock('@config', () => ({
  default: {
    llmsTxt: {
      enabled: false,
    },
    chat: {
      enabled: true,
    },
  },
}));

describe('features', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset the environment before each test
    process.env = { ...originalEnv };

    // Set the project directory to the examples/default directory
    process.env.PROJECT_DIR = path.join(__dirname, 'catalog');

    // Create the catalog directory if it doesn't exist
    fs.mkdirSync(process.env.PROJECT_DIR, { recursive: true });
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('plan-gated features', () => {
    const planGatedFeatures = {
      isEventCatalogStarterEnabled,
      isEventCatalogScaleEnabled,
      isPrivateRemoteSchemaEnabled,
      isCustomDocsEnabled,
      isResourceDocsEnabled,
      isEventCatalogChatEnabled,
      isEventCatalogUpgradeEnabled,
      showEventCatalogBranding,
      showCustomBranding,
      isCustomStylesEnabled,
    };

    it.each(Object.entries(planGatedFeatures))('%s is always off, even with EventCatalog plan variables set', (_, isEnabled) => {
      process.env.EVENTCATALOG_STARTER = 'true';
      process.env.EVENTCATALOG_SCALE = 'true';
      process.env.EVENTCATALOG_SHOW_BRANDING = 'true';
      expect(isEnabled()).toBe(false);
    });
  });

  describe('isEventCatalogChatVisible', () => {
    const originalChat = config.chat;

    afterEach(() => {
      config.chat = originalChat;
    });

    it('shows Ask AI by default without a plan, server mode, or configuration file', () => {
      delete process.env.EVENTCATALOG_STARTER;
      delete process.env.EVENTCATALOG_SCALE;
      config.output = 'static';
      config.chat = undefined;
      expect(isEventCatalogChatVisible()).toBe(true);
      expect(isEventCatalogChatEnabled()).toBe(false);
    });

    it('shows Ask AI when chat settings omit enabled', () => {
      config.chat = {};
      expect(isEventCatalogChatVisible()).toBe(true);
    });

    it('hides Ask AI when explicitly disabled', () => {
      config.chat = { enabled: false };
      expect(isEventCatalogChatVisible()).toBe(false);
      expect(isEventCatalogChatEnabled()).toBe(false);
    });
  });

  describe('isCustomLandingPageEnabled', () => {
    it('should return true', () => {
      process.env.EVENTCATALOG_STARTER = 'true';
      expect(isCustomLandingPageEnabled()).toBe(true);
    });
  });

  describe('isMarkdownDownloadEnabled', () => {
    it('returns false when eventcatalog.config.js (llmsTxt.enabled) is false', () => {
      expect(isMarkdownDownloadEnabled()).toBe(false);
    });

    it('returns true when eventcatalog.config.js (llmsTxt.enabled) is true', () => {
      config.llmsTxt.enabled = true;
      expect(isMarkdownDownloadEnabled()).toBe(true);
    });
  });
});
