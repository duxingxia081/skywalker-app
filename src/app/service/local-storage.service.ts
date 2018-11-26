import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    getStore(name: string) {
        if (!name) {
            return;
        }
        return localStorage.getItem(name);
    }

    setStore(name: string, content: any) {
        if (!name) {
            return;
        }
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        localStorage.setItem(name, content);
    }

    removeStore(name: string) {
        if (!name) {
            return;
        }
        localStorage.removeItem(name);
    }
}
