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

interface HttpRequest {
    method?: string;
    url?: string;
    params?: any;
    data?: any;
    headers?: Object;
    transformRequest?: any;
    transformResponse?: any;
    cache?: any;
    timeout?: number;
    withCredentials?: bool;
}

interface HttpResponse { data: any; status: number; headers: Function; config: any; }

interface Promise {
    then(successCallback: (result) => any, errorCallback?: (reason) => any): Promise;
}

interface HttpPromise {
    then(successCallback: (response: HttpResponse) => any, errorCallback?: (response: HttpResponse) => any): Promise;
    success(fn: (data: any) => any): HttpPromise;
    success(fn: (data: any, status: number) => any): HttpPromise;
    success(fn: (data: any, status: number, headers: () => any, config?: any) => any): HttpPromise;
    success(fn: (data: any, status: number, headers: (key: string) => string, config?: any) => any): HttpPromise;
    error(fn: (data: any) => any): HttpPromise;
    error(fn: (data: any, status: number) => any): HttpPromise;
    error(fn: (data: any, status: number, headers: () => any, config?: any) => any): HttpPromise;
    error(fn: (data: any, status: number, headers: (key: string) => string, config?: any) => any): HttpPromise;
}

interface HttpService {
    (request: HttpRequest): HttpPromise;
    get(url: string): HttpPromise;
    get(url: string, config: HttpRequest): HttpPromise;
}