// this file is used to keep all the fonts that will be used
// throught our application


import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    subsets: ['latin'], 
    weight: ['400' , '700']
});