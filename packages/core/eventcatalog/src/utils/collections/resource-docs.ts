// Resource docs (extra pages such as runbooks or ADRs stored next to a resource)
// were a paid EventCatalog feature whose implementation was removed from
// OpenCatalog. These types and functions keep the sidebar and llms.txt code
// compiling; the feature is off, so every lookup returns an empty list.

export type ResourceCollection =
  | 'agents'
  | 'domains'
  | 'systems'
  | 'services'
  | 'events'
  | 'commands'
  | 'queries'
  | 'flows'
  | 'containers'
  | 'channels'
  | 'entities'
  | 'data-products';

type ResourceDocLocation = {
  type: string;
  resourceCollection: ResourceCollection;
  resourceId: string;
  resourceVersion: string;
};

export type ResourceDocEntry = {
  id: string;
  body?: string;
  filePath?: string;
  data: ResourceDocLocation & {
    id: string;
    version: string;
    title?: string;
    summary?: string;
    order?: number;
    versions: string[];
    latestVersion: string;
  };
};

export type ResourceDocCategoryEntry = {
  id: string;
  data: ResourceDocLocation & {
    label?: string;
    position?: number;
  };
};

export type ResourceDocGroup = {
  type: string;
  docs: ResourceDocEntry[];
  label?: string;
  position?: number;
};

/** Turns a doc folder name into a heading, e.g. `release-notes` → "Release Notes". */
export const getResourceDocTypeLabel = (type: string): string => {
  const words = type.split(/[-_\s]+/).filter(Boolean);
  if (words.length === 0) return 'Doc';
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const getResourceDocs = async (): Promise<ResourceDocEntry[]> => [];

export const getResourceDocCategories = async (): Promise<ResourceDocCategoryEntry[]> => [];

export const getResourceDocsForResource = async (
  _resourceCollection: ResourceCollection,
  _resourceId: string,
  _resourceVersion: string
): Promise<ResourceDocEntry[]> => [];

export const getResourceDocCategoriesForResource = async (
  _resourceCollection: ResourceCollection,
  _resourceId: string,
  _resourceVersion: string
): Promise<ResourceDocCategoryEntry[]> => [];

export const getGroupedResourceDocsByType = (
  _docs: ResourceDocEntry[],
  _options: { latestOnly?: boolean; categories?: ResourceDocCategoryEntry[] } = {}
): ResourceDocGroup[] => [];
