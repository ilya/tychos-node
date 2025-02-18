"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Vector {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://www.tychos.ai/api/';
        // this.baseUrl = 'http://localhost:3000/api/';
    }
    create({ type, inputText, model, modelProviderKey }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (type === 'text_embedding') {
                if (model === 'text-embedding-ada-002') {
                    try {
                        const url = `${this.baseUrl}create-vector`;
                        const headers = { 'api_key': this.apiKey };
                        const payload = {
                            'model_provider_key': modelProviderKey,
                            'input': inputText,
                            'model': model,
                        };
                        const response = yield axios_1.default.post(url, payload, { headers: headers });
                        return response.data;
                    }
                    catch (e) {
                        console.error(e);
                        return null;
                    }
                }
                else {
                    console.log('Model not currently supported, try text-embedding-ada-002');
                    return null;
                }
            }
            else {
                console.log('Type not currently supported, try text_embedding');
                return null;
            }
        });
    }
}
exports.default = Vector;
