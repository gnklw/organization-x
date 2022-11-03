import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageOperationsService {

  constructor() { }

  removeRecord(data: any[], id: number) {
    return data
      .splice(data
        .findIndex((e: { id: number; }) => e.id === id), 1);
  }
}