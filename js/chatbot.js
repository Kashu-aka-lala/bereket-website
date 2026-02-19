// --- BERE-BOT v4.0 (Neural-Like Search & Interactive UI) ---
// Features: Levenshtein Fuzzy Matching (Typos), Context-Aware Menus, Rich Content

// 1. KNOWLEDGE GRAPH
// We structure data into 'nodes' with rich text and suggested follow-up actions (chips).
const knowledgeGraph = [
    // --- GREETING ---
    {
        id: "greeting",
        triggers: ["hi", "hello", "hey", "start", "greetings", "menu", "assist", "help"],
        response: "Hello! I am **BERE-BOT** 🤖.\n\nI can help you explore Bereket Foods. What would you like to know?",
        chips: ["Our Brands 🥣", "Leadership 🕴️", "Factory 🏭", "Contact Us 📞"]
    },

    // --- BRANDS (General) ---
    {
        id: "brands_overview",
        triggers: ["brands", "products", "items", "what do you sell", "portfolio", "catalogue", "list"],
        response: "We offer a diverse range of premium food products. Select a brand to learn more:",
        chips: ["Kuvvet (Porridge)", "Liffest (Kids)", "Niwala (Rice)", "Jarfull (Jams)", "Riverdale (Nectars)", "Jhat Hazam (Health)"]
    },
    // Specific Brands
    {
        id: "brand_kuvvet",
        triggers: ["kuvvet", "porridge", "oats", "barley", "wheat", "breakfast"],
        response: "**Kuvvet Cereals** offers the 'Power of Nutrition'.\n\n✅ **Variants:** Barley & Wheat Porridge.\n✅ **Benefits:** High fiber, heart-healthy, and energy-boosting.\n✅ **Usage:** Perfect for a wholesome family breakfast.",
        chips: ["Back to Brands", "Where to Buy?"]
    },
    {
        id: "brand_liffest",
        triggers: ["liffest", "kids", "choco", "loops", "balls", "shells", "cereal"],
        response: "**Liffest** is our kids' favorite cereal brand! 🍫\n\n✅ **Flavors:** Choco Loops, Shells, and Balls.\n✅ **Concept:** Crunchy, chocolaty fun that turns milk delicious.\n✅ **Nutrition:** Fortified with vitamins for growing kids.",
        chips: ["Back to Brands", "Partners (Carrefour)"]
    },
    {
        id: "brand_niwala",
        triggers: ["niwala", "rice", "basmati", "biryani", "pulao", "grain"],
        response: "**Niwala** brings you premium **Basmati Rice**. 🌾\n\n✅ **Quality:** Extra-long grain, aromatic, and non-sticky.\n✅ **Aged:** Perfectly aged for fluffy texture.\n✅ **Ideal For:** Royal Biryani and Pulao dishes.",
        chips: ["Back to Brands", "Factory Details"]
    },
    {
        id: "brand_jarfull",
        triggers: ["jarfull", "jam", "spread", "jelly", "marmalade"],
        response: "**Jarfull** offers 'Joy in a Jar'. 🍓\n\n✅ **Flavors:** Mixed Fruit, Apple, Mango, Strawberry.\n✅ **Quality:** Made with real fruit pulp.",
        chips: ["Back to Brands"]
    },
    {
        id: "brand_riverdale",
        triggers: ["riverdale", "nectar", "juice", "drink", "pulp"],
        response: "**Riverdale** offers refreshing Fruit Nectars. 🥤\n\n✅ **Taste:** Natural fruit goodness in every sip.\n✅ **Packaging:** Convenient bottles for on-the-go hydration.",
        chips: ["Back to Brands"]
    },
    {
        id: "brand_jhathazam",
        triggers: ["jhat hazam", "jhat", "hazam", "digestive", "gas", "acidity", "churan", "stomach"],
        response: "**Jhat Hazam** is our consumer healthcare product. 🌿\n\n✅ **Function:** Instant relief from acidity, gas, and heaviness.\n✅ **Formula:** Traditional herbal blend (Churan).\n✅ **Format:** Sachets and jars.",
        chips: ["Back to Brands"]
    },

    // --- LEADERSHIP ---
    {
        id: "leadership_overview",
        triggers: ["leadership", "team", "board", "directors", "management", "who runs", "owner"],
        response: "Our **Board of Honors** is composed of industry veterans. Who would you like to meet?",
        chips: ["CEO (Nayyer Khan)", "MD (Rana Nouman)", "COO (Faisal Hayat)", "Dir. Sales (Mufti Aitisam)", "Dir. Ops (Usama Swati)", "Non-Exec (M. Abubakar)"]
    },
    {
        id: "leader_ceo",
        triggers: ["ceo", "chief executive", "nayyer", "khan", "sardar"],
        response: "👤 **Mr. Sardar Nayyer Khan (CEO)**\n\n• **Background:** Rtd. Squadron Leader, CPA/CMA (Canada), MBA.\n• **Experience:** 30+ years in financial strategy and leadership.\n• **Vision:** Merging nature & science for global prosperity.",
        chips: ["Back to Leadership", "MD Profile"]
    },
    {
        id: "leader_md",
        triggers: ["md", "managing director", "rana", "nouman", "founder"],
        response: "👤 **Mr. Rana Muhammad Nouman (MD & Founder)**\n\n• **Experience:** 25+ years in FMCG & Healthcare.\n• **Focus:** Strategic entrepreneurship and global expansion.\n• **Mission:** Bridging modern convenience with holistic health.",
        chips: ["Back to Leadership", "CEO Profile"]
    },
    {
        id: "leader_coo",
        triggers: ["coo", "chief operating", "faisal", "omer", "hayat"],
        response: "👤 **Mr. Faisal Omer Hayat (COO & Co-Founder)**\n\n• **Education:** MBA from IBA.\n• **Track Record:** Led marketing for top national FMCGs, driving double-digit growth.",
        chips: ["Back to Leadership"]
    },
    {
        id: "leader_sales",
        triggers: ["sales", "director sales", "mufti", "aitisam", "haider"],
        response: "👤 **Mr. Mufti Aitisam Ud Din Haider (Exec. Dir Sales)**\n\n• **Experience:** Ex-Pepsi, Packages, Herbion.\n• **Role:** Driving brand excellence and market penetration.",
        chips: ["Back to Leadership"]
    },
    {
        id: "leader_ops",
        triggers: ["ops", "operations", "usama", "swati", "tech"],
        response: "👤 **Mr. Usama Khan Swati (Exec. Dir Operations)**\n\n• **Expertise:** AI, E-commerce, & Tech-Driven Management.\n• **Role:** optimizing operational frameworks.",
        chips: ["Back to Leadership"]
    },
    {
        id: "leader_nonexec",
        triggers: ["non-executive", "abubakar", "advisor"],
        response: "👤 **Mr. Muhammad Abubakar (Non-Exec Director)**\n\n• **Profile:** Certified Board Director & Business Excellence Expert.\n• **Role:** Strategic governance.",
        chips: ["Back to Leadership"]
    },

    // --- FACTORY & LOCATIONS ---
    {
        id: "factory",
        triggers: ["factory", "plant", "manufacturing", "production", "where is it made", "multan"],
        response: "🏭 **Factory Location:**\n2 Km From Bahawalpur Bypass, Bahawalpur Road, Multan.\n\nOur facility uses state-of-the-art technology and adheres to strict hygiene standards.",
        chips: ["View on Map", "Contact Us", "Home"]
    },
    {
        id: "contact",
        triggers: ["contact", "address", "location", "email", "phone", "reach", "office"],
        response: "📞 **Phone:** +92 333 5647799\n📧 **Email:** info@bereketfoods.com\n\n📍 **Islamabad (HQ):** Bahria Town Phase 8\n📍 **Canada:** Ajax, ON\n📍 **Factory:** Multan",
        chips: ["Email Us", "Home"]
    },

    // --- BUSINESS ---
    {
        id: "alliances",
        triggers: ["alliances", "partners", "carrefour", "chaseup", "private label", "b2b"],
        response: "We are a trusted B2B partner:\n\n🤝 **Carrefour:** We make 'Liffest' cereals for them.\n🤝 **ChaseUp:** We provide private label solutions.\n\nWe offer end-to-end contract manufacturing.",
        chips: ["Contact for B2B", "Home"]
    }
];

