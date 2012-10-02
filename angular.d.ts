module angular {
    export function module(): Module;
    export function module(name: string): Module;
    export function module(name: string, requires: string[]): Module;
    export function module(name: string, requires: string[], configFn: Function): Module;
    export function module(name: string, configFn: Function): Module;
}

class Module {
    config(configFn: Function);
    config(configs: any[]);
}

interface Scope {
    $apply(exp: Function): any;
    $apply(exp: string): any;
    $destroy();
    $digest();
    $eval(exp: Function): any;
    $eval(exp: string): any;
    $evalAsync(exp: Function): any;
    $evalAsync(exp: string): any;
}