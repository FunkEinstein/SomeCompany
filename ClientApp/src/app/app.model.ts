/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.0.0 (NJsonSchema v9.12.2.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getDepartment(id: number): Observable<DepartmentInfoDto | null> {
        let url_ = this.baseUrl + "/api/Departments/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetDepartment(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetDepartment(<any>response_);
                } catch (e) {
                    return <Observable<DepartmentInfoDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<DepartmentInfoDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetDepartment(response: HttpResponseBase): Observable<DepartmentInfoDto | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? DepartmentInfoDto.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<DepartmentInfoDto | null>(<any>null);
    }

    getAllDepartments(query: GetAllDepartmentsQuery | null): Observable<AllDepartmentsDto | null> {
        let url_ = this.baseUrl + "/api/Departments/all";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(query);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllDepartments(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllDepartments(<any>response_);
                } catch (e) {
                    return <Observable<AllDepartmentsDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<AllDepartmentsDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAllDepartments(response: HttpResponseBase): Observable<AllDepartmentsDto | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AllDepartmentsDto.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AllDepartmentsDto | null>(<any>null);
    }

    addDepartment(command: AddDepartmentCommand | null): Observable<number> {
        let url_ = this.baseUrl + "/api/Departments/add";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddDepartment(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddDepartment(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processAddDepartment(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    updateDepartment(command: UpdateDepartmentCommand | null): Observable<void> {
        let url_ = this.baseUrl + "/api/Departments/update";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdateDepartment(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateDepartment(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processUpdateDepartment(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    deleteDepartment(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/Departments/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteDepartment(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteDepartment(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processDeleteDepartment(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    getEmployee(id: number): Observable<EmployeeInfoDto | null> {
        let url_ = this.baseUrl + "/api/Employees/get/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetEmployee(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetEmployee(<any>response_);
                } catch (e) {
                    return <Observable<EmployeeInfoDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<EmployeeInfoDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetEmployee(response: HttpResponseBase): Observable<EmployeeInfoDto | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? EmployeeInfoDto.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<EmployeeInfoDto | null>(<any>null);
    }

    getAllEmployees(query: GetAllEmployeesQuery | null): Observable<AllEmployeesDto | null> {
        let url_ = this.baseUrl + "/api/Employees/all";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(query);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllEmployees(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllEmployees(<any>response_);
                } catch (e) {
                    return <Observable<AllEmployeesDto | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<AllEmployeesDto | null>><any>_observableThrow(response_);
        }));
    }

    protected processGetAllEmployees(response: HttpResponseBase): Observable<AllEmployeesDto | null> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AllEmployeesDto.fromJS(resultData200) : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AllEmployeesDto | null>(<any>null);
    }

    addEmployee(command: AddEmployeeCommand | null): Observable<number> {
        let url_ = this.baseUrl + "/api/Employees/add";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddEmployee(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddEmployee(<any>response_);
                } catch (e) {
                    return <Observable<number>><any>_observableThrow(e);
                }
            } else
                return <Observable<number>><any>_observableThrow(response_);
        }));
    }

    protected processAddEmployee(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 !== undefined ? resultData200 : <any>null;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<number>(<any>null);
    }

    updateEmployee(command: UpdateEmployeeCommand | null): Observable<void> {
        let url_ = this.baseUrl + "/api/Employees/update";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdateEmployee(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateEmployee(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processUpdateEmployee(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    deleteEmployee(id: number): Observable<void> {
        let url_ = this.baseUrl + "/api/Employees/delete/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteEmployee(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteEmployee(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processDeleteEmployee(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }
}

export class DepartmentInfoDto {
    id!: number;
    departmentName?: string | undefined;

    constructor(data?: DepartmentInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.departmentName = data["departmentName"];
        }
    }

    static fromJS(data: any): DepartmentInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new DepartmentInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["departmentName"] = this.departmentName;
        return data; 
    }
}

export class AllDepartmentsDto {
    allDepartments!: number;
    departments?: DepartmentInfoDto[] | undefined;

    constructor(data?: AllDepartmentsDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.allDepartments = data["allDepartments"];
            if (data["departments"] && data["departments"].constructor === Array) {
                this.departments = [];
                for (let item of data["departments"])
                    this.departments.push(DepartmentInfoDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AllDepartmentsDto {
        data = typeof data === 'object' ? data : {};
        let result = new AllDepartmentsDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["allDepartments"] = this.allDepartments;
        if (this.departments && this.departments.constructor === Array) {
            data["departments"] = [];
            for (let item of this.departments)
                data["departments"].push(item.toJSON());
        }
        return data; 
    }
}

export class GetAllDepartmentsQuery {
    page!: number;
    rowsOnPage!: number;
    nameFilter?: string | undefined;

    constructor(data?: GetAllDepartmentsQuery) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.page = data["page"];
            this.rowsOnPage = data["rowsOnPage"];
            this.nameFilter = data["nameFilter"];
        }
    }

    static fromJS(data: any): GetAllDepartmentsQuery {
        data = typeof data === 'object' ? data : {};
        let result = new GetAllDepartmentsQuery();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["page"] = this.page;
        data["rowsOnPage"] = this.rowsOnPage;
        data["nameFilter"] = this.nameFilter;
        return data; 
    }
}

export class AddDepartmentCommand {
    departmentName?: string | undefined;

    constructor(data?: AddDepartmentCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.departmentName = data["departmentName"];
        }
    }

    static fromJS(data: any): AddDepartmentCommand {
        data = typeof data === 'object' ? data : {};
        let result = new AddDepartmentCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["departmentName"] = this.departmentName;
        return data; 
    }
}

export class UpdateDepartmentCommand {
    id!: number;
    departmentName?: string | undefined;

    constructor(data?: UpdateDepartmentCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.departmentName = data["departmentName"];
        }
    }

    static fromJS(data: any): UpdateDepartmentCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateDepartmentCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["departmentName"] = this.departmentName;
        return data; 
    }
}

export class EmployeeInfoDto {
    id!: number;
    name?: string | undefined;
    email?: string | undefined;
    salary!: number;
    hired!: Date;
    departmentId!: number;
    departmentName?: string | undefined;

    constructor(data?: EmployeeInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.email = data["email"];
            this.salary = data["salary"];
            this.hired = data["hired"] ? new Date(data["hired"].toString()) : <any>undefined;
            this.departmentId = data["departmentId"];
            this.departmentName = data["departmentName"];
        }
    }

    static fromJS(data: any): EmployeeInfoDto {
        data = typeof data === 'object' ? data : {};
        let result = new EmployeeInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["email"] = this.email;
        data["salary"] = this.salary;
        data["hired"] = this.hired ? this.hired.toISOString() : <any>undefined;
        data["departmentId"] = this.departmentId;
        data["departmentName"] = this.departmentName;
        return data; 
    }
}

export class AllEmployeesDto {
    allEmployees!: number;
    employees?: EmployeeInfoDto[] | undefined;

    constructor(data?: AllEmployeesDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.allEmployees = data["allEmployees"];
            if (data["employees"] && data["employees"].constructor === Array) {
                this.employees = [];
                for (let item of data["employees"])
                    this.employees.push(EmployeeInfoDto.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AllEmployeesDto {
        data = typeof data === 'object' ? data : {};
        let result = new AllEmployeesDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["allEmployees"] = this.allEmployees;
        if (this.employees && this.employees.constructor === Array) {
            data["employees"] = [];
            for (let item of this.employees)
                data["employees"].push(item.toJSON());
        }
        return data; 
    }
}

export class GetAllEmployeesQuery {
    page!: number;
    rowsOnPage!: number;
    departmentId!: number;
    nameFilter?: string | undefined;
    emailFilter?: string | undefined;
    salaryFilter!: number;
    hiredFilter!: Date;

    constructor(data?: GetAllEmployeesQuery) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.page = data["page"];
            this.rowsOnPage = data["rowsOnPage"];
            this.departmentId = data["departmentId"];
            this.nameFilter = data["nameFilter"];
            this.emailFilter = data["emailFilter"];
            this.salaryFilter = data["salaryFilter"];
            this.hiredFilter = data["hiredFilter"] ? new Date(data["hiredFilter"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): GetAllEmployeesQuery {
        data = typeof data === 'object' ? data : {};
        let result = new GetAllEmployeesQuery();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["page"] = this.page;
        data["rowsOnPage"] = this.rowsOnPage;
        data["departmentId"] = this.departmentId;
        data["nameFilter"] = this.nameFilter;
        data["emailFilter"] = this.emailFilter;
        data["salaryFilter"] = this.salaryFilter;
        data["hiredFilter"] = this.hiredFilter ? this.hiredFilter.toISOString() : <any>undefined;
        return data; 
    }
}

export class AddEmployeeCommand {
    name?: string | undefined;
    email?: string | undefined;
    salary!: number;
    hired!: Date;
    departmentId!: number;

    constructor(data?: AddEmployeeCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.email = data["email"];
            this.salary = data["salary"];
            this.hired = data["hired"] ? new Date(data["hired"].toString()) : <any>undefined;
            this.departmentId = data["departmentId"];
        }
    }

    static fromJS(data: any): AddEmployeeCommand {
        data = typeof data === 'object' ? data : {};
        let result = new AddEmployeeCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["email"] = this.email;
        data["salary"] = this.salary;
        data["hired"] = this.hired ? this.hired.toISOString() : <any>undefined;
        data["departmentId"] = this.departmentId;
        return data; 
    }
}

export class UpdateEmployeeCommand {
    id!: number;
    name?: string | undefined;
    email?: string | undefined;
    salary!: number;
    hired!: Date;
    departmentId!: number;

    constructor(data?: UpdateEmployeeCommand) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.email = data["email"];
            this.salary = data["salary"];
            this.hired = data["hired"] ? new Date(data["hired"].toString()) : <any>undefined;
            this.departmentId = data["departmentId"];
        }
    }

    static fromJS(data: any): UpdateEmployeeCommand {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateEmployeeCommand();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["email"] = this.email;
        data["salary"] = this.salary;
        data["hired"] = this.hired ? this.hired.toISOString() : <any>undefined;
        data["departmentId"] = this.departmentId;
        return data; 
    }
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}