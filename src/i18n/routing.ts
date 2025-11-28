import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation'; // تغییر نام ایمپورت

export const routing = defineRouting({
  locales: ['en', 'fa', 'ar', 'tr'],
  defaultLocale: 'fa'
});

// استفاده از createNavigation به جای createSharedPathnamesNavigation
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);