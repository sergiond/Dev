export class topics { 

    name = '';
    discussions = '';
    n_discussions = 0;
    date = '';

    constructor(name, discussions, n_discussions, date) { 
        
        this.name = name;
        this.discussions = discussions;
        this.n_discussions = n_discussions;
        this.date = date;
    }
}