var activity = ['binge watch some netflix', 'go for a walk', 'go dancing', 'listen to music', 'take a nap', 'play video games', 'find a cat and pet it', 'look at cat videos on youtube', 'delete your facebook']; 

function random_item(activity)
{
alert(activity[Math.floor(Math.random() * activity.length)]);    
}

var food = ['eat a cookie', 'go get a hamburger', "it's pizza time", 'ICE CREAM', 'go eat breakfast, no matter the time of day']; 

function random_item(food)
{
alert(food[Math.floor(Math.random() * food.length)]);    
}