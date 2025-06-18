import type { CollectionEntry, CollectionKey } from "astro:content";
import type { MarkdownHeading } from "astro";

export type GenericEntry = CollectionEntry<CollectionKey>;

export type PeopleEntry = CollectionEntry<"people">;
export type AwardEntry = CollectionEntry<"awards">;
export type PubEntry = CollectionEntry<"publications">;
export type HomeEntry = CollectionEntry<"home">;

export type SearchableEntry =
  | PeopleEntry
  | PubEntry;

export type SocialLinks = {
  email?: string;
  github?: string;
  linkedIn?: string;
  website?: string;
  youtube?: string;
  googleScholar?: string;
}

export type EntryReference = {
  id: string;
  collection: string;
};

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}

export type MenuItem = {
  title?: string;
  id: string;
  children: MenuItem[];
};

// Define the type for menu items to created nested object
export type MenuItemWithDraft = {
  title?: string;
  id: string;
  draft: boolean;
  children: MenuItemWithDraft[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
  items: MenuItemWithDraft[];
  level: number;
};
