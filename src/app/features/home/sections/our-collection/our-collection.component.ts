import { Component } from '@angular/core';
import { CollectionItem } from '../../../../shared/interfaces/our-collection.interface';
import { ourCollection } from '../../../../data/our-collection.data';

@Component({
  selector: 'coffeeroasters-our-collection',
  imports: [],
  templateUrl: './our-collection.component.html',
  styleUrl: './our-collection.component.css',
})
export class OurCollectionComponent {
  ourCollection: CollectionItem[] = ourCollection;
}
