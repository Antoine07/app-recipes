/**
 * Structure de données de nos recettes
 */

export class Recipe {
    id?: number | string;
    stars: number = 0;
    title: string;
    published_at: string;
    description: string;
    author?: string;
    url?: string;
    thumbnailUrl?: string;
    state: string = 'inactive';

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
