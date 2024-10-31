// src/statsAtom.js
import { atom } from 'recoil';

export const statsAtom = atom({
  key: 'statsAtom', // Unique ID (with respect to other atoms/selectors)
  default: {
    yearsOfService: 25,
    successfulTrips: 28000,
    numberOfVehicles: 200,
    happyCustomers: 50000,
  }, // Default value (aka initial value)
});
