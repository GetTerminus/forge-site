import { Routes } from '@angular/router';


export const componentsList: Routes = [
  {
    path: 'autocomplete',
    loadChildren: `./components/autocomplete/autocomplete.module#AutocompleteModule`,
    data: {
      name: 'Autocomplete',
    },
  },
  {
    path: 'card',
    loadChildren: `./components/card/card.module#CardModule`,
    data: {
      name: 'Card',
    },
  },
];
