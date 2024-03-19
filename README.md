# March Madness Bracket Algorithm

There are so many ways to pick teams for March Madness. Some people flip a coin, some imagine the mascots in a fight and pick the winner, and some just push the more favored team ahead. As far as I know, my application is the fastest way to not only pick teams but to do it with some solid math!

A lot of bracket challenges give you the odds for each matchup, but this doesn't really help you make a choice when the odds are 78 and 22. Are you going to flip a coin 50 times and hope the outcome is over/under 39? No. That's why I used my development skills to create my March Madness algorithm. The historical odds for all possible matchups like 1vs16 or 7vs10 are baked in and applied systematically to each round that the computer generates. The ones I didn't have access to historically, AI generated a guesstimate for me.

But Jordan, shouldn't the program run it 10,000 times to ensure we are as close to the historical average? Sure, you could, and I could have. I just chose not to because basketball games aren't played in a computer. The average is there to give us an educated guess, but sometimes the ball bounces the other way...

## **DISCLAIMER**

**ANYTHING THAT ADVERTISES TO BE A SURE THING IS WRONG. NO ONE HAS HAD A PERFECT BRACKET AND I AM NOT ADVERTISING THAT. DON'T BE STUPID.**

Thank you, if you want to incorporate some higher math into your picks, give this a shot. If you want to change some things after you see your bracket and don't like some results, do that too. I was just wanting to implement something before the tournament with some skills I have developed in the last year.

## Getting Started

This application is designed to be simple to use, even if you're not very tech-savvy. Here are a couple of ways to get started:

### Option 1: Using Node.js

1. **Install Node.js**: Ensure you have Node.js installed on your computer. You can download it from [Node.js official website](https://nodejs.org/).

2. **Download the Project**: Clone or download the project from GitHub to your local machine.

3. **Run the Program**: Open a terminal or command prompt, navigate to the project's directory, and run:
   ```sh
   node mm.js
   ```
   This runs the program once you are in the folder of the project.

   Let's say you got the folder downloaded.  If you, like me, put the folder inside a folder called FoxDog inside your desktop, your command line entry into that folder would look exactly like the picture below.  If you put the folder right into your desktop, yours would say 
   ```sh
   "cd Desktop/March-Madness"
   ```
    Here is a ![picture of my "path" and "execution"](Screenshot%202024-03-18%20203252.png)
   
### Option 2: GitHub and Sharing
1. **Visit the GitHub Repository**: Go to the project's GitHub page.
2. **Fork the Repository** (optional): If you want to make your own changes or contributions, consider forking the repository to your account.
3. **Clone and Play**: Clone the repository to your local machine and follow the steps in Option 1 to run the program.

## Contributions
If you're interested in making the algorithm even better or have suggestions, feel free to fork the project and submit a pull request with your improvements. Whether it's refining the odds, adjusting the algorithm, or adding new features, all contributions are welcome!
