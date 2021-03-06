let title="Phrasal Verb Quiz";

let instructions = `<p> Welcome to the Phrasal Verbs quiz. You will be asked 10 questions in this quiz. You can take this quiz multiple times.</p> <p><button onclick="quizGenerator()"><p>Begin the Quiz</p></button></p>`;

let question_title=`<p> Q. Chose the meaning of the following phrasal verb: </p><p> &nbsp; &nbsp; &nbsp;`


let questions =													
   [
        {
            "question":"Bail on",
            "answer":"to cancel",
            "choices":["to cancel","to accept a challenge with confidence.","to cause something to happen, usually something negative.","to mention something","to contact multiple people"]	
        },
        {
            "question":"Bring it on",
            "answer":"to accept a challenge with confidence.",
            "choices":["to accept a challenge with confidence.","to cause something to happen, usually something negative.","to mention something","to contact multiple people","to cancel"]	
        },
        {
            "question":"Bring on",
            "answer":"to cause something to happen, usually something negative.",
            "choices":["to cause something to happen, usually something negative.","to mention(ullekh garnu) something","to contact multiple(dherai) people","to cancel","to visit someone"]
        },
        {
            "question":"Bring up",
            "answer":"to mention something",
            "choices":["to mention something","To contact multiple(dherai) people","to cancel","to visit someone","not to go to work"]
        },
        {
            "question":"Call around",
            "answer":"to contact multiple people",
            "choices":["to contact multiple(dherai) people","to cancel","to visit someone","not to go to work","to accuse(dos lagaunu) some of doing something"]
        },
        {
            "question":"Call off",
            "answer":"to cancel",
            "choices":["to cancel","to visit someone","not to go to work","to accuse some of doing something","to relax after being angry"]
        },
        {
            "question":"Call on",
            "answer":"to visit someone",
            "choices":["to visit someone","not to go to work","to accuse some of doing something","to relax after being angry","something unexpected happened"]
        },
        {
            "question":"Call out",
            "answer":"not to go to work",
            "choices":["not to go to work","to accuse some of doing something","to relax after being angry","something unexpected happened","to register at a hotel for a stay"]
        },
        {
            "question":"Call out",
            "answer":"to accuse some of doing something",
            "choices":["to accuse some of doing something","to relax after being angry","something unexpected happened","to register at a hotel for a stay","to leave a hotel"]
        },
        {
            "question":"calm down",
            "answer":"to relax after being angry",
            "choices":["to relax after being angry","something unexpected happened","to register at a hotel for a stay","to leave a hotel room","to see something or try something out in order to learn more abou it."]
        },
        {
            "question":"came up",
            "answer":"something unexpected happened",
            "choices":["something unexpected happened","to register at a hotel for a stay","to leave a hotel room","to see something or try something out in order to learn more abou it.","To support someone by giving them words of encouragement."]
        },
        {"question":"check in","answer":"to register at a hotel for a stay","choices":["to register at a hotel for a stay","hotel ko kotha (paisa sabai clear garera)","to see something or try something out in order to learn more abou it.","To support someone by giving them words of encouragement.","to get happy"]},
        {"question":"check out","answer":"hotel ko kotha (paisa sabai clear garera)","choices":["hotel ko kotha (paisa sabai clear garera)","to see something or try something out in order to learn more abou it.","To support someone by giving them words of encouragement.","to get happy","to say something to someone to make them happy"]},
        {"question":"check out","answer":"to see something or try something out in order to learn more abou it.","choices":["to see something or try something out in order to learn more abou it.","To support someone by giving them words of encouragement.","to get happy","to say something to someone to make them happy","to clean the general area."]},
        {"question":"cheer on","answer":"To support someone by giving them words of encouragement.","choices":["To support someone by giving them words of encouragement.","to get happy","to say something to someone to make them happy","to clean the general area.","to meet or find by chance"]},
        {"question":"cheer up","answer":"to get happy","choices":["to get happy","to say something to someone to make them happy","to clean the general area.","to meet or find by chance","to volunteer to give information about something, like a crime."]},
        {"question":"cheer up","answer":"to say something to someone to make them happy","choices":["to say something to someone to make them happy","to clean the general area.","to meet or find by chance","to volunteer to give information about something, like a crime.","to enter."]},
        {"question":"Clean up","answer":"to clean the general area.","choices":["to clean the general area.","to meet or find by chance","to volunteer to give information about something, like a crime.","to enter.","to encourage someone to do something."]},
        {"question":"Come across","answer":"to meet or find by chance","choices":["to meet or find by chance","to volunteer to give information about something, like a crime.","to enter.","to encourage someone to do something.","to bring up a topic, or when something happens upexpectedly"]},
        {"question":"Come forward","answer":"to volunteer to give information about something, like a crime.","choices":["to volunteer to give information about something, like a crime.","to enter.","to encourage someone to do something.","to bring up a topic, or when something happens upexpectedly","to think of an idea"]},
        {"question":"come in","answer":"to enter.","choices":["to enter.","to encourage someone to do something.","to bring up a topic, or when something happens upexpectedly","to think of an idea","to stop."]},
        {"question":"Come on","answer":"to encourage someone to do something.","choices":["to encourage someone to do something.","to bring up a topic, or when something happens upexpectedly","to think of an idea","to stop.","to interrupt someone when they are speaking."]},
        {"question":"Come up ","answer":"to bring up a topic, or when something happens upexpectedly","choices":["to bring up a topic, or when something happens upexpectedly","to think of an idea","to stop.","to interrupt someone when they are speaking.","to get the phone disconnected"]},
        {"question":"Come up (with something)","answer":"to think of an idea","choices":["to think of an idea","to stop.","to interrupt someone when they are speaking.","to get the phone disconnected","to block"]},
        {"question":"cut (it) out","answer":"to stop.","choices":["to stop.","to interrupt someone when they are speaking.","to get the phone disconnected","to block","to interrupt or stop something."]},
        {"question":"Cut in","answer":"to interrupt someone when they are speaking.","choices":["to interrupt someone when they are speaking.","to get the phone disconnected","to block","to interrupt or stop something.","to stop suplying things to or communicating with something."]},
        {"question":"cut off","answer":"to get the phone disconnected","choices":["to get the phone disconnected","to block","to interrupt or stop something.","to stop suplying things to or communicating with something.","to occupy onself with something."]},
        {"question":"cut off","answer":"to block","choices":["to block","to interrupt or stop something.","to stop suplying things to or communicating with something.","to occupy onself with something.","to do again"]},
        {"question":"cut off","answer":"to interrupt or stop something.","choices":["to interrupt or stop something.","to stop suplying things to or communicating with something.","to occupy onself with something.","to do again","to wear nice clothes"]},
        {"question":"cut off","answer":"to stop suplying things to or communicating with something.","choices":["to stop suplying things to or communicating with something.","to occupy onself with something.","to do again","to wear nice clothes","to stop by for a visit, for a short time"]},
        {"question":"Dive into","answer":"to occupy onself with something.","choices":["to occupy onself with something.","to do again","to wear nice clothes","to stop by for a visit, for a short time","to leave something or someone in their destination"]},
        {"question":"Do over","answer":"to do again","choices":["to do again","to wear nice clothes","to stop by for a visit, for a short time","to leave something or someone in their destination","to eventually become a certain way, or find oneself in a situation."]},
        {"question":"Dress up","answer":"to wear nice clothes","choices":["to wear nice clothes","to stop by for a visit, for a short time","to leave something or someone in their destination","to eventually become a certain way, or find oneself in a situation.","to break into pieces."]},
        {"question":"Drop by/in","answer":"to stop by for a visit, for a short time","choices":["to stop by for a visit, for a short time","to leave something or someone in their destination","to eventually become a certain way, or find oneself in a situation.","to break into pieces.","to drop to the ground, usually by accident"]},
        {"question":"Drop off","answer":"to leave something or someone in their destination","choices":["to leave something or someone in their destination","to eventually become a certain way, or find oneself in a situation.","to break into pieces.","to drop to the ground, usually by accident","to understand or find the answer."]},
        {"question":"End up","answer":"to eventually become a certain way, or find oneself in a situation.","choices":["to eventually become a certain way, or find oneself in a situation.","to break into pieces.","to drop to the ground, usually by accident","to understand or find the answer.","to give someone the details about something."]},
        {"question":"Fall apart","answer":"to break into pieces.","choices":["to break into pieces.","to drop to the ground, usually by accident","to understand or find the answer.","to give someone the details about something.","to fill in the blank  firm by writing  (in British English it is fill in"]},
        {"question":"Fall down","answer":"to drop to the ground, usually by accident","choices":["to drop to the ground, usually by accident","to understand or find the answer.","to give someone the details about something.","to fill in the blank  firm by writing  (in British English it is fill in","to become completely full"]},
        {"question":"figure (something) out","answer":"to understand or find the answer.","choices":["to understand or find the answer.","to give someone the details about something.","to fill in the blank  firm by writing  (in British English it is fill in","to become completely full","to discover"]},
        {"question":"Fill (someone) in","answer":"to give someone the details about something.","choices":["to give someone the details about something.","to fill in the blank  firm by writing  (in British English it is fill in","to become completely full","to discover","to have a friendly relationship with someone"]},
        {"question":"fill out (paper)","answer":"to fill in the blank  firm by writing  (in British English it is fill in","choices":["to fill in the blank  firm by writing  (in British English it is fill in","to become completely full","to discover","to have a friendly relationship with someone","to escape"]},
        {"question":"Fill up","answer":"to become completely full","choices":["to become completely full","to discover","to have a friendly relationship with someone","to escape","to escape punishment or some other unpleasantness"]},
        {"question":"Find out","answer":"to discover","choices":["to discover","to have a friendly relationship with someone","to escape","to escape punishment or some other unpleasantness","to get revenge on someone."]},
        {"question":"get along (with)","answer":"to have a friendly relationship with someone","choices":["to have a friendly relationship with someone","to escape","to escape punishment or some other unpleasantness","to get revenge on someone.","To return to someone or something."]},
        {"question":"Get away","answer":"to escape","choices":["to escape","to escape punishment or some other unpleasantness","to get revenge on someone.","To return to someone or something.","to eliminate, remove"]},
        {"question":"Get away with","answer":"to escape punishment or some other unpleasantness","choices":["to escape punishment or some other unpleasantness","to get revenge on someone.","To return to someone or something.","to eliminate, remove","to stand up, or to awake up"]},
        {"question":"Get back at","answer":"to get revenge on someone.","choices":["to get revenge on someone.","To return to someone or something.","to eliminate, remove","to stand up, or to awake up","to hand things. Out for free"]},
        {"question":"Get back to","answer":"To return to someone or something.","choices":["To return to someone or something.","to eliminate, remove","to stand up, or to awake up","to hand things. Out for free","to surrender, especially in a fight or argument"]},
        {"question":"Get rid of","answer":"to eliminate, remove","choices":["to eliminate, remove","to stand up, or to awake up","to hand things. Out for free","to surrender, especially in a fight or argument","to break down or stop working"]},
        {"question":"Get up","answer":"to stand up, or to awake up","choices":["to stand up, or to awake up","to hand things. Out for free","to surrender, especially in a fight or argument","to break down or stop working","to hand out or distribute something"]},
        {"question":"Give away","answer":"to hand things. Out for free","choices":["to hand things. Out for free","to surrender, especially in a fight or argument","to break down or stop working","to hand out or distribute something","to quit or stop doing something"]},
        {"question":"give in","answer":"to surrender, especially in a fight or argument","choices":["to surrender, especially in a fight or argument","to break down or stop working","to hand out or distribute something","to quit or stop doing something","to stop trying, surrender"]},
        {"question":"give out","answer":"to break down or stop working","choices":["to break down or stop working","to hand out or distribute something","to quit or stop doing something","to stop trying, surrender","to go in front of someonne, or to give permission to do or say something."]},
        {"question":"give out","answer":"to hand out or distribute something","choices":["to hand out or distribute something","to quit or stop doing something","to stop trying, surrender","to go in front of someonne, or to give permission to do or say something.","to go on a date with someone"]},
        {"question":"give up","answer":"to quit or stop doing something","choices":["to quit or stop doing something","to stop trying, surrender","to go in front of someonne, or to give permission to do or say something.","to go on a date with someone","to review"]},
        {"question":"Give up","answer":"to stop trying, surrender","choices":["to stop trying, surrender","to go in front of someonne, or to give permission to do or say something.","to go on a date with someone","to review","to get distant from someone, like a friend"]},
        {"question":"Go ahead","answer":"to go in front of someonne, or to give permission to do or say something.","choices":["to go in front of someonne, or to give permission to do or say something.","to go on a date with someone","to review","to get distant from someone, like a friend","to stop acting childish"]},
        {"question":"go out (with)","answer":"to go on a date with someone","choices":["to go on a date with someone","to review","to get distant from someone, like a friend","to stop acting childish","to end the phone conversation"]},
        {"question":"go over","answer":"to review","choices":["to review","to get distant from someone, like a friend","to stop acting childish","to end the phone conversation","to keep something"]},
        {"question":"Grow apart","answer":"to get distant from someone, like a friend","choices":["to get distant from someone, like a friend","to stop acting childish","to end the phone conversation","to keep something","to spend time together"]},
        {"question":"Grow up","answer":"to stop acting childish","choices":["to stop acting childish","to end the phone conversation","to keep something","to spend time together","to spend time with someone, casually"]},
        {"question":"Hand up","answer":"to end the phone conversation","choices":["to end the phone conversation","to keep something","to spend time together","to spend time with someone, casually","to end a call on the phone, especially if it's before the other person is ready."]},
        {"question":"Hang on","answer":"to keep something","choices":["to keep something","to spend time together","to spend time with someone, casually","to end a call on the phone, especially if it's before the other person is ready.","to stop yourself from doing or saying something."]},
        {"question":"Hang out","answer":"to spend time together","choices":["to spend time together","to spend time with someone, casually","to end a call on the phone, especially if it's before the other person is ready.","to stop yourself from doing or saying something.","to hold tightly"]},
        {"question":"Hang out","answer":"to spend time with someone, casually","choices":["to spend time with someone, casually","to end a call on the phone, especially if it's before the other person is ready.","to stop yourself from doing or saying something.","to hold tightly","to wait for a moment"]},
        {"question":"Hang up","answer":"to end a call on the phone, especially if it's before the other person is ready.","choices":["to end a call on the phone, especially if it's before the other person is ready.","to stop yourself from doing or saying something.","to hold tightly","to wait for a moment","to continue what you are doing"]},
        {"question":"Hold back","answer":"to stop yourself from doing or saying something.","choices":["to stop yourself from doing or saying something.","to hold tightly","to wait for a moment","to continue what you are doing","to stay at the same level as someone or something"]},
        {"question":"Hold on","answer":"to hold tightly","choices":["to hold tightly","to wait for a moment","to continue what you are doing","to stay at the same level as someone or something","to omit"]},
        {"question":"Hold on","answer":"to wait for a moment","choices":["to wait for a moment","to continue what you are doing","to stay at the same level as someone or something","to omit","to dissapoint somebody"]},
        {"question":"keep on (doing something)","answer":"to continue what you are doing","choices":["to continue what you are doing","to stay at the same level as someone or something","to omit","to dissapoint somebody","to log out of an account"]},
        {"question":"keep up with","answer":"to stay at the same level as someone or something","choices":["to stay at the same level as someone or something","to omit","to dissapoint somebody","to log out of an account","to sign out of your accont on a website or a computer"]},
        {"question":"Leave out","answer":"to omit","choices":["to omit","to dissapoint somebody","to log out of an account","to sign out of your accont on a website or a computer","to sign into your account on a website or computer."]},
        {"question":"Let down","answer":"to dissapoint somebody","choices":["to dissapoint somebody","to log out of an account","to sign out of your accont on a website or a computer","to sign into your account on a website or computer.","To take care of someone or something"]},
        {"question":"Log out","answer":"to log out of an account","choices":["to log out of an account","to sign out of your accont on a website or a computer","to sign into your account on a website or computer.","To take care of someone or something","to search for or try to find."]},
        {"question":"Log out /off","answer":"to sign out of your accont on a website or a computer","choices":["to sign out of your accont on a website or a computer","to sign into your account on a website or computer.","To take care of someone or something","to search for or try to find.","To watch out for something"]},
        {"question":"Log in (to)","answer":"to sign into your account on a website or computer.","choices":["to sign into your account on a website or computer.","To take care of someone or something","to search for or try to find.","To watch out for something","To check the meening of something"]},
        {"question":"look after","answer":"To take care of someone or something","choices":["To take care of someone or something","to search for or try to find.","To watch out for something","To check the meening of something","to faint"]},
        {"question":"Look for","answer":"to search for or try to find.","choices":["to search for or try to find.","To watch out for something","To check the meening of something","to faint","To give someone back money that you own them"]},
        {"question":"Look out","answer":"To watch out for something","choices":["To watch out for something","To check the meening of something","to faint","To give someone back money that you own them","to give someone money for a particular purpose"]},
        {"question":"Look up","answer":"To check the meening of something","choices":["To check the meening of something","to faint","To give someone back money that you own them","to give someone money for a particular purpose","to suffer because of something you did"]},
        {"question":"Pass out","answer":"to faint","choices":["to faint","To give someone back money that you own them","to give someone money for a particular purpose","to suffer because of something you did","to take revenge"]},
        {"question":"Pay back","answer":"To give someone back money that you own them","choices":["To give someone back money that you own them","to give someone money for a particular purpose","to suffer because of something you did","to take revenge","to drive to the side of the road"]},
        {"question":"pay for","answer":"to give someone money for a particular purpose","choices":["to give someone money for a particular purpose","to suffer because of something you did","to take revenge","to drive to the side of the road","to postpone"]},
        {"question":"pay for","answer":"to suffer because of something you did","choices":["to suffer because of something you did","to take revenge","to drive to the side of the road","to postpone","to get your clothes or makeup on"]},
        {"question":"Payback","answer":"to take revenge","choices":["to take revenge","to drive to the side of the road","to postpone","to get your clothes or makeup on","to extinguish a fire"]},
        {"question":"pull over","answer":"to drive to the side of the road","choices":["to drive to the side of the road","to postpone","to get your clothes or makeup on","to extinguish a fire","to irritate someone by asking the for a favor"]},
        {"question":"Put off/Put (something) off","answer":"to postpone","choices":["to postpone","to get your clothes or makeup on","to extinguish a fire","to irritate someone by asking the for a favor","to bring up something nearer"]},
        {"question":"Put on","answer":"to get your clothes or makeup on","choices":["to get your clothes or makeup on","to extinguish a fire","to irritate someone by asking the for a favor","to bring up something nearer","to tolerate or condone"]},
        {"question":"Put out","answer":"to extinguish a fire","choices":["to extinguish a fire","to irritate someone by asking the for a favor","to bring up something nearer","to tolerate or condone","to have very low or nothing in supply of something"]},
        {"question":"Put out","answer":"to irritate someone by asking the for a favor","choices":["to irritate someone by asking the for a favor","to bring up something nearer","to tolerate or condone","to have very low or nothing in supply of something","to start it again"]},
        {"question":"Put up","answer":"to bring up something nearer","choices":["to bring up something nearer","to tolerate or condone","to have very low or nothing in supply of something","to start it again","to leave the ground (by a plane)"]},
        {"question":"Put up with","answer":"to tolerate or condone","choices":["to tolerate or condone","to have very low or nothing in supply of something","to start it again","to leave the ground (by a plane)","to remove clothing"]},
        {"question":"Run out of","answer":"to have very low or nothing in supply of something","choices":["to have very low or nothing in supply of something","to start it again","to leave the ground (by a plane)","to remove clothing","to leave for a journey"]},
        {"question":"Start over","answer":"to start it again","choices":["to start it again","to leave the ground (by a plane)","to remove clothing","to leave for a journey","To remove something from a pocket or a bag."]},
        {"question":"Tak off","answer":"to leave the ground (by a plane)","choices":["to leave the ground (by a plane)","to remove clothing","to leave for a journey","To remove something from a pocket or a bag.","to take someone on a date."]},
        {"question":"Take off","answer":"to remove clothing","choices":["to remove clothing","to leave for a journey","To remove something from a pocket or a bag.","to take someone on a date.","to put in the garbage"]},
        {"question":"Take off","answer":"to leave for a journey","choices":["to leave for a journey","To remove something from a pocket or a bag.","to take someone on a date.","to put in the garbage","to vomit"]},
        {"question":"Take out","answer":"To remove something from a pocket or a bag.","choices":["To remove something from a pocket or a bag.","to take someone on a date.","to put in the garbage","to vomit","to move so that you're facing the opposite direction."]},
        {"question":"Take out","answer":"to take someone on a date.","choices":["to take someone on a date.","to put in the garbage","to vomit","to move so that you're facing the opposite direction.","to refuse"]},
        {"question":"Throw away/ throw (something) away","answer":"to put in the garbage","choices":["to put in the garbage","to vomit","to move so that you're facing the opposite direction.","to refuse","to give power and take the power away"]},
        {"question":"throw up ","answer":"to vomit","choices":["to vomit","to move so that you're facing the opposite direction.","to refuse","to give power and take the power away","To switch a maching or light on or off"]},
        {"question":"Turn around","answer":"to move so that you're facing the opposite direction.","choices":["to move so that you're facing the opposite direction.","to refuse","to give power and take the power away","To switch a maching or light on or off","to happen to be"]},
        {"question":"turn down, turn (something) down","answer":"to refuse","choices":["to refuse","to give power and take the power away","To switch a maching or light on or off","to happen to be","to appear suddenly (when something that was lost is found unexpectedly)"]},
        {"question":"turn on and Turn off","answer":"to give power and take the power away","choices":["to give power and take the power away","To switch a maching or light on or off","to happen to be","to appear suddenly (when something that was lost is found unexpectedly)","to increase or decrease the volume or strength"]},
        {"question":"Turn on/off","answer":"To switch a maching or light on or off","choices":["To switch a maching or light on or off","to happen to be","to appear suddenly (when something that was lost is found unexpectedly)","to increase or decrease the volume or strength","to start liking someone or something more as you spend more time with them."]},
        {"question":"turn out to be","answer":"to happen to be","choices":["to happen to be","to appear suddenly (when something that was lost is found unexpectedly)","to increase or decrease the volume or strength","to start liking someone or something more as you spend more time with them.","to come up with a solutio or a compromise with someone"]},
        {"question":"turn up","answer":"to appear suddenly (when something that was lost is found unexpectedly)","choices":["to appear suddenly (when something that was lost is found unexpectedly)","to increase or decrease the volume or strength","to start liking someone or something more as you spend more time with them.","to come up with a solutio or a compromise with someone","to exercise"]},
        {"question":"turn up/down , Turn (something) up/down","answer":"to increase or decrease the volume or strength","choices":["to increase or decrease the volume or strength","to start liking someone or something more as you spend more time with them.","to come up with a solutio or a compromise with someone","to exercise","to finish something"]},
        {"question":"warm up","answer":"to start liking someone or something more as you spend more time with them.","choices":["to start liking someone or something more as you spend more time with them.","to come up with a solutio or a compromise with someone","to exercise","to finish something","to happen to be"]},
        {"question":"Work (something) out","answer":"to come up with a solutio or a compromise with someone","choices":["to come up with a solutio or a compromise with someone","to exercise","to finish something","to start liking someone or something more as you spend more time with them.","To remove something from a pocket or a bag."]},
        {"question":"work out","answer":"to exercise","choices":["to exercise","to finish something","to start liking someone or something more as you spend more time with them.","to have very low or nothing in supply of something","to have very low or nothing in supply of something"]},
        {"question":"Wrap up","answer":"to finish something","choices":["to finish something","to come up with a solutio or a compromise with someone","to leave the ground (by a plane)","to have very low or nothing in supply of something","To remove something from a pocket or a bag."]}
    
    ];
																				