// 2. FUZZY MATCHING ALGORITHM (Levenshtein Distance)
// This allows "brnads" to match "brands" and "nayyar" to match "nayyer".
function getLevenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function findBestMatch(userInput) {
    const cleanInput = userInput.toLowerCase().trim();
    let bestNode = null;
    let minDistance = Infinity;

    // 1. Direct Keyword Scan (Fastest)
    for (const node of knowledgeGraph) {
        for (const trigger of node.triggers) {
            if (cleanInput.includes(trigger)) {
                return node; // Immediate match if phrase found
            }
        }
    }

    // 2. Fuzzy Scan (If direct match fails)
    // Only check if input is single word or short phrase
    if (cleanInput.length < 20) {
        knowledgeGraph.forEach(node => {
            node.triggers.forEach(trigger => {
                const distance = getLevenshteinDistance(cleanInput, trigger);
                // Allow 1 mistake for short words, 2 for long ones
                const allowedErrors = trigger.length > 5 ? 2 : 1;

                if (distance <= allowedErrors && distance < minDistance) {
                    minDistance = distance;
                    bestNode = node;
                }
            });
        });
    }

    return bestNode;
}

// 3. UI CONTROLLER
const chatbotToggle = document.querySelector(".chatbot-toggler");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const closeChatBtn = document.querySelector(".chatbot-header span");

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing"
        ? `<p></p>`
        : `<span><img src="assets/images/favicon.png" alt="Bereket"></span><p></p>`;
    chatLi.innerHTML = chatContent;

    // Process formatting
    const formattedMessage = message
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\n/g, '<br>');

    chatLi.querySelector("p").innerHTML = formattedMessage;
    return chatLi;
};

