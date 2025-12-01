// This file is kept for backward compatibility with the old /shop-single route.
// It simply redirects users back to /shop.

import { redirect } from 'next/navigation';

export default function LegacyShopSingle() {
  redirect('/shop');
}
