const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { z } = require('zod');

const app = express();
const PORT = 5000;

// ==========================================
// 🛡️ LAYER 1: SECURE HTTP HEADERS
// ==========================================
// Helmet automatically hides X-Powered-By aur clickjacking/XSS attacks ko rokne ke liye headers set karta hai.
app.use(helmet());

// ==========================================
// 🛡️ LAYER 2: CORS RESTRICTION
// ==========================================
// Sirf aapke React frontend ko is server se baat karne ki permission dega.
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:5173', 'https://fedvision-frontend.vercel.app'];
        if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['POST', 'OPTIONS'],
}));

// ==========================================
// 🛡️ LAYER 3: PAYLOAD LIMITING & PARSER
// ==========================================
// JSON data parse karega, par 10kb se bada payload reject kar dega taaki server crash (DOS) na ho.
app.use(express.json({ limit: '10kb' }));

// ==========================================
// 🛡️ LAYER 4: RATE LIMITING (Anti-Spam)
// ==========================================
// Ek IP address se 15 minute mein sirf 5 request allow karega.
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, 
    message: { success: false, message: "Too many requests from this IP. Please try again after 15 minutes." }
});

// ==========================================
// 🛡️ LAYER 5: DATA SANITIZATION (Zod)
// ==========================================
// SQL/NoSQL Injection aur garbage data rokne ke liye strict schema.
const contactSchema = z.object({
    name: z.string().min(2, "Name is too short").max(50).trim(),
    org: z.string().min(2, "Org name is too short").max(100).trim(),
    email: z.string().email("Invalid email format").trim(),
    phone: z.string().min(10).max(15).regex(/^[0-9+\-\s]+$/, "Invalid phone number format").trim(),
    message: z.string().min(10, "Message too short").max(1000).trim(),
});

// ==========================================
// 🚀 SECURE ENDPOINT: /api/contact
// ==========================================
app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
        // 1. Check and sanitize incoming data
        const validatedData = contactSchema.parse(req.body);

        // 2. Here you securely forward data to Web3Forms using fetch from the BACKEND
        // (This keeps your API Key hidden from the browser)
        const accessKey = "e1081c39-fc20-410e-96f7-5bf652ae790d"; // Moved here from frontend
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: validatedData.name,
                organization: validatedData.org,
                email: validatedData.email,
                phone: validatedData.phone,
                message: validatedData.message,
                subject: "New FedVision Pilot Request (Verified)"
            })
        });

        const json = await response.json();

        if (response.status === 200) {
            res.status(200).json({ success: true, message: "Request received securely!" });
        } else {
            res.status(500).json({ success: false, message: "Third-party API error." });
        }

    } catch (error) {
        // Zod validation errors (e.g., user bypassed frontend validation)
        if (error instanceof z.ZodError) {
            return res.status(400).json({ success: false, message: "Invalid input data", errors: error.errors });
        }
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`🔒 Secure FedVision server running on http://localhost:${PORT}`);
});