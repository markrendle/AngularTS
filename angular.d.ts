interface angular {
    module(): Module;
    module(name: String): Module;
    module(name: String, requires: string[]): Module;
    // module(name: String, requires: string[], definition: Function): Module;
    module(name: String, requires: string[], definition: any): Module;
    module(name: String, configFn: Function): Module;

    element(dom:any): any;
}

interface Module {
    config(configFn: Function);
    config(configs: any[]);
}

interface Scope {
    $apply(exp: Function): any;
    $apply(exp: String): any;
    $destroy();
    $digest();
    $eval(exp: Function): any;
    $eval(exp: String): any;
    $evalAsync(exp: Function): any;
    $evalAsync(exp: String): any;
}

interface HttpRequest {
    method?: String;
    url?: String;
    params?: any;
    data?: any;
    headers?: Object;
    transformRequest?: any;
    transformResponse?: any;
    cache?: any;
    timeout?: Number;
    withCredentials?: bool;
}

interface HttpResponse { data: any; status: Number; headers: Function; config: any; }

interface Promise {
    then(successCallback: (result) => any, errorCallback?: (reason) => any): Promise;
}

interface HttpPromise {
    then(successCallback: (response: HttpResponse) => any, errorCallback?: (response: HttpResponse) => any): Promise;
    success(fn: (data: any) => any): HttpPromise;
    success(fn: (data: any, status: Number) => any): HttpPromise;
    success(fn: (data: any, status: Number, headers: () => any, config?: any) => any): HttpPromise;
    success(fn: (data: any, status: Number, headers: (key: String) => string, config?: any) => any): HttpPromise;
    error(fn: (data: any) => any): HttpPromise;
    error(fn: (data: any, status: Number) => any): HttpPromise;
    error(fn: (data: any, status: Number, headers: () => any, config?: any) => any): HttpPromise;
    error(fn: (data: any, status: Number, headers: (key: String) => string, config?: any) => any): HttpPromise;
}

interface HttpService {
    (request: HttpRequest): HttpPromise;
    get(url: String): HttpPromise;
    get(url: String, config: HttpRequest): HttpPromise;
}
