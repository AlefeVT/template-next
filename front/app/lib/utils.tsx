import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

//twMerge junta estilos de muitas linhas em uma linha so
//clsx é usado para adicionar classes dinamicamente