// Chip Creator
const createChips = (chipsArray) => {
    const chipsContainer = document.createElement("div");
    chipsContainer.classList.add("chat-chips");
    chipsContainer.style.cssText = "display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px; margin-left: 50px;"; // Basic inline style, ideally move to CSS

    chipsArray.forEach(chipText => {
        const btn = document.createElement("button");
        btn.textContent = chipText;
        btn.style.cssText = "background: #fff; border: 1px solid #724ae8; color: #724ae8; border-radius: 15px; padding: 5px 10px; cursor: pointer; font-size: 0.85rem; transition: all 0.2s;";

        btn.onmouseover = () => { btn.style.background = "#724ae8"; btn.style.color = "#fff"; };
        btn.onmouseout = () => { btn.style.background = "#fff"; btn.style.color = "#724ae8"; };

        btn.onclick = () => {
            // Send chip text as user message
            handleChat(chipText);
        };
        chipsContainer.appendChild(btn);
    });
    return chipsContainer;
};

const handleChat = (message = null) => {
    const userMsg = message || chatInput.value.trim();
    if (!userMsg) return;

    // Reset Input
    if (chatInput) {
        chatInput.value = "";
        chatInput.style.height = "auto";
    }

    // Append User Message
    chatbox.appendChild(createChatLi(userMsg, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Typing Delay
    setTimeout(() => {
        const incomingLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        // Generate Response
        setTimeout(() => {
            const match = findBestMatch(userMsg);

            if (match) {
                // Formatting
                const formattedResponse = match.response
                    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                    .replace(/\n/g, '<br>');

                incomingLi.querySelector("p").innerHTML = formattedResponse;

                // Add Chips if available
                if (match.chips) {
                    const chipsEl = createChips(match.chips);
                    chatbox.appendChild(chipsEl);
                }
            } else {
                incomingLi.querySelector("p").innerHTML = "I am **BERE-BOT** 🤖. I didn't verify that. Try asking about:<br><br>• <b>Brands</b><br>• <b>Leadership</b><br>• <b>Factory</b>";
                const fallbackChips = createChips(["View Brands", "Leadership Team", "Contact Us"]);
                chatbox.appendChild(fallbackChips);
            }

            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 500);
    }, 500);
};

// Init
if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
            e.preventDefault();
            handleChat();
        }
    });

    sendChatBtn.addEventListener("click", () => handleChat());
    closeChatBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    chatbotToggle.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
}
