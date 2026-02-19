// --- BERE-BOT v4.1 (Premium Intelligence & Design) ---
// Features: Fuzzy Matching, Expanded Knowledge Graph, UI Polish

// 1. KNOWLEDGE GRAPH
const knowledgeGraph = [
    // --- GREETING ---
    {
        id: "greeting",
        triggers: ["hi", "hello", "hey", "start", "greetings", "menu", "assist", "help"],
        response: "Hello! I am **BERE-BOT** 🤖.\n\nI can help you explore Bereket Foods. What would you like to know?",
        chips: ["Our Brands 🥣", "Leadership 🕴️", "Factory 🏭", "B2B / Private Label 🤝", "Contact Us 📞"]
    },

    // --- BRANDS ---
    {
        id: "brands_overview",
        triggers: ["brands", "products", "items", "what do you sell", "portfolio", "catalogue", "list"],
        response: "We offer a diverse range of premium food products. Select a brand to learn more:",
        chips: ["Kuvvet (Porridge)", "Liffest (Kids)", "Niwala (Rice)", "Jarfull (Jams)", "Riverdale (Nectars)", "Jhat Hazam (Health)"]
    },
    {
        id: "brand_kuvvet",
        triggers: ["kuvvet", "porridge", "oats", "barley", "wheat", "breakfast"],
        response: "**Kuvvet Cereals** offers the 'Power of Nutrition'.\n\n✅ **Variants:** Barley & Wheat Porridge.\n✅ **Benefits:** High fiber, heart-healthy.\n✅ **Usage:** Perfect for a wholesome family breakfast.",
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
        response: "**Riverdale** offers refreshing Fruit Nectars. 🥤\n\n✅ **Taste:** Natural fruit goodness in every sip.",
        chips: ["Back to Brands"]
    },
    {
        id: "brand_jhathazam",
        triggers: ["jhat hazam", "jhat", "hazam", "digestive", "gas", "acidity", "churan", "stomach"],
        response: "**Jhat Hazam** is our consumer healthcare product. 🌿\n\n✅ **Function:** Instant relief from acidity, gas, and heaviness.\n✅ **Formula:** Traditional herbal blend (Churan).",
        chips: ["Back to Brands"]
    },

    // --- LEADERSHIP ---
    {
        id: "leadership_overview",
        triggers: ["leadership", "team", "board", "directors", "management", "who runs", "owner"],
        response: "Our **Board of Honors** is composed of industry veterans. Who would you like to meet?",
        chips: ["CEO (Nayyer Khan)", "MD (Rana Nouman)", "COO (Faisal Hayat)", "Leadership Page"]
    },
    {
        id: "leader_ceo",
        triggers: ["ceo", "chief executive", "nayyer", "khan", "sardar"],
        response: "👤 **Mr. Sardar Nayyer Khan (CEO)**\n\n• **Background:** Rtd. Squadron Leader, CPA/CMA (Canada).\n• **Experience:** 30+ years in financial strategy.\n• **Vision:** Merging nature & science for global prosperity.",
        chips: ["Back to Leadership", "MD Profile"]
    },
    {
        id: "leader_md",
        triggers: ["md", "managing director", "rana", "nouman", "founder"],
        response: "👤 **Mr. Rana Muhammad Nouman (MD & Founder)**\n\n• **Experience:** 25+ years in FMCG & Healthcare.\n• **Mission:** Bridging modern convenience with holistic health.",
        chips: ["Back to Leadership", "CEO Profile"]
    },

    // --- B2B & PRIVATE LABELS ---
    {
        id: "private_labels",
        triggers: ["private label", "manufacturing", "contract", "white label", "b2b", "portal"],
        response: "We are leaders in **Private Label Manufacturing** in Pakistan.\n\n🤝 **Carrefour:** We manufacture 'Liffest' cereals exclusively for them.\n🤝 **ChaseUp:** We provide own-label cereal solutions.\n\nWe offer convenience, consistent quality, and competitive pricing.",
        chips: ["Partnership Alliances", "B2B Inquiry", "Home"]
    },
    {
        id: "alliances",
        triggers: ["alliances", "partners", "who do you work with", "retailers"],
        response: "Our trusted partners include **Carrefour, ChaseUp, D. Watson, SaveMart, Rainbow, Alfatah, Daraz Mall**, and many more.",
        chips: ["Apply for Partnership", "Private Labels"]
    },

    // --- CORPORATE & ETHICS ---
    {
        id: "ethics",
        triggers: ["ethics", "compliance", "values", "integrity", "standards", "legal"],
        response: "**Bereket Foods** is committed to the highest standards of integrity.\n\n🌟 **Core Values:** Integrity, Excellence, Sustainability, and Respect.\n\nWe have a strictly enforced Code of Conduct and anonymous whistleblowing channels.",
        chips: ["Compliance Email", "Terms of Service", "Privacy Policy"]
    },
    {
        id: "careers",
        triggers: ["jobs", "careers", "hiring", "work at", "internship", "cv", "resume"],
        response: "We are always looking for exceptional talent! 🚀\n\n📍 **Status:** No open roles currently, but we accept credentials for future opportunities.\n🎓 **Internships:** We run regular internship programs for skill development.",
        chips: ["Submit CV Email", "Internship Info"]
    },

    // --- FACTORY & CONTACT ---
    {
        id: "factory",
        triggers: ["factory", "plant", "manufacturing", "production", "location", "multan"],
        response: "🏭 **Factory:** 2 Km From Bahawalpur Bypass, Bahawalpur Road, Multan.\n\nOur facility uses state-of-the-art technology and adheres to strict hygiene standards verified by laboratory testing.",
        chips: ["Contact Us", "Home"]
    },
    {
        id: "contact",
        triggers: ["contact", "address", "email", "phone", "reach", "office", "islamabad"],
        response: "📞 **Phone:** +92 333 5647799\n📧 **Email:** info@bereketfoods.com\n\n📍 **HQ:** Bahria Town Phase 8, Islamabad\n📍 **International:** Ajax, ON, Canada",
        chips: ["Email Us", "Home"]
    }
];

