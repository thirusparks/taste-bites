import {  Injectable } from '@angular/core';
import { TryComponent } from '../try/try.component';

@Injectable({
    providedIn: 'root',
})


export class TryService{
    private tryComponent : TryComponent;

    title = "Food Page";
    private message: any;

    
    setData(data: any){
        return this.message = data;
    }

    getData(){
        return this.message;
    }
}

