var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAdvice } from './scripts/services/random-advice.js';
import { ObjectScreen } from './scripts/objects/screen.js';
const app = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield getAdvice();
        let generatorAdvice = new ObjectScreen(response);
        generatorAdvice.renderAdvice();
        const listenerBtn = function () {
            const buttonToggle = document.querySelector('#btn-toggle');
            buttonToggle.addEventListener('click', () => {
                setTimeout(() => {
                    window.location.reload();
                }, 800);
            });
        };
        listenerBtn();
    });
};
export { app };
