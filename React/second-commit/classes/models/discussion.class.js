export class discussion { 

    title = '';
    body = '';
    likes = 0;
    dislikes = 0;
    date = '';
    fixed = false;
    answers = 0

    constructor(title, boyd, likes, dislikes, date, fixed, answers) { 
        this.title = title;
        this.body = body;
        this.likes = likes;
        this.dislikes = dislikes;
        this.date = date;
        this.fixed = fixed;
        this.answers = answers;

    }
}