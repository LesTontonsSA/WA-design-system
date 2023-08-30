import * as React from 'react';
import { type AddressItem, GoogleMaps } from '~/maps';

const addresses: AddressItem[] = [
  {
    title: 'Headquarters',
    address: 'Grand Rue 52, 1095 Lutry, Switzerland',
    phone: '+41 21 123 45 67',
    email: 'example@tests.dev',
    coordinates: '46.502124882102166, 6.6866090899856125',
  },
];

export const BasicGoogleMaps = () => <GoogleMaps addresses={addresses} />;
