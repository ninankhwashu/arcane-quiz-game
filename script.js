document.addEventListener("DOMContentLoaded", () => {
  const startCard = document.getElementById("start-card");
  const chooseNationCard = document.getElementById("choose-nation");
  const instructionsCard = document.getElementById("instructions");
  const quizCarousel = document.querySelector(".card-carousel");
  const progressBar = document.getElementById("progress-bar");
  const resultsCard = document.getElementById("results");
  const resultMessage = document.getElementById("result-message");
  const scoreboardBtn = document.getElementById("scoreboard-btn");
  const scoreboardPopup = document.getElementById("scoreboard-popup");
  const scoreboardList = document.getElementById("scoreboard-list");
  const closeScoreboard = document.getElementById("close-scoreboard");

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedNation = "";
  let scoreboard = {};
  const totalQuestions = 20;

  const questions = {
    Arcane: [
      {
        question: "What is the name of Vander's bar in Zaun?",
        answers: [
          "A. The Last Drop",
          "B. The Undercity Tavern",
          "C. Zaun’s Edge",
          "D. The Chembar",
        ],
        correct: 0,
        background: "media/arcanebg.jpg",
      },
      {
        question:
          "What do Jayce and Viktor create after refining raw hextech crystals?",
        answers: [
          "A. Hexcore",
          "B. Hextech Gemstone",
          "C. Arcane Converter",
          "D. Power Cell",
        ],
        correct: 1,
        background: "media/arcanebg.jpg",
      },
      {
        question: "Who leads the Firelights?",
        answers: ["A. Marcus", "B. Ekko", "C. Silco", "D. Sevika"],
        correct: 1,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What is the primary reason Silco wants Zaun’s independence?",
        answers: [
          "A. To control Piltover",
          "B. To fulfill Vander’s dream",
          "C. To give freedom to Zaunites",
          "D. To expand his Shimmer empire",
        ],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What nickname does Powder adopt after becoming Jinx?",
        answers: [
          "A. Blue Flame",
          "B. Little Monster",
          "C. Boom Girl",
          "D. Chaos Bringer",
        ],
        correct: 1,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What does Jinx’s signature weapon, Fishbones, fire?",
        answers: [
          "A. Bombs",
          "B. Rockets",
          "C. Shimmer Gas",
          "D. Hextech Energy",
        ],
        correct: 1,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What role does Marcus play in the Piltover government?",
        answers: [
          "A. Enforcer Captain",
          "B. Hextech Researcher",
          "C. City Council Member",
          "D. Zaun Diplomat",
        ],
        correct: 0,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What does Vander sacrifice himself for in Season 1?",
        answers: [
          "A. To protect Piltover’s council",
          "B. To save Vi and Powder",
          "C. To destroy Shimmer production",
          "D. To defeat Silco",
        ],
        correct: 1,
        background: "media/arcanebg.jpg",
      },
      {
        question: "Who teaches Viktor how to enhance Hextech?",
        answers: ["A. Jayce", "B. Skye", "C. Singed", "D. Ekko"],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What does Mel’s mother, Ambessa, demand of her?",
        answers: [
          "A. To expand Hextech in Noxus",
          "B. To marry a Noxian general",
          "C. To strengthen Piltover’s military",
          "D. To return to Noxus",
        ],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What motivates Jayce to create weapons using Hextech?",
        answers: [
          "A. Safety from Zaunites",
          "B. Pressure from Mel",
          "C. Revenge against Silco",
          "D. Marcus’ suggestion",
        ],
        correct: 0,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What does Jinx do during the Piltover council meeting?",
        answers: [
          "A. Steals Hextech gemstones",
          "B. Attacks with a crystal bomb",
          "C. Kidnaps Caitlyn",
          "D. Challenges Vi to a duel",
        ],
        correct: 1,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What unique ability does Ekko use in fights?",
        answers: [
          "A. Invisibility",
          "B. Speed enhancement",
          "C. Time rewinding",
          "D. Hextech weaponry",
        ],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
      {
        question:
          "Who is the first person to die because of Viktor’s Hexcore experiments?",
        answers: ["A. Skye", "B. Singed", "C. Mel", "D. Ekko"],
        correct: 0,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What does Silco want to use Hextech for?",
        answers: [
          "A. To enhance Shimmer production",
          "B. To control Piltover entirely",
          "C. To elevate Zaun's technological capabilities",
          "D. To destroy Firelight bases",
        ],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What event does Jinx crash?",
        answers: [
          "A. The Piltover Gala",
          "B. Zaun’s Shimmer Fair",
          "C. The Hextech Showcase",
          "D. The Firelights’ Anniversary",
        ],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What causes Viktor to begin using Shimmer?",
        answers: [
          "A. To heal his illness",
          "B. To enhance the Hexcore",
          "C. To defy Jayce",
          "D. To impress Heimerdinger",
        ],
        correct: 0,
        background: "media/arcanebg.jpg",
      },
      {
        question:
          "What is the outcome of Vi and Caitlyn’s partnership in Piltover?",
        answers: [
          "A. Vi becomes a council member",
          "B. Caitlyn gains power over Marcus",
          "C. They disrupt Silco’s Shimmer operations",
          "D. They join the Firelights",
        ],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What drives Jinx to fully embrace her persona in Season 2?",
        answers: [
          "A. Her guilt over Powder’s actions",
          "B. Betrayal by Silco",
          "C. Vi’s return",
          "D. Losing the Hextech gemstone",
        ],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
      {
        question: "What does the Hexcore ultimately represent for Viktor?",
        answers: [
          "A. Hope for the future",
          "B. A tool for Piltover’s power",
          "C. His failure to transcend humanity",
          "D. Zaun’s evolution",
        ],
        correct: 2,
        background: "media/arcanebg.jpg",
      },
    ],
    Viktor: [
      {
        question: "What city is Viktor originally from?",
        answers: ["A. Piltover", "B. Zaun", "C. Noxus", "D. Shurima"],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "What illness does Viktor suffer from?",
        answers: [
          "A. Hextech Corruption",
          "B. A degenerative disease",
          "C. Shimmer Overdose",
          "D. Noxian Plague",
        ],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "What role does Viktor play in Piltover’s development?",
        answers: [
          "A. Hextech scientist",
          "B. Council member",
          "C. Enforcer captain",
          "D. Merchant",
        ],
        correct: 0,
        background: "media/viktorbg.png",
      },
      {
        question: "Who does Viktor partner with to create Hextech?",
        answers: ["A. Heimerdinger", "B. Jayce", "C. Ekko", "D. Marcus"],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "What does Viktor invent to stabilize Hextech energy?",
        answers: [
          "A. Hexcore",
          "B. Hextech Crystal",
          "C. Hexclaw",
          "D. Power Diverter",
        ],
        correct: 0,
        background: "media/viktorbg.png",
      },
      {
        question: "Why does Viktor distrust Heimerdinger?",
        answers: [
          "A. Heimerdinger disapproves of his methods",
          "B. Heimerdinger sabotages his research",
          "C. Heimerdinger prioritizes politics over innovation",
          "D. Heimerdinger collaborates with Silco",
        ],
        correct: 0,
        background: "media/viktorbg.png",
      },
      {
        question: "What motivates Viktor to continue his research on Hextech?",
        answers: [
          "A. His illness",
          "B. Wealth",
          "C. Political power",
          "D. Revenge",
        ],
        correct: 0,
        background: "media/viktorbg.png",
      },
      {
        question:
          "What nickname does Viktor gain due to his scientific endeavors?",
        answers: [
          "A. The Machine Herald",
          "B. The Chembaron",
          "C. The Innovator",
          "D. The Hexlord",
        ],
        correct: 0,
        background: "media/viktorbg.png",
      },
      {
        question: "Who enlightens Viktor in his experiments with the Hexcore?",
        answers: ["A. Jayce", "B. Skye", "C. Singed", "D. Ekko"],
        correct: 2,
        background: "media/viktorbg.png",
      },
      {
        question: "What substance does Viktor use to enhance himself?",
        answers: [
          "A. Hexcore energy",
          "B. Shimmer",
          "C. Noxian elixir",
          "D. Piltover serum",
        ],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "What is Viktor’s ultimate goal with Hexcore technology?",
        answers: [
          "A. To cure his illness",
          "B. To advance humanity",
          "C. To become Piltover’s most powerful scientist",
          "D. To destroy Zaun",
        ],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "What causes Viktor to sever ties with Jayce?",
        answers: [
          "A. Jayce’s alliance with Mel",
          "B. Jayce’s fear of Hexcore",
          "C. A political disagreement",
          "D. Heimerdinger’s influence",
        ],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "What tragic event occurs during Viktor’s experiments?",
        answers: [
          "A. Heimerdinger’s removal from the council",
          "B. Skye’s death",
          "C. Silco’s attack on Piltover",
          "D. Ekko’s Firelight ambush",
        ],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "Why does Viktor question his humanity in Season 2?",
        answers: [
          "A. His reliance on Shimmer",
          "B. His increasing attachment to Hextech augmentation",
          "C. His guilt over Skye’s death",
          "D. His isolation from Jayce",
        ],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "What does Viktor use to modify his body?",
        answers: [
          "A. Hexclaw technology",
          "B. Hexcore energy",
          "C. Shimmer and Hextech",
          "D. Noxian enhancements",
        ],
        correct: 2,
        background: "media/viktorbg.png",
      },
      {
        question:
          "What does Viktor believe is holding back Piltover’s progress?",
        answers: [
          "A. Political corruption",
          "B. Heimerdinger’s caution",
          "C. Jayce’s hesitance",
          "D. Zaun’s interference",
        ],
        correct: 1,
        background: "media/viktorbg.png",
      },
      {
        question: "Who originally introduces Viktor to science?",
        answers: ["A. Singed", "B. Heimerdinger", "C. Silco", "D. Ekko"],
        correct: 0,
        background: "media/viktorbg.png",
      },
      {
        question:
          "What does Viktor hope the Hexcore will achieve for humanity?",
        answers: [
          "A. Immortality",
          "B. Infinite energy",
          "C. Freedom from illness",
          "D. Wealth",
        ],
        correct: 2,
        background: "media/viktorbg.png",
      },
      {
        question: "What does Viktor see as the ultimate price of progress?",
        answers: [
          "A. Humanity itself",
          "B. Power",
          "C. Loss of relationships",
          "D. Zaun’s destruction",
        ],
        correct: 0,
        background: "media/viktorbg.png",
      },
      {
        question: "What is Viktor’s final goal in Season 2?",
        answers: [
          "A. To complete the Hexcore",
          "B. To destroy Piltover’s council",
          "C. To save Zaun",
          "D. To overthrow Heimerdinger",
        ],
        correct: 0,
        background: "media/viktorbg.png",
      },
    ],
    Jinx: [
      {
        question: "What is Jinx’s name before she adopts her new identity?",
        answers: ["A. Blue", "B. Sparkles", "C. Powder", "D. Little Monster"],
        correct: 2,
        background: "media/jinxbg.jpg",
      },
      {
        question:
          "Why does Powder feel responsible for the destruction of the bridge?",
        answers: [
          "A. She stole a Hextech gemstone",
          "B. Her bomb caused the explosion",
          "C. She accidentally led the Enforcers to Zaun",
          "D. She destroyed the bridge on Silco’s orders",
        ],
        correct: 1,
        background: "media/jinxbg.jpg",
      },
      {
        question:
          "Who does Powder accidentally kill during the explosion at the warehouse?",
        answers: [
          "A. Vander and Claggor",
          "B. Mylo and Claggor",
          "C. Mylo and Vi",
          "D. Silco and Marcus",
        ],
        correct: 1,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What name does Vi call Powder in a moment of anger?",
        answers: ["A. Traitor", "B. Jinx", "C. Monster", "D. Failure"],
        correct: 1,
        background: "media/jinxbg.jpg",
      },
      {
        question: "Who takes Powder in after Vi leaves her?",
        answers: ["A. Ekko", "B. Silco", "C. Marcus", "D. Sevika"],
        correct: 1,
        background: "media/jinxbg.jpg",
      },
      {
        question:
          "What weapon does Jinx use to defend herself against the Firelights in Season 1?",
        answers: [
          "A. Minigun",
          "B. Rocket Launcher",
          "C. Shimmer darts",
          "D. Hextech gauntlets",
        ],
        correct: 0,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What does Silco promise Jinx when he adopts her?",
        answers: [
          "A. Revenge against Vi",
          "B. She will never be abandoned again",
          "C. Power in Zaun",
          "D. Control over Hextech",
        ],
        correct: 1,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What motivates Powder to start calling herself Jinx?",
        answers: [
          "A. Vi’s betrayal",
          "B. Silco’s encouragement",
          "C. Her guilt over Mylo and Claggor’s deaths",
          "D. Her failed inventions",
        ],
        correct: 0,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What is the name of Jinx’s signature rocket launcher?",
        answers: [
          "A. Fishbones",
          "B. Zap Gun",
          "C. Big Boom",
          "D. Hex Blaster",
        ],
        correct: 0,
        background: "media/jinxbg.jpg",
      },
      {
        question: "Why does Jinx distrust Vi when they reunite in Season 2?",
        answers: [
          "A. She believes Vi abandoned her",
          "B. Vi sides with Caitlyn",
          "C. Silco manipulates Jinx’s feelings",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What does Jinx crash in Piltover during Season 2?",
        answers: [
          "A. Hextech Gala",
          "B. Council Meeting",
          "C. Firelight Ambush",
          "D. Zaun Trade Negotiation",
        ],
        correct: 0,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What drives Jinx’s paranoia in Season 2?",
        answers: [
          "A. Silco’s betrayal",
          "B. Vi’s alliance with Caitlyn",
          "C. Fear of losing Silco",
          "D. Her guilt over killing her friends",
        ],
        correct: 1,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What does Jinx use to attack Piltover’s council chamber?",
        answers: [
          "A. Hextech crystal bomb",
          "B. Firelight explosives",
          "C. Shimmer-powered weapon",
          "D. Hexcore destabilizer",
        ],
        correct: 0,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What is Jinx’s relationship with Silco?",
        answers: [
          "A. Father-daughter bond",
          "B. Partnership of convenience",
          "C. Rivals for Zaun’s power",
          "D. Manipulative mentor-student dynamic",
        ],
        correct: 0,
        background: "media/jinxbg.jpg",
      },
      {
        question:
          "What triggers Jinx’s emotional breakdown at the dinner table scene?",
        answers: [
          "A. Silco’s lies about Vi",
          "B. Caitlyn’s involvement in Vi’s life",
          "C. Her inability to choose between Vi and Silco",
          "D. Her guilt over Silco’s death",
        ],
        correct: 2,
        background: "media/jinxbg.jpg",
      },
      {
        question:
          "What invention of Jinx’s symbolizes her chaotic and destructive personality?",
        answers: [
          "A. Pow-Pow Minigun",
          "B. Hextech crystal bombs",
          "C. Fishbones rocket launcher",
          "D. Shimmer injectors",
        ],
        correct: 2,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What is Jinx’s greatest fear throughout Season 2?",
        answers: [
          "A. Losing her place in Zaun",
          "B. Being abandoned again",
          "C. Failing Silco",
          "D. Being defeated by Caitlyn",
        ],
        correct: 1,
        background: "media/jinxbg.jpg",
      },
      {
        question: "Who does Jinx blame for her transformation into 'Jinx'?",
        answers: ["A. Vi", "B. Silco", "C. Herself", "D. Vander"],
        correct: 0,
        background: "media/jinxbg.jpg",
      },
      {
        question: "What does Jinx call Caitlyn during their confrontation?",
        answers: [
          "A. Cupcake",
          "B. Miss Perfect",
          "C. Sheriff",
          "D. Powder Thief",
        ],
        correct: 0,
        background: "media/jinxbg.jpg",
      },
      {
        question:
          "What does Jinx choose at the end of Season 2: her past as Powder or her identity as Jinx?",
        answers: [
          "A. Powder",
          "B. Jinx",
          "C. She refuses to choose",
          "D. Both identities",
        ],
        correct: 1,
        background: "media/jinxbg.jpg",
      },
    ],
    Vi: [
      {
        question: "What is Vi’s full name?",
        answers: ["A. Violet", "B. Viktoria", "C. Vanessa", "D. Vivienne"],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "What is Vi’s role in Vander’s group?",
        answers: ["A. Leader", "B. Fighter", "C. Strategist", "D. Thief"],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "Why does Vi confront Vander in Episode 1?",
        answers: [
          "A. She wants Vander to take revenge on Silco",
          "B. She feels guilty for the failed heist",
          "C. She is frustrated with Vander’s refusal to fight back against Piltover’s oppression",
          "D. She wants to leave Zaun",
        ],
        correct: 2,
        background: "media/vibg.jpg",
      },
      {
        question: "Who convinces Vi not to fight Silco’s forces alone?",
        answers: ["A. Vander", "B. Claggor", "C. Mylo", "D. Powder"],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "What is the relationship between Vi and Powder?",
        answers: [
          "A. Best friends",
          "B. Sisters",
          "C. Teammates",
          "D. Cousins",
        ],
        correct: 1,
        background: "media/vibg.jpg",
      },
      {
        question: "Why does Vi punch Mylo in Season 1?",
        answers: [
          "A. He insults Powder",
          "B. He refuses to help Vander",
          "C. He wants to leave the group",
          "D. He loses an important item",
        ],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "What happens to Vi after the explosion caused by Powder?",
        answers: [
          "A. She is captured by Marcus",
          "B. She goes into hiding",
          "C. She joins Silco’s group",
          "D. She leaves Zaun",
        ],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "What symbol does Vi use to mark her knuckles?",
        answers: [
          "A. The number 6",
          "B. Hextech markings",
          "C. A tattoo of a fist",
          "D. The letter 'V'",
        ],
        correct: 3,
        background: "media/vibg.jpg",
      },
      {
        question: "How does Vi escape from prison?",
        answers: [
          "A. Caitlyn helps her",
          "B. She fights her way out",
          "C. Ekko breaks her out",
          "D. Marcus releases her",
        ],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "Why does Vi distrust Caitlyn at first?",
        answers: [
          "A. Caitlyn is an Enforcer",
          "B. Caitlyn works with Marcus",
          "C. Caitlyn is aligned with Silco",
          "D. Caitlyn is from Piltover",
        ],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question:
          "What weapon does Vi use to fight Silco’s enforcers in Season 2?",
        answers: [
          "A. Hextech Gauntlets",
          "B. Explosives",
          "C. A hammer",
          "D. Her bare fists",
        ],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "Why does Vi feel betrayed by Powder (Jinx)?",
        answers: [
          "A. Powder caused the deaths of Mylo and Claggor",
          "B. Powder joined Silco",
          "C. Powder attacked Piltover",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/vibg.jpg",
      },
      {
        question:
          "What does Vi think about the state of Zaun under Silco’s rule?",
        answers: [
          "A. It has improved",
          "B. It is still struggling",
          "C. It is worse than ever",
          "D. It is thriving",
        ],
        correct: 2,
        background: "media/vibg.jpg",
      },
      {
        question: "Who helps Vi infiltrate Silco’s headquarters in Season 2?",
        answers: ["A. Ekko", "B. Caitlyn", "C. Sevika", "D. Marcus"],
        correct: 1,
        background: "media/vibg.jpg",
      },
      {
        question: "What motivates Vi to continue fighting for Zaun?",
        answers: [
          "A. To honor Vander’s memory",
          "B. To save Powder",
          "C. To overthrow Silco",
          "D. To unite Piltover and Zaun",
        ],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "What nickname does Vi give to Caitlyn?",
        answers: ["A. Cupcake", "B. Sheriff", "C. Pinky", "D. Bunny"],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question:
          "What happens during Vi’s initial confrontation with Sevika in Season 1?",
        answers: [
          "A. Caitlyn saves Vi mid-fight",
          "B. Sevika escapes before Vi can defeat her",
          "C. Sevika wins the fight",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/vibg.jpg",
      },
      {
        question: "Why does Vi warn Jayce about working with the council?",
        answers: [
          "A. She distrusts Piltover politics",
          "B. She believes they will betray him",
          "C. She knows the council is corrupt",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/vibg.jpg",
      },
      {
        question: "What is Vi’s biggest regret regarding Powder?",
        answers: [
          "A. Leaving her behind",
          "B. Yelling at her after the explosion",
          "C. Trusting Marcus over Vander",
          "D. Believing Silco could protect her",
        ],
        correct: 0,
        background: "media/vibg.jpg",
      },
      {
        question: "What does Vi promise Vander before his death?",
        answers: [
          "A. To protect Powder",
          "B. To fight for Zaun’s freedom",
          "C. To take care of the family",
          "D. To seek revenge on Silco",
        ],
        correct: 2,
        background: "media/vibg.jpg",
      },
    ],
    Jayce: [
      {
        question:
          "What inspires Jayce to pursue Hextech technology when he was younger?",
        answers: [
          "A. His mother’s illness",
          "B. A life-saving encounter with magic",
          "C. His mentor’s guidance",
          "D. A vision from a mage",
        ],
        correct: 1,
        background: "media/jaycebg.jpg",
      },
      {
        question: "Who is Jayce’s mentor at the start of the series?",
        answers: [
          "A. Heimerdinger",
          "B. Viktor",
          "C. Mel Medarda",
          "D. Marcus",
        ],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question:
          "What transportation invention does Jayce help develop using Hextech?",
        answers: [
          "A. Magic crystals",
          "B. Hexgates",
          "C. Hexclaws",
          "D. Rune stones",
        ],
        correct: 1,
        background: "media/jaycebg.jpg",
      },
      {
        question: "Why does the Piltover council initially expel Jayce?",
        answers: [
          "A. For conducting illegal experiments",
          "B. For defying Heimerdinger",
          "C. For aligning with Viktor",
          "D. For working with Zaunites",
        ],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question: "Who convinces the council to give Jayce a second chance?",
        answers: [
          "A. Viktor",
          "B. Mel Medarda",
          "C. Caitlyn Kiramman",
          "D. Silco",
        ],
        correct: 1,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What is Jayce’s first major Hextech invention?",
        answers: [
          "A. Hexclaw",
          "B. Hextech gemstone",
          "C. Power core",
          "D. Hexdrive",
        ],
        correct: 1,
        background: "media/jaycebg.jpg",
      },
      {
        question: "Why does Jayce agree to work with Viktor?",
        answers: [
          "A. Viktor shares his passion for progress",
          "B. Viktor is assigned to monitor his experiments",
          "C. Viktor pressures the council",
          "D. Viktor saves his experiments from being shut down",
        ],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What event makes Jayce a hero in Piltover?",
        answers: [
          "A. Stopping a Zaunite rebellion",
          "B. Unveiling Hextech at the Progress Day celebration",
          "C. Saving the council during an attack",
          "D. Creating weapons for Enforcers",
        ],
        correct: 1,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What role is Jayce later appointed in Piltover's council?",
        answers: [
          "A. Head of Hextech Development",
          "B. Councilor",
          "C. Military Advisor",
          "D. Industrial Liaison",
        ],
        correct: 1,
        background: "media/jaycebg.jpg",
      },
      {
        question: "Why does Jayce decide to militarize Hextech?",
        answers: [
          "A. To counter Silco’s Shimmer army",
          "B. To gain control over Zaun",
          "C. To protect Piltover from foreign threats",
          "D. To satisfy the council’s demands",
        ],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What is Mel Medarda’s influence on Jayce?",
        answers: [
          "A. She mentors him on political strategy",
          "B. She funds his experiments",
          "C. She teaches him to navigate Piltover politics",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What is Jayce’s relationship with Viktor in Season 2?",
        answers: [
          "A. They remain close collaborators",
          "B. Jayce distances himself from Viktor due to the Hexcore",
          "C. Jayce sides with Viktor against Heimerdinger",
          "D. They become political rivals",
        ],
        correct: 1,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What causes Jayce to remove Heimerdinger from the council?",
        answers: [
          "A. Heimerdinger opposes Hextech development",
          "B. Heimerdinger supports Zaunite independence",
          "C. Heimerdinger wants to shut down Hexcore experiments",
          "D. Heimerdinger advises against militarizing Hextech",
        ],
        correct: 3,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What weapon does Jayce develop using Hextech?",
        answers: [
          "A. Mercury Hammer",
          "B. Hexclaw",
          "C. Hexblade",
          "D. Hexshield",
        ],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question:
          "Who does Jayce ally with to take down Silco’s Shimmer factories?",
        answers: ["A. Vi", "B. Ekko", "C. Marcus", "D. Sevika"],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What haunts Jayce after the attack on Silco’s factory?",
        answers: [
          "A. The death of a child during the mission",
          "B. Losing Viktor’s friendship",
          "C. His failure to arrest Silco",
          "D. Marcus betraying him",
        ],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What does Mel warn Jayce about regarding his growing power?",
        answers: [
          "A. He could lose himself to ambition",
          "B. He will alienate Viktor further",
          "C. The council could turn on him",
          "D. Piltover’s citizens could revolt",
        ],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question:
          "Why does Jayce hesitate to continue developing Hextech weapons?",
        answers: [
          "A. Safety concerns",
          "B. Viktor’s disapproval",
          "C. Mel’s influence",
          "D. Pressure from Zaunites",
        ],
        correct: 0,
        background: "media/jaycebg.jpg",
      },
      {
        question: "What prompts Jayce to question his vision for Piltover?",
        answers: [
          "A. Viktor’s obsession with the Hexcore",
          "B. The consequences of militarized Hextech",
          "C. Silco’s growing power",
          "D. Heimerdinger’s departure",
        ],
        correct: 1,
        background: "media/jaycebg.jpg",
      },
      {
        question:
          "What is Jayce’s ultimate goal for Hextech by the end of Season 2?",
        answers: [
          "A. To unite Piltover and Zaun",
          "B. To restore peace to Piltover",
          "C. To save Viktor from his obsession",
          "D. To harness its potential for humanity’s progress",
        ],
        correct: 3,
        background: "media/jaycebg.jpg",
      },
    ],
    Mel: [
      {
        question: "What is Mel’s position on Piltover’s council?",
        answers: [
          "A. Head of Commerce",
          "B. Diplomatic Advisor",
          "C. Industrial Liaison",
          "D. Political Strategist",
        ],
        correct: 3,
        background: "media/melbg.jpg",
      },
      {
        question: "Why does Mel support Jayce’s Hextech development?",
        answers: [
          "A. To enhance Piltover’s economy",
          "B. To weaken Heimerdinger’s influence",
          "C. To gain political leverage",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/melbg.jpg",
      },
      {
        question: "What motivates Mel’s political strategies on the council?",
        answers: [
          "A. Expanding Piltover’s influence",
          "B. Escaping her Noxian past",
          "C. Personal ambition and control",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/melbg.jpg",
      },
      {
        question: "What gift does Mel commission to honor Jayce?",
        answers: [
          "A. A golden Hextech device",
          "B. A portrait of Jayce",
          "C. A custom-designed hammer",
          "D. A Hextech medallion",
        ],
        correct: 2,
        background: "media/melbg.jpg",
      },
      {
        question: "How does Mel manipulate the council to remove Heimerdinger?",
        answers: [
          "A. By framing him for corruption",
          "B. By convincing Jayce to propose his removal",
          "C. By appealing to economic concerns",
          "D. By pressuring the other council members",
        ],
        correct: 1,
        background: "media/melbg.jpg",
      },
      {
        question: "What is Mel’s relationship with her mother, Ambessa?",
        answers: [
          "A. Supportive mentor",
          "B. Strained and distant",
          "C. Loving but competitive",
          "D. Entirely severed",
        ],
        correct: 1,
        background: "media/melbg.jpg",
      },
      {
        question: "What does Mel see as Piltover’s greatest weakness?",
        answers: [
          "A. Political stagnation",
          "B. Economic inequality",
          "C. Heimerdinger’s cautious leadership",
          "D. Zaun’s growing power",
        ],
        correct: 2,
        background: "media/melbg.jpg",
      },
      {
        question: "Why does Mel align herself with Jayce?",
        answers: [
          "A. She believes in his potential for progress",
          "B. She sees him as a tool to gain power",
          "C. She admires his ambition",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/melbg.jpg",
      },
      {
        question: "What is the name of Mel’s mother?",
        answers: ["A. Sevika", "B. Ambessa", "C. Grayson", "D. Medora"],
        correct: 1,
        background: "media/melbg.jpg",
      },
      {
        question: "What is Ambessa’s role in Noxus?",
        answers: [
          "A. Warlord",
          "B. Diplomat",
          "C. Hextech engineer",
          "D. Merchant leader",
        ],
        correct: 0,
        background: "media/melbg.jpg",
      },
      {
        question: "Why does Ambessa visit Mel in Piltover?",
        answers: [
          "A. To demand her return to Noxus",
          "B. To form an alliance with Silco",
          "C. To confront her about family betrayal",
          "D. To further her own Noxian ambitions",
        ],
        correct: 3,
        background: "media/melbg.jpg",
      },
      {
        question: "How does Mel react to Ambessa’s demands?",
        answers: [
          "A. She refuses outright",
          "B. She complies reluctantly",
          "C. She negotiates a compromise",
          "D. She agrees enthusiastically",
        ],
        correct: 0,
        background: "media/melbg.jpg",
      },
      {
        question: "What does Ambessa criticize about Mel’s leadership?",
        answers: [
          "A. Her alliance with Jayce",
          "B. Her failure to dominate Piltover’s council",
          "C. Her lack of ruthlessness",
          "D. Her neglect of Noxian values",
        ],
        correct: 2,
        background: "media/melbg.jpg",
      },
      {
        question:
          "What does Mel prioritize over her family’s warlike traditions?",
        answers: [
          "A. Diplomacy and innovation",
          "B. Military expansion",
          "C. Personal wealth",
          "D. Building Hextech weapons",
        ],
        correct: 0,
        background: "media/melbg.jpg",
      },
      {
        question:
          "What decision ultimately defines Mel’s character arc in Season 2",
        answers: [
          "A. Supporting Jayce in militarizing Hextech",
          "B. Choosing peace over her family’s warlike traditions",
          "C. Gaining full control of the council",
          "D. Sacrificing her relationship with Jayce for Piltover’s future",
        ],
        correct: 1,
        background: "media/melbg.jpg",
      },
      {
        question: "Why does Mel warn Jayce against militarizing Hextech?",
        answers: [
          "A. She fears it will destabilize Piltover",
          "B. She believes it will lead to a Zaunite rebellion",
          "C. She wants to preserve its reputation as a tool for progress",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/melbg.jpg",
      },
      {
        question: "What motivates Mel to stand against her mother’s demands?",
        answers: [
          "A. Her belief in progress through diplomacy",
          "B. Her fear of Zaun’s retaliation",
          "C. Her loyalty to Piltover",
          "D. Her resentment towards her family",
        ],
        correct: 0,
        background: "media/melbg.jpg",
      },
      {
        question: "What does Mel’s golden ring symbolize?",
        answers: [
          "A. Her connection to Jayce",
          "B. Her loyalty to Piltover",
          "C. Her Medarda family lineage",
          "D. Her ambition and power",
        ],
        correct: 3,
        background: "media/melbg.jpg",
      },
      {
        question:
          "Why does Mel support Jayce’s decision to target Silco’s operations?",
        answers: [
          "A. To prove Piltover’s strength",
          "B. To stabilize Hextech production",
          "C. To protect Piltover’s economic dominance",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/melbg.jpg",
      },
      {
        question: "What is Mel’s greatest fear by the end of Season 2?",
        answers: [
          "A. Losing control over Hextech",
          "B. Becoming like her mother",
          "C. Piltover’s descent into war",
          "D. Jayce turning against her",
        ],
        correct: 1,
        background: "media/melbg.jpg",
      },
    ],
    Ekko: [
      {
        question: "What is Ekko’s nickname?",
        answers: [
          "A. The Timekeeper",
          "B. The Boy Who Shattered Time",
          "C. The Little Rebel",
          "D. The Clockmaster",
        ],
        correct: 1,
        background: "media/ekkobg.jpg",
      },
      {
        question: "What is Ekko’s role in Vander’s group of kids?",
        answers: ["A. Scout", "B. Mechanic", "C. Inventor", "D. Lookout"],
        correct: 3,
        background: "media/ekkobg.jpg",
      },
      {
        question: "Who does Ekko look up to the most in Season 1?",
        answers: ["A. Vi", "B. Vander", "C. Mylo", "D. Silco"],
        correct: 0,
        background: "media/ekkobg.jpg",
      },
      {
        question:
          "Where does Ekko find refuge after Zaun begins to fall into chaos?",
        answers: [
          "A. Piltover",
          "B. The Firelights’ hideout",
          "C. The Last Drop",
          "D. A Shimmer lab",
        ],
        correct: 1,
        background: "media/ekkobg.jpg",
      },
      {
        question: "What is Ekko’s primary goal during Season 1?",
        answers: [
          "A. Protect and help the people of Zaun",
          "B. Destroy Silco’s Shimmer operations",
          "C. Avenge Vander’s death",
          "D. Rebuild the bridge between Piltover and Zaun",
        ],
        correct: 0,
        background: "media/ekkobg.jpg",
      },
      {
        question: "What weapon does Ekko carry with him during battles?",
        answers: [
          "A. A Hextech bomb",
          "B. A reinforced bat",
          "C. A shimmer blade",
          "D. A grappling hook",
        ],
        correct: 1,
        background: "media/ekkobg.jpg",
      },
      {
        question:
          "What secret does Ekko discover about Silco’s Shimmer operation?",
        answers: [
          "A. It is poisoning Zaun’s water supply",
          "B. It uses kidnapped children as labor",
          "C. It destabilizes Hextech crystals",
          "D. It is funded by Piltover’s council",
        ],
        correct: 1,
        background: "media/ekkobg.jpg",
      },
      {
        question: "Why does Ekko distrust Piltover’s council?",
        answers: [
          "A. They refused to help Zaunites in need",
          "B. They allied with Silco",
          "C. They destroyed his family’s home",
          "D. They sabotaged his inventions",
        ],
        correct: 0,
        background: "media/ekkobg.jpg",
      },
      {
        question: "Who eventually becomes Ekko’s primary adversary?",
        answers: ["A. Silco", "B. Jinx", "C. Marcus", "D. Sevika"],
        correct: 1,
        background: "media/ekkobg.jpg",
      },
      {
        question:
          "What is the Firelights’ main objective under Ekko’s leadership?",
        answers: [
          "A. To disrupt Silco’s Shimmer production",
          "B. To attack Piltover’s enforcers",
          "C. To overthrow the council",
          "D. To protect Hextech technology",
        ],
        correct: 0,
        background: "media/ekkobg.jpg",
      },
      {
        question: "Why does Ekko hesitate to trust Vi and Caitlyn?",
        answers: [
          "A. He believes Caitlyn represents Piltover’s oppression",
          "B. He thinks Vi abandoned Zaun",
          "C. He fears their alliance will endanger the Firelights",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/ekkobg.jpg",
      },
      {
        question:
          "What technology does Ekko use to build the Firelights’ base?",
        answers: [
          "A. Piltover’s discarded tech",
          "B. Hextech crystals",
          "C. Shimmer-fueled machinery",
          "D. Arcane energy",
        ],
        correct: 0,
        background: "media/ekkobg.jpg",
      },
      {
        question:
          "How does Ekko counter Jinx's attacks during their fight on the bridge?",
        answers: [
          "A. By using his reinforced bat",
          "B. By dodging her attacks and outmaneuvering her",
          "C. By disarming her explosives",
          "D. By appealing to her as Powder",
        ],
        correct: 1,
        background: "media/ekkobg.jpg",
      },
      {
        question: "What does Ekko’s mural in the Firelights’ base symbolize?",
        answers: [
          "A. Hope for Zaun’s future",
          "B. The history of Zaun’s struggles",
          "C. A tribute to his fallen friends",
          "D. Piltover’s oppression of Zaun",
        ],
        correct: 2,
        background: "media/ekkobg.jpg",
      },
      {
        question:
          "What unique ability does Ekko’s Hextech timepiece grant him?",
        answers: [
          "A. Slowing down time",
          "B. Rewinding time",
          "C. Freezing enemies in place",
          "D. Speeding up his movements",
        ],
        correct: 1,
        background: "media/ekkobg.jpg",
      },
      {
        question: "Why does Ekko feel conflicted about using Hextech?",
        answers: [
          "A. He fears it will fall into the wrong hands",
          "B. He doesn’t trust Piltover’s technology",
          "C. It reminds him of Jinx’s destructive power",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/ekkobg.jpg",
      },
      {
        question: "What does Ekko believe is the key to Zaun’s survival?",
        answers: [
          "A. Unity among its people",
          "B. Overthrowing Piltover",
          "C. Controlling Hextech",
          "D. Destroying Silco’s Shimmer empire",
        ],
        correct: 0,
        background: "media/ekkobg.jpg",
      },
      {
        question:
          "Who helped Ekko create his Z-Drive technology in another timeline?",
        answers: [
          "A. Viktor and Jayce",
          "B. Caitlyn and Vi",
          "C. Heimerdinger and Powder",
          "D. Claggor and Mylo",
        ],
        correct: 2,
        background: "media/ekkobg.jpg",
      },
      {
        question: "What causes Ekko to fight harder against Silco’s forces?",
        answers: [
          "A. Jinx’s betrayal",
          "B. The death of his mentor",
          "C. Silco’s destruction of a Firelights’ safehouse",
          "D. Vi’s encouragement",
        ],
        correct: 2,
        background: "media/ekkobg.jpg",
      },
      {
        question: "What is Ekko’s ultimate vision for Zaun?",
        answers: [
          "A. A city free from Piltover’s influence",
          "B. A technological utopia",
          "C. A united and self-sufficient Zaun",
          "D. A peaceful co-existence with Piltover",
        ],
        correct: 2,
        background: "media/ekkobg.jpg",
      },
    ],
    Caitlyn: [
      {
        question: "What is Caitlyn’s family known for in Piltover?",
        answers: [
          "A. Their wealth and power",
          "B. Their military history",
          "C. Their connection to Hextech",
          "D. Their status as enforcers",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "Why does Caitlyn become an enforcer?",
        answers: [
          "A. To rebel against her family",
          "B. To prove her independence",
          "C. To seek justice for her city",
          "D. To gain political influence",
        ],
        correct: 2,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "What does Ambessa call Caitlyn majority of the time?",
        answers: ["A. Cupcake", "B. Child", "C. Sheriff", "D. Hexsniper"],
        correct: 1,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "How does Caitlyn first encounter Vi?",
        answers: [
          "A. By interrogating her in prison",
          "B. During an ambush in Zaun",
          "C. While investigating Silco",
          "D. At a Piltover council event",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "Why does Caitlyn distrust Marcus?",
        answers: [
          "A. She discovers his ties to Silco",
          "B. He undermines her investigations",
          "C. He tries to frame her for misconduct",
          "D. He assigns her to unimportant cases",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "What does Caitlyn uncover about the Hextech gemstone theft?",
        answers: [
          "A. It was orchestrated by Jinx",
          "B. It was stolen by Zaunite rebels",
          "C. It was an inside job within Piltover",
          "D. It was Silco’s plan to destabilize Piltover",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "What weapon does Caitlyn specialize in using?",
        answers: [
          "A. A sniper rifle",
          "B. A Hextech crossbow",
          "C. A pistol",
          "D. A Hextech net gun",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
      {
        question:
          "How does Caitlyn prove her worth as an enforcer despite her inexperience?",
        answers: [
          "A. By uncovering Silco’s Shimmer operation",
          "B. By capturing a notorious Zaunite criminal",
          "C. By identifying corruption within the enforcers",
          "D. By saving Marcus during an ambush",
        ],
        correct: 2,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "Why does Caitlyn form a partnership with Vi?",
        answers: [
          "A. To track down Jinx",
          "B. To uncover Silco’s operations",
          "C. To protect Piltover’s Hextech",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "What causes Caitlyn to question her loyalty to Piltover?",
        answers: [
          "A. The council’s treatment of Zaun",
          "B. Marcus’s betrayal",
          "C. The council’s corruption",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "How does Caitlyn gain Vi’s trust?",
        answers: [
          "A. By standing up to Marcus",
          "B. By saving Vi from Sevika",
          "C. By helping Vi track down Jinx",
          "D. By sharing her own struggles with Piltover’s system",
        ],
        correct: 1,
        background: "media/caitlynbg.jpg",
      },
      {
        question:
          "What nickname does Jinx call Caitlyn during their confrontation?",
        answers: [
          "A. Sheriff",
          "B. Miss Perfect",
          "C. Cupcake",
          "D. Pretty Eyes",
        ],
        correct: 2,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "What has been Caitlyn’s primary motivation?",
        answers: [
          "A. To restore peace between Piltover and Zaun",
          "B. To protect Hextech from falling into the wrong hands",
          "C. To prove herself as a capable enforcer",
          "D. To help Vi confront her past",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
      {
        question:
          "How does Caitlyn react when she learns about Marcus’s betrayal?",
        answers: [
          "A. She confronts him directly",
          "B. She reports him to the council",
          "C. She secretly investigates his actions",
          "D. She works with Vi to bypass him",
        ],
        correct: 3,
        background: "media/caitlynbg.jpg",
      },
      {
        question:
          "What role does Caitlyn play in uncovering Silco’s Shimmer network?",
        answers: [
          "A. She gathers intelligence from Piltover",
          "B. She negotiates with Zaunite informants",
          "C. She leads Vi into the heart of Silco’s operation",
          "D. She sabotages a Shimmer shipment",
        ],
        correct: 2,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "What is Caitlyn’s greatest conflict in Season 2?",
        answers: [
          "A. Balancing her duty as an enforcer with her moral beliefs",
          "B. Her growing feelings for Vi",
          "C. Protecting Piltover’s citizens from Zaunite attacks",
          "D. Her distrust of the council",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "How does Caitlyn contribute to the fight against Jinx?",
        answers: [
          "A. She disarms Jinx’s traps",
          "B. She uses her sniper skills to protect Vi",
          "C. She disables Jinx’s Hextech crystal bomb",
          "D. She negotiates with Jinx",
        ],
        correct: 1,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "What does Caitlyn learn about Piltover’s treatment of Zaun?",
        answers: [
          "A. Piltover has been exploiting Zaun’s resources",
          "B. Piltover’s council funds Shimmer production",
          "C. Piltover’s enforcers turn a blind eye to Zaunite suffering",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/caitlynbg.jpg",
      },
      {
        question: "What is Caitlyn’s relationship with her family in Season 1?",
        answers: [
          "A. Strained due to her decision to become an enforcer",
          "B. Supportive, as they fund her investigations",
          "C. Distant, as they disapprove of her association with Zaunites",
          "D. Severed entirely due to political disagreements",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
      {
        question:
          "What does Caitlyn ultimately believe about justice in Piltover?",
        answers: [
          "A. It needs to be redefined to include Zaun",
          "B. It is entirely corrupt and broken",
          "C. It is achievable through Hextech innovation",
          "D. It should only protect Piltover’s citizens",
        ],
        correct: 0,
        background: "media/caitlynbg.jpg",
      },
    ],
    Ambessa: [
      {
        question: "What is Ambessa Medarda’s primary role in Noxus?",
        answers: [
          "A. Diplomat",
          "B. Warlord",
          "C. Merchant Lord",
          "D. General",
        ],
        correct: 1,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What is the name of the empire Ambessa represents?",
        answers: ["A. Zaun", "B. Piltover", "C. Shurima", "D. Noxus"],
        correct: 3,
        background: "media/ambessabg.jpg",
      },
      {
        question: "Why does Ambessa disapprove of Mel’s methods?",
        answers: [
          "A. Mel values diplomacy over war",
          "B. Mel left Noxus to join Piltover",
          "C. Mel opposes using force to achieve power",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What philosophy does Ambessa teach Mel as a child?",
        answers: [
          "A. Strength through unity",
          "B. Power is everything",
          "C. Diplomacy is weakness",
          "D. Conquer or be conquered",
        ],
        correct: 3,
        background: "media/ambessabg.jpg",
      },
      {
        question:
          "What is Ambessa’s reaction to Piltover’s peaceful governance?",
        answers: [
          "A. She admires their unity",
          "B. She views it as a weakness",
          "C. She seeks to learn from it",
          "D. She wants to destroy it",
        ],
        correct: 1,
        background: "media/ambessabg.jpg",
      },
      {
        question:
          "Why does Ambessa believe Mel is unfit for Noxian leadership?",
        answers: [
          "A. Mel prioritizes peace",
          "B. Mel focuses on trade",
          "C. Mel lacks ruthlessness",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What type of leadership does Ambessa embody?",
        answers: [
          "A. Ruthless and strategic",
          "B. Collaborative and empathetic",
          "C. Manipulative and deceitful",
          "D. Tactical but fair",
        ],
        correct: 0,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What does Ambessa offer Piltover in Season 1?",
        answers: [
          "A. Military support",
          "B. A trade alliance with Noxus",
          "C. Hextech expertise",
          "D. Diplomatic immunity",
        ],
        correct: 1,
        background: "media/ambessabg.jpg",
      },
      {
        question: "Why does Ambessa visit Mel in Piltover?",
        answers: [
          "A. To demand her return to Noxus",
          "B. To pressure her into weaponizing Hextech",
          "C. To gain influence over Piltover’s council",
          "D. To reconcile their strained relationship",
        ],
        correct: 1,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What does Ambessa criticize Mel for during their reunion?",
        answers: [
          "A. Her lack of ambition",
          "B. Her decision to exile herself",
          "C. Her attachment to Jayce",
          "D. Her failure to secure Piltover’s power",
        ],
        correct: 2,
        background: "media/ambessabg.jpg",
      },
      {
        question:
          "What does Ambessa believe is Piltover’s greatest vulnerability?",
        answers: [
          "A. Their reliance on Hextech",
          "B. Their fear of war",
          "C. Their lack of military strength",
          "D. Their internal political conflicts",
        ],
        correct: 2,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What does Ambessa warn Mel about?",
        answers: [
          "A. Trusting Jayce",
          "B. Becoming too soft",
          "C. Losing her Medarda identity",
          "D. Underestimating Noxus",
        ],
        correct: 1,
        background: "media/ambessabg.jpg",
      },
      {
        question:
          "How does Ambessa justify her ruthless approach to leadership?",
        answers: [
          "A. The ends justify the means",
          "B. Only the strong survive",
          "C. Peace is achieved through domination",
          "D. Power is the ultimate goal",
        ],
        correct: 2,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What does Ambessa want Hextech to be used for?",
        answers: [
          "A. Military weapons",
          "B. Economic growth",
          "C. Diplomatic leverage",
          "D. Industrial development",
        ],
        correct: 0,
        background: "media/ambessabg.jpg",
      },
      {
        question:
          "What is Mel's view on Ambessa's decision to banish her to Piltover?",
        answers: [
          "A. She respects the decision",
          "B. She believes it was cowardly",
          "C. She views it as a betrayal of their family",
          "D. She resented and feared her mother",
        ],
        correct: 3,
        background: "media/ambessabg.jpg",
      },
      {
        question:
          "What symbol does Ambessa wear that reflects her Noxian status?",
        answers: [
          "A. A blood-red crest",
          "B. Spiked armor",
          "C. A silver medallion",
          "D. A crimson blade",
        ],
        correct: 1,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What does Ambessa prioritize over family loyalty?",
        answers: [
          "A. Noxian conquest",
          "B. Hextech superiority",
          "C. Her personal legacy",
          "D. Zaunite collaboration",
        ],
        correct: 0,
        background: "media/ambessabg.jpg",
      },
      {
        question: "Why does Mel ultimately defy Ambessa’s expectations?",
        answers: [
          "A. Mel values diplomacy over war",
          "B. Mel refuses to weaponize Hextech",
          "C. Mel believes Piltover’s strength lies in innovation",
          "D. All of the above",
        ],
        correct: 3,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What lesson does Ambessa try to instill in Mel?",
        answers: [
          "A. Compassion leads to weakness",
          "B. Power must be seized, not given",
          "C. Family loyalty is above all else",
          "D. Trust no one, not even allies",
        ],
        correct: 1,
        background: "media/ambessabg.jpg",
      },
      {
        question: "What does Ambessa believe is the ultimate purpose of power?",
        answers: [
          "A. To dominate and conquer",
          "B. To create lasting peace",
          "C. To ensure survival",
          "D. To build a strong legacy",
        ],
        correct: 0,
        background: "media/ambessabg.jpg",
      },
    ],
  };

  document.getElementById("logo").addEventListener("click", () => {
    window.open("https://www.arcane.com/en-gb/", "_blank");
  });

  document.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.getAttribute("data-answer");
      if (answer === "no") {
        startCard.classList.add("hidden");
        document.getElementById("traitor-card").classList.remove("hidden");
      } else {
        startCard.classList.add("hidden");
        chooseNationCard.classList.remove("hidden");
      }
    });
  });

  document.getElementById("goodbye-btn").addEventListener("click", () => {
    location.reload();
  });

  document.querySelectorAll(".character-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedNation = btn.getAttribute("data-nation");
      chooseNationCard.classList.add("hidden");
      instructionsCard.classList.remove("hidden");
    });
  });

  document.getElementById("start-quiz").addEventListener("click", () => {
    instructionsCard.classList.add("hidden");
    document.getElementById("quiz-carousel").classList.remove("hidden");
    loadQuestion(selectedNation, currentQuestionIndex);
    updateProgressBar();
  });

  function loadQuestion(nation, questionIndex) {
    quizCarousel.innerHTML = "";

    const questionData = questions[nation][questionIndex];
    if (!questionData) {
      alert("No questions available for this nation.");
      return;
    }

    const card = document.createElement("div");
    card.classList.add("quiz-card");
    card.style.backgroundImage = `url(${questionData.background})`;
    card.innerHTML = `
      <h2>${questionData.question}</h2>
      <div class="answers">
        ${questionData.answers
          .map(
            (answer, i) =>
              `<button class="answer-btn" data-index="${i}">${answer}</button>`
          )
          .join("")}
      </div>
    `;
    quizCarousel.appendChild(card);

    card.querySelectorAll(".answer-btn").forEach((btn) => {
      btn.addEventListener("click", () =>
        handleAnswer(btn, questionData.correct)
      );
    });
  }

  function handleAnswer(btn, correctAnswerIndex) {
    const selectedAnswer = parseInt(btn.dataset.index);

    const allButtons = document.querySelectorAll(".answer-btn");
    allButtons[correctAnswerIndex].classList.add("button-glow-blue");

    if (selectedAnswer === correctAnswerIndex) {
      score++;
      btn.classList.add("button-shimmer");
    } else {
      btn.classList.add("button-shake");
    }

    btn.addEventListener("animationend", () => {
      btn.classList.remove("button-shake", "button-shimmer");
    });

    allButtons[correctAnswerIndex].addEventListener("animationend", () => {
      allButtons[correctAnswerIndex].classList.remove("button-glow-blue");
    });

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < totalQuestions) {
        loadQuestion(selectedNation, currentQuestionIndex);
        updateProgressBar();
      } else {
        endQuiz();
      }
    }, 2500);
  }

  function updateProgressBar() {
    progressBar.style.width = `${
      ((currentQuestionIndex + 1) / totalQuestions) * 100
    }%`;
  }

  function endQuiz() {
    document.getElementById("quiz-carousel").classList.add("hidden");
    resultsCard.classList.remove("hidden");

    let message;
    if (score === 20) {
      message = `🔥 Congratulations, You Stand Among Legends!!! 🔥`;
    } else if (score >= 15) {
      message = `You know ${selectedNation} better than anyone!`;
    } else {
      message = `Do you even know ${selectedNation}?`;
    }

    resultMessage.textContent = `You scored ${score} out of ${totalQuestions}! ${message}`;

    saveScoreToLocalStorage(selectedNation, score);

    document.getElementById("new-game").addEventListener("click", () => {
      location.reload();
    });
  }

  function loadScoreboard() {
    const scores = JSON.parse(localStorage.getItem("arcaneScores")) || {};
    scoreboardList.innerHTML = "";
    for (const [nation, score] of Object.entries(scores)) {
      const li = document.createElement("li");
      li.textContent = `${nation} Nation - ${score}`;
      scoreboardList.appendChild(li);
    }
  }

  function saveScoreToLocalStorage(nation, score) {
    const scores = JSON.parse(localStorage.getItem("arcaneScores")) || {};
    scores[nation] = `${score}/20`;
    localStorage.setItem("arcaneScores", JSON.stringify(scores));
  }

  scoreboardBtn.addEventListener("click", () => {
    loadScoreboard();
    scoreboardPopup.classList.remove("hidden");
  });

  closeScoreboard.addEventListener("click", () => {
    scoreboardPopup.classList.add("hidden");
  });
});
