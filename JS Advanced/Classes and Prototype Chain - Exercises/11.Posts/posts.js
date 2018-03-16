function createPosts() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            let result = 'Post: ' + this.title + '\n';
            result += 'Content: ' + this.content + '\n';

            return result;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let result = super.toString();
            let rating = this.likes - this.dislikes;
            result += 'Rating: ' + rating;

            if(this.comments.length > 0){
                result += '\nComments:\n';

                for (let com of this.comments) {
                    result += ' * ' + com + '\n';
                }

                result = result.substring(0, result.length - 1);
            }

            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views){
            super(title, content);
            this.postViews = views;
        }

        view(){
            this.postViews++;
            return this;
        }

        toString(){
            let result = super.toString();
            result += 'Views: ' + this.postViews;

            return result;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}