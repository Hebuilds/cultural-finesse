/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EventItem {
  id: string;
  num: string;
  date: string;
  dayName: string;
  tag: string;
  title: string;
  description: string;
  time: string;
  venue: string;
  priceAmount: number;
  priceCurrency: string;
  extraDetails?: string[];
  isFeatured?: boolean;
  image?: string;
}

export interface MerchItem {
  id: string;
  name: string;
  meaning: string;
  priceRwf: number;
  currency: string;
  tagline: string;
  detailedStory: string;
  visualWord: string;
  availableSizes: string[];
  image?: string;
}

export interface StoryExperience {
  id: string;
  num: string;
  emoji: string;
  name: string;
  description: string;
  longText: string;
}

export interface CharacterCard {
  id: string;
  name: string;
  vibe: string;
  startingLine: string;
  secretObjective: string;
  allianceVibe: string;
}

export interface CommunityPhoto {
  id: string;
  lbl: string;
  storySegment: string;
  photographer: string;
  gradient: string;
  image?: string;
}

export interface UserInquiry {
  merchId: string;
  size: string;
  userName: string;
  contactMethod: string; // WhatsApp prompt/Email
}
