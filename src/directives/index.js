import { setupValidatorDirective } from './validator';

// 注册全局指令的回调
export function setupGlobDirectives(app) {
    setupValidatorDirective(app);
}