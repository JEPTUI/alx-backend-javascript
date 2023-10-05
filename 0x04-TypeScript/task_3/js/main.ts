/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row`, row);

const updatedRow: RowElement = {
  ...row, // Copy existing values from "row"
  age: 23,
};

console.log(`Update row ${newRowID}`, updatedRow);
CRUD.updateRow(newRowID, updatedRow);

console.log(`Delete row id ${newRowID}`);
CRUD.deleteRow(newRowID);
