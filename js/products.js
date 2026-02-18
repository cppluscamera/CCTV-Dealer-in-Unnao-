const products = [
    {
        id: 1,
        name: "CP Plus Dome Camera 2.4MP",
        category: "CCTV",
        price: 1250,
        image: "image/1.png",
        description: "High quality indoor graphics, night vision support.",
        specs: { resolution: "2.4MP", type: "Dome", connectivity: "Wired" }
    },
    {
        id: 2,
        name: "Hikvision Bullet Camera 2MP",
        category: "CCTV",
        price: 1450,
        image: "image/2.png",
        description: "Weatherproof outdoor camera with 20m IR range.",
        specs: { resolution: "2MP", type: "Bullet", connectivity: "Wired" }
    },
    {
        id: 3,
        name: "WiFi Smart PTZ Camera",
        category: "WiFi Spec",
        price: 2200,
        image: "image/3.png",
        description: "360-degree rotation, two-way audio, mobile app control.",
        specs: { resolution: "3MP", type: "PTZ", connectivity: "WiFi" }
    },
    {
        id: 4,
        name: "BioMetric Attendance Machine",
        category: "Biometric",
        price: 4500,
        image: "image/4.png",
        description: "Fingerprint and card access control system.",
        specs: { users: "500", type: "Fingerprint", connectivity: "USB" }
    },
    {
        id: 5,
        name: "4 Channel DVR",
        category: "Accessories",
        price: 3500,
        image: "image/5.png",
        description: "Supports up to 4 cameras, HDMI output.",
        specs: { channels: "4", resolution: "1080p", connectivity: "HDMI/VGA" }
    },
    {
        id: 6,
        name: "CCTV Cable Bundle (90m)",
        category: "Accessories",
        price: 950,
        image: "image/6.png",
        description: "Copper cabling specifically for CCTV transmission.",
        specs: { length: "90m", type: "Coaxial + Power", connectivity: "Wired" }
    },
    {
        id: 7,
        name: "IP Bullet Camera 4MP",
        category: "IP Camera",
        price: 3800,
        image: "image/7.png",
        description: "PoE supported high definition IP camera.",
        specs: { resolution: "4MP", type: "Bullet", connectivity: "PoE" }
    },
    {
        id: 8,
        name: "Wireless Doorbell Camera",
        category: "Home Security",
        price: 2800,
        image: "image/8.png",
        description: "See who is at the door from your phone.",
        specs: { resolution: "HD", type: "Doorbell", connectivity: "WiFi" }
    }
];

// Helper to get product by ID
function getProductById(id) {
    return products.find(p => p.id == id);
}
