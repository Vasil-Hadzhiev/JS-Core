function monkeyPatcher(command) {
    let commands = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {
            let currentUpVotes = this.upvotes;
            let currentDownVotes = this.downvotes;
            let totalVotes = currentUpVotes + currentDownVotes;
            let totalScore = currentUpVotes - currentDownVotes;

            let rating = 'new';
            let isNewPost = totalVotes < 10;
            if (!isNewPost){
                updateRating();
            }
            if (totalVotes > 50){
                obfuscatePost();
            }
            return [currentUpVotes, currentDownVotes, totalScore, rating];

            function updateRating() {
                if (currentUpVotes > totalVotes * 0.66){
                    rating = 'hot';
                } else if (totalScore >= 0 && (currentUpVotes > 100 || currentDownVotes > 100)){
                    rating = 'controversial';
                } else if (totalScore < 0){
                    rating = 'unpopular';
                }
            }

            function obfuscatePost() {
                let biggerScore = Math.max(currentUpVotes, currentDownVotes);
                let inflation = Math.ceil(biggerScore * 0.25);
                currentUpVotes += inflation;
                currentDownVotes += inflation;
            }
        }
    };

    return commands[command]();
}