  function main(){
	var info =  '{"quoteee":[' +
			'{"id":1,"sen":" Life is about making an impact, not making an income.","author":" -Kevin Kruse"},' +
			'{"id":2,"sen":"Whatever the mind of man can conceive and believe, it can achieve.","author":" –Napoleon Hill"},' +
			'{"id":3,"sen":"Strive not to be a success, but rather to be of value.","author":" –Albert Einstein"},' +
			'{"id":4,"sen":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"  –Robert Frost"},' +
			'{"id":5,"sen":"I attribute my success to this: I never gave or took any excuse."," –Florence Nightingale"},' +
			'{"id":6,"sen":"You miss 100% of the shots you don’t take.","author":" –Wayne Gretzky"},' +
			'{"id":7,"sen":"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.","author":" –Michael Jordan"},' +
			'{"id":8,"sen":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":" –Amelia Earhart"},' +
			'{"id":9,"sen":"Every strike brings me closer to the next home run.","author":" –Babe Ruthn"},' +
			'{"id":10,"sen":"Definiteness of purpose is the starting point of all achievement.","author":" –W. Clement Stone"},' +
			'{"id":11,"sen":"Life isn't about getting and having, it's about giving and being.","author":" –Kevin Kruse"},' +
			'{"id":12,"sen":"Life is what happens to you while you’re busy making other plans.","author":" –John Lennon"},' +
			'{"id":13,"sen":" We become what we think about.","author":" –Earl Nightingale"},' +
			'{"id":14,"sen":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","author":" –Mark Twain"},' +
			'{"id":15,"sen":"Life is 10% what happens to me and 90% of how I react to it.","author":" –Charles Swindoll"},' +
			'{"id":16,"sen":"The most common way people give up their power is by thinking they don’t have any.","author":" –Alice Walker"},' +
			'{"id":17,"sen":"The mind is everything. What you think you become. ","author":" –Buddha"},' +
			'{"id":18,"sen":"The best time to plant a tree was 20 years ago. The second best time is now.","author":" –Chinese Proverb"},' +
			'{"id":19,"sen":"An unexamined life is not worth living.","author":" –Socrates"},' +
			'{"id":20,"sen":" Eighty percent of success is showing up. ","author":"–Woody Allen"},' +
			]}';
	obj = JSON.parse(info);
	generate();
		}
		function generate(){
			var x = Math.floor((Math.random() * 3));
				console.log(x);
				document.getElementById("quote").innerHTML = "<blockquote>"+obj.quoteee[x].sen+"<br>"+obj.quoteee[x].author+"</blockquote>" ;
			}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('lol').addEventListener('click', clickHandler);
  main();
});
