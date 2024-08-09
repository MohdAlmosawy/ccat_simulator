const verbalQuestions = [
    {
        "category": "Verbal Reasoning",
        "difficulty": "Easy",
        "question": "Choose the word that is most nearly opposite to the word in capital letters: BRIEF.",
        "answers": ["Short", "Long", "Tiny", "Large", "Narrow"],
        "correct": "Long"
    },
    {
        "category": "Verbal Reasoning",
        "difficulty": "Medium",
        "question": "Which word, when inserted in the blank, best fits the meaning of the sentence? Despite the manager's strict demeanor, the team found him quite ________ after getting to know him.",
        "answers": ["Formidable", "Approachable", "Distant", "Ruthless", "Complicated"],
        "correct": "Approachable"
    },
    {
        "category": "Verbal Reasoning",
        "difficulty": "Hard",
        "question": "Choose the correct logical relationship: BOOK is to READING as FORK is to:",
        "answers": ["Cutting", "Eating", "Cooking", "Serving", "Washing"],
        "correct": "Eating"
    },
    {
        "category": "Verbal Reasoning",
        "difficulty": "Easy",
        "question": "Select the word that does not belong in the group.",
        "answers": ["Chair", "Sofa", "Table", "Bed", "Furniture"],
        "correct": "Furniture"
    },
    {
        "category": "Verbal Reasoning",
        "difficulty": "Medium",
        "question": "Identify the misspelled word:",
        "answers": ["Occasion", "Foreseeable", "Definately", "Threshold", "Parallel"],
        "correct": "Definately"
    },
    {
        "category": "Verbal Reasoning",
        "difficulty": "Hard",
        "question": "Complete the analogy: THREAD is to FABRIC as WORD is to:",
        "answers": ["Letter", "Sentence", "Speak", "Book", "Paragraph"],
        "correct": "Sentence"
    },
    {
        "category": "Verbal Reasoning",
        "difficulty": "Easy",
        "question": "Which word best fits the blank? She was ________ to hear that she had won the lottery.",
        "answers": ["Sad", "Devastated", "Elated", "Disappointed", "Annoyed"],
        "correct": "Elated"
    },
    {
        "category": "Verbal Reasoning",
        "difficulty": "Medium",
        "question": "Find the word that completes the pair in a similar relationship: SWORD is to WARRIOR as SCALPEL is to:",
        "answers": ["Butcher", "Doctor", "Painter", "Chef", "Carpenter"],
        "correct": "Doctor"
    },
    {
        "category": "Verbal Reasoning",
        "difficulty": "Hard",
        "question": "Select the correct sequence of words that fits the pattern of the first pair: NIGHT is to DARKNESS as SILENCE is to:",
        "answers": ["Noise", "Echo", "Sound", "Quiet", "Stillness"],
        "correct": "Quiet"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Easy",
    "question": "Choose the word that is most nearly opposite to the word in capital letters: ANXIOUS.",
    "answers": ["Worried", "Calm", "Excited", "Nervous", "Fearful"],
    "correct": "Calm"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Medium",
    "question": "Which word, when inserted in the blank, best fits the meaning of the sentence? He attempted to ________ the severity of the situation, but the facts were too glaring.",
    "answers": ["Understate", "Exaggerate", "Observe", "Analyze", "Complicate"],
    "correct": "Understate"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Hard",
    "question": "Complete the analogy: INK is to PEN as FUEL is to:",
    "answers": ["Car", "Tank", "Engine", "Fire", "Pump"],
    "correct": "Engine"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Easy",
    "question": "Select the word that does not belong in the group.",
    "answers": ["Knife", "Fork", "Spoon", "Plate", "Cup"],
    "correct": "Cup"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Medium",
    "question": "Identify the misspelled word:",
    "answers": ["Environment", "Accomodation", "Necessary", "Believe", "Separate"],
    "correct": "Accomodation"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Hard",
    "question": "Complete the analogy: LEAF is to TREE as PETAL is to:",
    "answers": ["Plant", "Rose", "Garden", "Stem", "Flower"],
    "correct": "Flower"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Easy",
    "question": "Which word best fits the blank? The news of the economic recovery has ________ the community.",
    "answers": ["Hurt", "Scared", "Uplifted", "Divided", "Damaged"],
    "correct": "Uplifted"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Medium",
    "question": "Find the word that completes the pair in a similar relationship: FISH is to SCHOOL as BIRD is to:",
    "answers": ["Flock", "Nest", "Egg", "Wing", "Beak"],
    "correct": "Flock"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Hard",
    "question": "Select the correct sequence of words that fits the pattern of the first pair: HEART is to BEAT as CLOCK is to:",
    "answers": ["Time", "Tick", "Hand", "Number", "Alarm"],
    "correct": "Tick"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Easy",
    "question": "Choose the word that is most nearly opposite to the word in capital letters: ANXIOUS.",
    "answers": ["Worried", "Calm", "Excited", "Nervous", "Fearful"],
    "correct": "Calm"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Medium",
    "question": "Which word, when inserted in the blank, best fits the meaning of the sentence? He attempted to ________ the severity of the situation, but the facts were too glaring.",
    "answers": ["Understate", "Exaggerate", "Observe", "Analyze", "Complicate"],
    "correct": "Understate"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Hard",
    "question": "Complete the analogy: INK is to PEN as FUEL is to:",
    "answers": ["Car", "Tank", "Engine", "Fire", "Pump"],
    "correct": "Engine"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Easy",
    "question": "Select the word that does not belong in the group.",
    "answers": ["Knife", "Fork", "Spoon", "Plate", "Cup"],
    "correct": "Cup"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Medium",
    "question": "Identify the misspelled word:",
    "answers": ["Environment", "Accomodation", "Necessary", "Believe", "Separate"],
    "correct": "Accomodation"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Hard",
    "question": "Complete the analogy: LEAF is to TREE as PETAL is to:",
    "answers": ["Plant", "Rose", "Garden", "Stem", "Flower"],
    "correct": "Flower"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Easy",
    "question": "Which word best fits the blank? The news of the economic recovery has ________ the community.",
    "answers": ["Hurt", "Scared", "Uplifted", "Divided", "Damaged"],
    "correct": "Uplifted"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Medium",
    "question": "Find the word that completes the pair in a similar relationship: FISH is to SCHOOL as BIRD is to:",
    "answers": ["Flock", "Nest", "Egg", "Wing", "Beak"],
    "correct": "Flock"
    },
    {
    "category": "Verbal Reasoning",
    "difficulty": "Hard",
    "question": "Select the correct sequence of words that fits the pattern of the first pair: HEART is to BEAT as CLOCK is to:",
    "answers": ["Time", "Tick", "Hand", "Number", "Alarm"],
    "correct": "Tick"
    }
];
