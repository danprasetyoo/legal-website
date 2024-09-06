// NavigationItems.ts
export interface NavItem {
  path: string;
  label: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export type NavItemOrGroup = NavItem | NavGroup;

export const navigationItems: NavItemOrGroup[] = [
  { path: '/', label: 'Beranda' },
  {
    label: 'Dokumen Perusahaan',
    items: [
      { path: '/dokumen/akta', label: 'Akta Perusahaan Details' },
      { path: '/dokumen/asset', label: 'Asset Perusahaan' },
      { path: '/dokumen/sk-sop-legal', label: 'SK SOP Legal' },
    ],
  },
  { path: '/materi-legal', label: 'Materi Legal' },
  { path: '/profil-legal', label: 'Profil Legal' },
];
