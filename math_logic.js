const mathLogicQuestions = [
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "A group of 4 numbers has an average of 23. The first three numbers are 23, 16, and 8. What is the fourth number?",
        "answers": [
            "92",
            "50",
            "44",
            "45",
            "23"
        ],
        "correct": "45"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "If there are 5 apples and you take away 3, how many do you have?",
        "answers": [
            "2",
            "3",
            "5",
            "8",
            "0"
        ],
        "correct": "3",
        "explanation": "You have 3 because you took 3 apples."
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "A car traveled 281 miles in 4 hours and 41 minutes. What was the average speed of the car in miles per hour?",
        "answers": [
            "60 mph",
            "55 mph",
            "50 mph",
            "65 mph",
            "70 mph"
        ],
        "correct": "60 mph",
        "explanation": "Total time in hours is approximately 4.68 hours. 281 miles / 4.68 hours ≈ 60 mph."
    },
    {
        "category": "Math and Logic",
        "difficulty": "Hard",
        "question": "What is the sum of the angles in a pentagon?",
        "answers": [
            "540 degrees",
            "360 degrees",
            "720 degrees",
            "180 degrees",
            "1080 degrees"
        ],
        "correct": "540 degrees",
        "explanation": "The sum of the interior angles of a pentagon (5 sides) is 540 degrees."
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "Which number is larger, (2^8) or (3^5)?",
        "answers": [
            "256",
            "243",
            "Both are equal",
            "Cannot be determined",
            "None of the above"
        ],
        "correct": "256",
        "explanation": "(2^8 = 256) and (3^5 = 243), so 256 is larger."
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "In a group of 48 people, 17 wear glasses and 30 do not wear glasses. How many people's eyewear status is unknown?",
        "answers": [
            "1",
            "0",
            "5",
            "3",
            "2"
        ],
        "correct": "1",
        "explanation": "Total known (glasses + no glasses) = 47. Total - Known = 1 person."
    },
    {
        "category": "Math and Logic",
        "difficulty": "Hard",
        "question": "If the digits of a two-digit number are reversed, the new number is 27 less than the original number, and the sum of the digits is 9. What is the original number?",
        "answers": [
            "63",
            "36",
            "72",
            "27",
            "54"
        ],
        "correct": "63",
        "explanation": "Let the digits be x and y. Then 10x + y - (10y + x) = 27 and x + y = 9. Solving these gives x = 6, y = 3, thus the number is 63."
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "What number is one quarter of one tenth of one fifth of 200?",
        "answers": [
            "1",
            "2",
            "0.5",
            "10",
            "5"
        ],
        "correct": "1"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "If you flip a coin three times, what is the probability of getting at least one tail?",
        "answers": [
            "1/8",
            "1/4",
            "3/8",
            "7/8",
            "1/2"
        ],
        "correct": "7/8"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Hard",
        "question": "Solve the equation for x: 2x + 3(x - 4) = 5x - 2",
        "answers": [
            "10",
            "2",
            "0",
            "5",
            "-2"
        ],
        "correct": "10"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "What is 15% of 200?",
        "answers": [
            "30",
            "20",
            "25",
            "35",
            "40"
        ],
        "correct": "30"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "What is the next number in the sequence? 2, 4, 8, 16, ?",
        "answers": [
            "18",
            "20",
            "22",
            "24",
            "32"
        ],
        "correct": "32"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Hard",
        "question": "A cube has a volume of 27 cubic meters. What is the length of one side?",
        "answers": [
            "9",
            "3",
            "27",
            "6",
            "18"
        ],
        "correct": "3"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "If five machines can make five widgets in five minutes, how many minutes would it take 100 machines to make 100 widgets?",
        "answers": [
            "5",
            "100",
            "25",
            "1",
            "20"
        ],
        "correct": "5"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "A rectangle's length is three times its width. If the perimeter is 48 cm, what is the area?",
        "answers": [
            "108 cm²",
            "96 cm²",
            "54 cm²",
            "72 cm²",
            "120 cm²"
        ],
        "correct": "108 cm²"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Hard",
        "question": "The ratio of two numbers is 3:4. Their sum is 56. What are the two numbers?",
        "answers": [
            "21 and 35",
            "24 and 32",
            "18 and 38",
            "27 and 29",
            "15 and 41"
        ],
        "correct": "24 and 32"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "What comes next in the pattern? 10, 20, 30, 40, ?",
        "answers": [
            "50",
            "60",
            "70",
            "80",
            "90"
        ],
        "correct": "50"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "If x and y are integers such that x < y and x² + y² = 25, what are the values of x and y?",
        "answers": [
            "3 and 4",
            "2 and 5",
            "1 and 5",
            "0 and 5",
            "-3 and 4"
        ],
        "correct": "3 and 4"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Hard",
        "question": "A sequence follows the rule 'n² + n + 1'. What is the fifth term?",
        "answers": [
            "27",
            "17",
            "31",
            "26",
            "21"
        ],
        "correct": "31"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "If you have six oranges and you take away four, how many do you have?",
        "answers": [
            "2",
            "4",
            "6",
            "10",
            "None"
        ],
        "correct": "4"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "What is the greatest common divisor (GCD) of 36 and 54?",
        "answers": [
            "6",
            "9",
            "18",
            "12",
            "3"
        ],
        "correct": "18"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Hard",
        "question": "In an election, Candidate A received 10% more votes than Candidate B and 20% fewer votes than Candidate C. If Candidate C received 22,000 votes, how many votes did Candidate B receive?",
        "answers": [
            "18,000",
            "19,800",
            "20,000",
            "22,000",
            "24,200"
        ],
        "correct": "20,000"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "What fraction of an hour is 45 minutes?",
        "answers": [
            "3/4",
            "1/2",
            "2/3",
            "3/5",
            "4/5"
        ],
        "correct": "3/4"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "A triangle has angles measuring 50 degrees and 60 degrees. What is the measure of the third angle?",
        "answers": [
            "70",
            "60",
            "80",
            "90",
            "50"
        ],
        "correct": "70"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Hard",
        "question": "A train travels from Station A to Station B at a speed of 80 km/h and returns at a speed of 120 km/h. What is the average speed for the round trip?",
        "answers": [
            "95 km/h",
            "100 km/h",
            "96 km/h",
            "90 km/h",
            "105 km/h"
        ],
        "correct": "96 km/h"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Easy",
        "question": "If a dozen eggs cost $1.80, what is the cost of three eggs?",
        "answers": [
            "$0.45",
            "$0.60",
            "$0.75",
            "$0.90",
            "$1.20"
        ],
        "correct": "$0.45"
    },
    {
        "category": "Math and Logic",
        "difficulty": "Medium",
        "question": "If it takes 5 workers 5 hours to build 5 cars, how many cars can 10 workers build in 10 hours?",
        "answers": [
            "10",
            "20",
            "25",
            "50",
            "100"
        ],
        "correct": "20"
    }
];