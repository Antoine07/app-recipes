/**
 * Structure de données de nos recettes
 */

export class DataRecipe {
    id?: number;
    stars: number = 0;
    title: string;
    published_at: string;
    description: string;
    author?: string;
    url?: string;
    thumbnailUrl?: string;
    state: string = 'inactive';
}

export class Recipe extends DataRecipe {
    // gestion de l'animation state
    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}


