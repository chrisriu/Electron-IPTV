import * as CryptoJS from 'crypto-js';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';

@Injectable()
export class EncDecryptService {
    encryptSecretKey: string;
    encryptData(data) {
        try {
            return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
        } catch (e) {
            console.log(e);
        }
    }

    decryptData(data) {
        try {
            const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
            if (bytes.toString()) {
                return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            }
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}


