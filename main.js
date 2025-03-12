// Local quotes collection
const localQuotes = [
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        quote: "When I let go of what I am, I become what I might be.",
        author: "Lao Tzu"
    },
    {
        quote: "If you're going through hell, keep going.",
        author: "Winston Churchill"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "Don't count the days, make the days count.",
        author: "Muhammad Ali"
    },
    {
        quote: "Nothing will work unless you do.",
        author: "Maya Angelou"
    },
    {
        quote: "The difference between ordinary and extraordinary is that little extra.",
        author: "Jimmy Johnson"
    },
    {
        quote: "The harder I work, the luckier I get.",
        author: "Samuel Goldwyn"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas Edison"
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss"
    },
    {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did.",
        author: "Mark Twain"
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        quote: "The question isn't who is going to let me; it's who is going to stop me.",
        author: "Ayn Rand"
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse.",
        author: "Florence Nightingale"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "Try to be a rainbow in someone else's cloud.",
        author: "Maya Angelou"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        quote: "In this life we cannot do great things. We can only do small things with great love.",
        author: "Mother Teresa"
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "Quality means doing it right when no one is looking.",
        author: "Henry Ford"
    },
    {
        quote: "It’s not whether you get knocked down. It’s whether you get up.",
        author: "Vince Lombardi"
    },
    {
        quote: "It always seems impossible until it’s done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    },
    {
        quote: "With the new day comes new strength and new thoughts.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Courage is resistance to fear, mastery of fear, not absence of fear.",
        author: "Mark Twain"
    },
    {
        quote: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder"
    },
    {
        quote: "Opportunities multiply as they are seized.",
        author: "Sun Tzu"
    },
    {
        quote: "Work like hell. I mean you just have to put in 80 to 100 hour weeks every week.",
        author: "Elon Musk"
    },
    {
        quote: "The best preparation for tomorrow is doing your best today.",
        author: "H. Jackson Brown, Jr."
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "If you want to fly, give up everything that weighs you down.",
        author: "Toni Morrison"
    },
    {
        quote: "Never allow a person to tell you no who doesn’t have the power to say yes.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen R. Covey"
    },
    {
        quote: "What we achieve inwardly will change outer reality.",
        author: "Plutarch"
    },
    {
        quote: "Work until your idols become your rivals.",
        author: "Drake"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis"
    },
    {
        quote: "Doubt kills more dreams than failure ever will.",
        author: "Suzy Kassem"
    },
    {
        quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford"
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Every problem is a gift—without problems we would not grow.",
        author: "Tony Robbins"
    },
    {
        quote: "Great things never come from comfort zones.",
        author: "Anonymous"
    },
    {
        quote: "Believe deep down in your heart that you're destined to do great things.",
        author: "Joe Paterno"
    },
    {
        quote: "The key to success is to start before you are ready.",
        author: "Marie Forleo"
    },
    {
        quote: "Find out what you like doing best and get someone to pay you for doing it.",
        author: "Katharine Whitehorn"
    },
    {
        quote: "You can’t use up creativity. The more you use, the more you have.",
        author: "Maya Angelou"
    },
    {
        quote: "An obstacle is often a stepping stone.",
        author: "William Prescott"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    {
        quote: "There is nothing impossible to they who will try.",
        author: "Alexander the Great"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quote: "It takes courage to grow up and become who you really are.",
        author: "E.E. Cummings"
    },
    {
        quote: "Aim for the moon. If you miss, you may hit a star.",
        author: "W. Clement Stone"
    },
    {
        quote: "Stay hungry. Stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein"
    },
    {
        quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    },
    {
        quote: "It does not matter how slowly you go, as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Keep going. Everything you need will come to you at the perfect time.",
        author: "Unknown"
    },
    {
        quote: "A river cuts through rock not because of its power, but because of its persistence.",
        author: "Jim Watkins"
    },
    {
        quote: "The biggest adventure you can take is to live the life of your dreams.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Always do your best. What you plant now, you will harvest later.",
        author: "Og Mandino"
    },
    {
        quote: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    },
    {
        quote: "Be not afraid of going slowly, be afraid only of standing still.",
        author: "Chinese Proverb"
    },
    {
        quote: "Small daily improvements over time lead to stunning results.",
        author: "Robin Sharma"
    },
    {
        quote: "Nothing can dim the light that shines from within.",
        author: "Maya Angelou"
    },
    {
        quote: "Believe in yourself, take on your challenges, and dig deep within to conquer fears.",
        author: "Chantal Sutherland"
    },
    {
        quote: "You cannot change your future, but you can change your habits, and surely your habits will change your future.",
        author: "A.P.J. Abdul Kalam"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    }
];

document.querySelector('#generate').addEventListener('click', () => {
    generate();
});

const generate = () => {
    try {
        let randomIndex = Math.floor(Math.random() * localQuotes.length);
        let quote = localQuotes[randomIndex].quote;
        let author = localQuotes[randomIndex].author;

        document.querySelector('#quotes').textContent = quote;
        document.querySelector('#author').textContent = "- " + author;
    }
    catch(error) {
        console.error('Error generating quote: ', error);
        document.querySelector('#quotes').textContent = "Failed to generate quote. Please try again.";
        document.querySelector('#author').textContent = "";
    }
};

// Generate a quote when the page loads (optional)
generate();

