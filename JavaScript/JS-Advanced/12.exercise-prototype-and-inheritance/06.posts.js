function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
    
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let toStr = super.toString();
           
            if (this.comments.length > 0) {
                let print = '';

                for (const comment of this.comments) {
                    print += ` * ${comment}\n`
                }
               
                return `${toStr}\nRating: ${this.likes - this.dislikes}\nComments:\n${print}`.trim();
            }else{
                return`${toStr}\nRating: ${this.likes - this.dislikes}`;
            }
            
        }
    }
    
    class BlogPost extends Post {
        constructor(title, content,views){
            super(title, content);
            this.views = views;
        }
        view(){
            
            this.views ++;
            return this;
        }
        toString(){
            let toStr = super.toString();
            return `${super.toString()}\nViews: ${this.views}`
        }
    }
 
 
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}