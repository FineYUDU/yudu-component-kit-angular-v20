import { Injectable, computed, effect, inject, signal, DestroyRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { catchError, of } from 'rxjs';

import { I18N_OPTIONS } from './i18n.tokens';

type Dict = Record<string, any>;

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly http = inject( HttpClient );
  private readonly i18nOptions = inject( I18N_OPTIONS );
  private readonly destroyRef = inject( DestroyRef );

  private readonly cache = new Map<string, Dict>();

  private readonly _lang = signal<string>(this.getInitialLang());
  public readonly lang = computed(() => this._lang());

  private readonly _dict = signal<Dict>({});
  private readonly dict = computed(() => this._dict());

  constructor() {
    if (!this.safeGetStorage(this.i18nOptions.storageKey)) {
      this.safeSetStorage(this.i18nOptions.storageKey, this._lang());
    }

    effect(() => {
      const lang = this._lang();

      const cached = this.cache.get(lang);
      if (cached) {
        this._dict.set(cached);
        return;
      }

      const url = `${this.normalizePath(this.i18nOptions.assetPath)}/${lang}.json`;

      this.http.get<Dict>(url).pipe(
        catchError(() => of({} as Dict)),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(data => {
        this.cache.set(lang, data);
        this._dict.set(data);
      });
    });
  }

  public translate(key: string): string {
    const translations = this.dict();
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && Object.prototype.hasOwnProperty.call(value, k)) value = value[k];
      else return key;
    }

    return typeof value === 'string' ? value : key;
  }

  public setLang(lang: string): void {
    const next = (lang ?? '').trim();
    if (!next) return;
    if (!this.isSupported(next)) return;

    this.safeSetStorage(this.i18nOptions.storageKey, next);
    this._lang.set(next);
  }

  public changeLang(): void {
    const list = this.i18nOptions.supportedLangs ?? [];
    if (list.length < 2) return;

    const current = this._lang();
    const idx = list.indexOf(current);
    const next = list[(idx + 1) % list.length];
    this.setLang(next);
  }

  private getInitialLang(): string {
    const saved = this.safeGetStorage(this.i18nOptions.storageKey);
    if (saved && this.isSupported(saved)) return saved;
    return this.i18nOptions.defaultLang;
  }

  private isSupported(lang: string): boolean {
    const list = this.i18nOptions.supportedLangs;
    return list ? list.includes(lang) : true; 
  }

  private normalizePath(path: string): string {
    return (path ?? '').replace(/\/+$/, '');
  }

  private safeGetStorage(key: string): string | null {
    try {
      if (typeof localStorage === 'undefined') return null;
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private safeSetStorage(key: string, value: string): void {
    try {
      if (typeof localStorage === 'undefined') return;
      localStorage.setItem(key, value);
    } catch {}
  }
}
