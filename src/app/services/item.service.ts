import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { Item } from "../models/Item";
@Injectable()
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public firestore: AngularFirestore) {
    // this.items = this.firestore.collection("items").valueChanges();

    this.itemsCollection = this.firestore.collection("items", (ref) =>
      ref.orderBy("title", "asc")
    );
    this.items = this.itemsCollection.snapshotChanges().map((changes) => {
      return changes.map((a) => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems() {
    return this.items;
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
  deleteItem(item: Item) {
    this.itemDoc = this.firestore.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }
  updateItem(item: Item) {
    this.itemDoc = this.firestore.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
