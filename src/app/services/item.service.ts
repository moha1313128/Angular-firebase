import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Item } from "../models/Item";

@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public firestore: AngularFirestore) {
    this.items = this.firestore.collection("items").valueChanges();
  }

  getItems() {
    return this.items;
  }
}
