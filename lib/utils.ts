import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Table captions
export const TABLE_CAPTION_1 = 'Products'
export const TABLE_CAPTION_2 = 'Created at'
export const TABLE_CAPTION_3 = 'Hour'
export const TABLE_CAPTION_4 = 'Description'
export const TABLE_CAPTION_5 = 'Actions'


