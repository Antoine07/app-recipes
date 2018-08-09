/**
 * Mock
 */

import { Recipe } from './recipes';

export const MockRecipes: Recipe[] = [
    {
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 5,
        published_at: "2018-10-10",
        state: "inactive",
        author: "Ervin Howell",
        title: "Le grand Veggie",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    },
    {
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 15,
        published_at: "2018-10-10",
        state: "inactive",
        author: "Alan Job",
        title: "Salade Summer Veggie",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    },
];