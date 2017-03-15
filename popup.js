var info =  '{"quoteee":[' +
			'{"id":1,"sen":" Life is about making an impact, not making an income. --Kevin Kruse"},' +
			'{"id":2,"sen":"Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill"},' +
			'{"id":3,"sen":"Strive not to be a success, but rather to be of value. –Albert Einstein"},' +
			'{"id":4,"sen":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  –Robert Frost"},' +
			'{"id":1,"sen":"I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"},' +
			'{"id":2,"sen":"You miss 100% of the shots you don’t take. –Wayne Gretzky"},' +
			'{"id":1,"sen":"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. –Michael Jordan"},' +
			'{"id":2,"sen":"The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart"},' +
			'{"id":1,"sen":"Every strike brings me closer to the next home run. –Babe Ruthn"},' +
			'{"id":2,"sen":"Definiteness of purpose is the starting point of all achievement. –W. Clement Stone"},' +
			'{"id":1,"sen":"Life isn't about getting and having, it's about giving and being. –Kevin Kruse"},' +
			'{"id":2,"sen":"Life is what happens to you while you’re busy making other plans. –John Lennon"},' +
			'{"id":1,"sen":" We become what we think about. –Earl Nightingale"},' +
			'{"id":2,"sen":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. –Mark Twain"},' +
			'{"id":1,"sen":"Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll"},' +
			'{"id":2,"sen":"The most common way people give up their power is by thinking they don’t have any. –Alice Walker"},' +
			'{"id":1,"sen":"The mind is everything. What you think you become.  –Buddha"},' +
			'{"id":2,"sen":"The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb"},' +
			'{"id":1,"sen":"An unexamined life is not worth living. –Socrates"},' +
			'{"id":2,"sen":" Eighty percent of success is showing up. –Woody Allen"},' +
			]}';
	obj = JSON.parse(info);
		function random(){
			var x = Math.floor((Math.random() * 3));
				console.log(x);
				document.getElementById("quote").innerHTML = obj.quoteee[x].sen ;
			}

