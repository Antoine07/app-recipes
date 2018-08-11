/**
 * Mock
 */

import { Recipe } from './recipes';

export const MockRecipes: Recipe[] = [
    {
        id : 1,
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 55,
        published_at: "2018-09-11",
        state: "inactive",
        author: "Ervin Howell",
        title: "Le grand Veggie",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    },
    {
        id: 2,
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 15,
        published_at: "2018-01-05",
        state: "inactive",
        author: "Alan Job",
        title: "Salade Summer Veggie",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    },
    {
        id: 7,
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 32,
        published_at: "2018-07-10",
        state: "inactive",
        author: "Guillaume",
        title: "Roasted vegetable",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    },
    {
        id: 37,
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 2,
        published_at: "2018-07-10",
        state: "inactive",
        author: "Tony",
        title: "Vegetables with olives",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    },
    {
        id: 17,
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 2,
        published_at: "2010-02-10",
        state: "inactive",
        author: "Tony",
        title: "Summer vegetables",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    },{
        id: 18,
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 2,
        published_at: "2013-01-11",
        state: "inactive",
        author: "Alan Turing",
        title: "Italian Oven Roasted vegetables",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    }
    ,{
        id: 22,
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 2,
        published_at: "1942-01-11",
        state: "inactive",
        author: "Robert",
        title: "Italian Oven Roasted",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    }
    ,{
        id: 23,
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952",
        stars: 2,
        published_at: "2013-01-11",
        state: "inactive",
        author: "Albert",
        title: "New Roasted vegetables",
        description: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        toggleState: function() {
            this.state = this.state === 'active' ? 'inactive' : 'active';
        }
    },
];