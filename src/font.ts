// styles/fonts.ts

import { ABeeZee, IBM_Plex_Serif, Inknut_Antiqua ,Inter,Irish_Grover} from 'next/font/google';

export const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'], // Adjust subsets if needed
  weight: ['400', '700'], // Specify the weights you need
  display: 'swap',
});


export const aBeeZee = ABeeZee({
  subsets: ['latin'], // Adjust subsets if needed
  weight: '400', // Specify the weights you need
  display: 'swap',
});


export const irishGrover = Irish_Grover({
  subsets: ['latin'], // Adjust subsets if needed
  weight: '400', // Specify the weights you need
  display: 'swap',
});


export const inter = Inter({
  subsets: ['latin'],  // Use Latin subset
  weight: '400',       // Specify the weight
  display: 'swap',     // Ensure text remains visible during font loading
});


export const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'], // Specify the character subset
  weight: '400',      // Specify the weight, e.g., '400' for normal text
  display: 'swap',    // Ensures text is visible during font loading
});