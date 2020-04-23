/**************************
EX 1: Sorting and Filtering
**************************/

let tweets = [
    {
        likes: 200,
        retweets: 2,
        text: 'Real eyes realize real lies',
        createdAt: 'Monday April 2nd 2019 13:22:02',
        user: {
            handle: '@Jayden_Smith',
            profile: 'https://cdn.twitter.com/profile_13123123123.jpg'
        }
    },
    {
        likes: 12,
        retweets: 2,
        text: 'Hey look, Im on twitter tweeting!',
        createdAt: 'Wednesday May 2nd 2017 1:25:02',
        user: {
            handle: '@fermat_math_guy',
            profile: 'https://cdn.twitter.com/profile_43508930123.jpg'
        }
    },
    {
        likes: 342,
        retweets: 80,
        text: 'You better believe Im the real thing',
        createdAt: 'Friday January 21st 2018 11:25:21',
        user: {
            handle: '@not_the_real_thing',
            profile: 'https://cdn.twitter.com/profile_43508930123.jpg'
        }
    },
    {
        likes: 111,
        retweets: 12,
        text: 'Twitter is a place where people tweet, which is what im doing right now.',
        createdAt: 'Sunday December 25th 2020 11:25:21',
        user: {
            handle: '@how_does_twitter_work',
            profile: 'https://cdn.twitter.com/profile_43673830123.jpg'
        }
    },
    {
        likes: 93,
        retweets: 50,
        text: 'I cant wait for Halo Infinite to come out',
        createdAt: 'Tuesday April 23rd 2020 11:25:21',
        user: {
            handle: '@justice_halo',
            profile: 'https://cdn.twitter.com/profile_24234830123.jpg'
        }
    }
]

let filterTweets = (tweets, searchString) => {
    // Use .filter() to return only the tweets that contain the searchString in the tweet
    // Make sure to return the filtered array
    return tweets.filter(t => t.text.includes(searchString))
}

let sortTweets = (tweets) => {
    // Use .sort() to sort the tweets by total likes in increasing order
    // Make sure to return the sorted array at the end of this function

}

// Bonus! Look up .reduce() and see if you can use it to figure out the below:
let uniqueTweeters = (tweets) => {
    // Use .reduce() to return a list of unique users
}

console.log('FILTERING')
console.log(filterTweets(tweets, 'real'))
console.log('SORTING')
console.log(sortTweets(tweets))
console.log('UNIQUENESS')
console.log(uniqueTweeters(tweets));