// 2. FUZZY MATCHING
function getLevenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
    }
    return matrix[b.length][a.length];
}

function findBestMatch(userInput) {
    const cleanInput = userInput.toLowerCase().trim();
    let bestNode = null;
    let minDistance = Infinity;

    for (const node of knowledgeGraph) {
        for (const trigger of node.triggers) {
            if (cleanInput.includes(trigger)) return node;
        }
    }

    if (cleanInput.length < 25) {
        knowledgeGraph.forEach(node => {
            node.triggers.forEach(trigger => {
                const distance = getLevenshteinDistance(cleanInput, trigger);
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

    const formattedMessage = message
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\n/g, '<br>');

    chatLi.querySelector("p").innerHTML = formattedMessage;
    return chatLi;
};

const createChips = (chipsArray) => {
    const chipsContainer = document.createElement("div");
    chipsContainer.classList.add("chat-chips");

    chipsArray.forEach(chipText => {
        const btn = document.createElement("button");
        btn.textContent = chipText;
        btn.onclick = () => handleChat(chipText);
        chipsContainer.appendChild(btn);
    });
    return chipsContainer;
};

const handleChat = (message = null) => {
    const userMsg = message || chatInput.value.trim();
    if (!userMsg) return;

    if (chatInput) {
        chatInput.value = "";
        chatInput.style.height = "auto";
    }

    chatbox.appendChild(createChatLi(userMsg, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Simulated Thinking Delay
    setTimeout(() => {
        const incomingLi = createChatLi("...", "incoming");
        chatbox.appendChild(incomingLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        setTimeout(() => {
            const match = findBestMatch(userMsg);
            if (match) {
                const formattedResponse = match.response
                    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                    .replace(/\n/g, '<br>');
                incomingLi.querySelector("p").innerHTML = formattedResponse;
                if (match.chips) chatbox.appendChild(createChips(match.chips));
            } else {
                incomingLi.querySelector("p").innerHTML = "I'm **BERE-BOT** 🤖. I couldn't find a direct answer. Would you like to check our **Brands**, **Leadership**, or **Private Label** solutions?";
                chatbox.appendChild(createChips(["Our Brands 🥣", "Leadership 🕴️", "Private Labels 🤝", "Contact Us 📞"]));
            }
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    }, 400);
};

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
