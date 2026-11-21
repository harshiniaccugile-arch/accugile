import React from 'react';
import Link from 'next/link';

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  breadcrumbTitle: string;
  chips: string[];
  glance: {
    client: string;
    letter: string;
    items: { label: string; value: string }[];
  };
  heroStats: { value: string; label: string }[];
  tocItems: { id: string; label: string }[];
  contentHtml: string;
  moreStudies: {
    slug: string;
    title: string;
    desc: string;
    tags: string[];
  }[];
}

