import { ReactIcon } from './tech/react';
import { VueIcon } from './tech/vue';
import { NodejsIcon } from './tech/nodejs';
import { NetlifyIcon } from './deployment/netlify';
import { VercelIcon } from './deployment/vercel';
import { StackBlitzIcon } from './companies/stackblitz';

export const icons = [
  ReactIcon,
  VueIcon,
  NodejsIcon,
  NetlifyIcon,
  VercelIcon,
  StackBlitzIcon
];

export const categories = [
  'All',
  'Frontend Frameworks',
  'Backend',
  'Deployment',
  'Companies'
] as const;

export type Category = typeof categories[number];