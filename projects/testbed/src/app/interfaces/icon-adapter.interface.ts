// icon-adapter.interface.ts
import { YdIconName } from './yd-icon.types';
export interface IconAdapter {
  /**
   * Devuelve las clases CSS para el ícono solicitado.
   * Ejemplo: ['pi', 'pi-trash']
   */
  getIconClasses(name: YdIconName): string[];
}
