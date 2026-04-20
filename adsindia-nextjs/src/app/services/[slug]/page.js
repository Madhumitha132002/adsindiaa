"use client";
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  LayoutGrid, 
  ShieldCheck, 
  Zap, 
  Clock, 
  BarChart3, 
  Lock,
  ChevronRight
} from 'lucide-react';

// Map specific videos and images to each service from the /images/new/ directory
const servicesData = {
  'promotional-sms': {
    h1: "Bulk Promotional SMS Services — Instant Reach, High ROI",
    title: "Promotional SMS",
    subtitle: "Launch high-impact SMS campaigns that reach your audience instantly. Our proprietary DND bypass ensures maximum delivery.",
    desc: "Promotional SMS is the cornerstone of agile marketing. Whether you're launching a flash sale or announcing a new product, our platform ensures your message lands directly in your customer's pocket. With advanced scheduling and real-time tracking, you're always in control of your campaign's performance.",
    icon: "fas fa-bullhorn",
    video: "/images/new/Promotional.mp4",
    features: [
      { icon: "fas fa-filter", title: "Smart DND Filtering", desc: "Our intelligent routing automatically checks DND status to ensure compliant, high-delivery campaigns." },
      { icon: "fas fa-clock", title: "Automated Scheduling", desc: "Plan your campaigns ahead of time and reach your customers during peak engagement hours." },
      { icon: "fas fa-chart-line", title: "Real-Time Tracking", desc: "Monitor delivery rates and conversion paths with our integrated SMART Link technology." },
      { icon: "fas fa-shield-alt", title: "Secure Infrastructure", desc: "Data protection is our priority, with enterprise-grade encryption for all your contact lists." }
    ],
    process: [
      { step: "01", title: "List Integration", desc: "Securely upload your contact database or sync via our dedicated API." },
      { step: "02", title: "Content Design", desc: "Craft your message with personalized variables and clear calls to action." },
      { step: "03", title: "Strategic Launch", desc: "Review your campaign and deploy instantly or schedule for a future date." },
      { step: "04", title: "Insight Analysis", desc: "Analyze performance reports to continuously optimize your marketing spend." }
    ],
    benefits: ["✅ Instant bulk delivery", "✅ Certified DND compliance", "✅ 99.9% message uptime", "✅ Personalized sender IDs"],
    images: ["/images/new/684ba8c14f7e2d3b7021b6f2_Frame 4273209-p-1600.webp", "/images/new/bulk-sms-services.webp", "/images/new/WhatisBulkSMS-cXSjF65N.webp", "/images/new/V1_SMS-vs-RCS_980x460px-1024x481.webp"],
    ctaText: "Launch Campaign"
  },
  'whatsapp-marketing': {
    h1: "WhatsApp Marketing Solutions — Engage, Automate, Scale",
    title: "WhatsApp Marketing",
    subtitle: "Transform your customer engagement with official WhatsApp broadcasting and automated workflows.",
    desc: "Reach your customers where they are most active. Our WhatsApp marketing platform allows you to send rich media messages, automate responses, and manage conversations at scale. From abandoned cart reminders to automated customer support, build meaningful relationships through the world's most popular messaging app.",
    icon: "fab fa-whatsapp",
    video: "/images/new/Whatsapp Demo.mp4",
    features: [
      { icon: "fas fa-robot", title: "Automated Chatbots", desc: "Deploy AI-driven bots to handle common queries and guide customers through the sales funnel 24/7." },
      { icon: "fas fa-users", title: "Shared Team Inbox", desc: "Collaborate effortlessly with a unified inbox that allows multiple agents to manage customer chats." },
      { icon: "fas fa-photo-video", title: "Rich Media Assets", desc: "Send engaging videos, high-res images, and interactive catalogs to showcase your products." },
      { icon: "fas fa-mouse-pointer", title: "Interactive Buttons", desc: "Increase conversion rates with clickable CTA buttons directly within your messages." }
    ],
    process: [
      { step: "01", title: "Official Onboarding", desc: "We guide you through the process of setting up your official WhatsApp Business API." },
      { step: "02", title: "Workflow Automation", desc: "Define your chatbot logic and message templates for maximum efficiency." },
      { step: "03", title: "Scale Deployment", desc: "Integrate with your current CRM to trigger automated, the right message at the right time." },
      { step: "04", title: "Optimization", desc: "Track response times and conversion metrics to refine your communication strategy." }
    ],
    benefits: ["✅ Verified Business Profile", "✅ Real-time multi-agent support", "✅ Advanced drip automation", "✅ Official Meta API integration"],
    images: ["/images/new/WhatsApp-Chatbot-Automate.webp", "/images/new/WhatsApp-Bluetick.webp", "/images/new/689c33d44ce1f2e463c4a8ac_Whatsapp chatbot builder-p-1600.webp", "/images/new/689c301c1ae7b481d0e33317_whatsapp chatbot.webp"],
    ctaText: "Start Campaign"
  },
  'dynamic-sms': {
    h1: "Dynamic SMS Personalization — One Message, Infinite Variations",
    title: "Dynamic SMS",
    subtitle: "Deliver hyper-personalized bulk messages that feel like 1-on-1 conversations.",
    desc: "Generic bulk SMS is a thing of the past. Our Dynamic SMS engine allows you to inject unique data points for every recipient—from names and account balances to order statuses and custom appointment times. Elevate your engagement by talking to your customers as individuals, not numbers.",
    icon: "fas fa-sync",
    video: "/images/new/Sms Demo.mp4",
    features: [
      { icon: "fas fa-user-tag", title: "Smart Variable Mapping", desc: "Map any CSV column or API field directly into your message templates with zero Latency." },
      { icon: "fas fa-chart-pie", title: "Dynamic A/B Testing", desc: "Test different personalization strategies to see which variables drive the most clicks." },
      { icon: "fas fa-server", title: "Robust REST API", desc: "Seamlessly integrate dynamic triggers into your existing software stack and backend systems." },
      { icon: "fas fa-eye", title: "Instant Live Preview", desc: "See exactly what each recipient will receive with our real-time data visualization tool." }
    ],
    process: [
      { step: "01", title: "Data Preparation", desc: "Upload your contact source file containing the unique variables for each recipient." },
      { step: "02", title: "Template Logic", desc: "Construct your message using intuitive placeholders for your dynamic data points." },
      { step: "03", title: "System Validation", desc: "Our engine validates your data structure to ensure error-free personalization at scale." },
      { step: "04", title: "Rapid Delivery", desc: "Send thousands of unique, personalized messages in seconds across our fast routes." }
    ],
    benefits: ["✅ Infinite variable mapping", "✅ Real-time API triggers", "✅ Bulk CSV support", "✅ Detailed delivery logs"],
    images: ["/images/new/Frame-1.webp", "/images/new/dynamic-img22.webp", "/images/new/WhatsApp-Dynamic-Message.webp", "/images/new/673d214247579fc17d125657_01 - Dynamic Content.webp"],
    ctaText: "Get Personal"
  },
  'otp-sms': {
    h1: "Secure OTP SMS Solutions — Instant Authentication, Global Routing",
    title: "Secure OTP SMS",
    subtitle: "Bank-grade security delivered in milliseconds. Protecting your users, securing your reputation.",
    desc: "In the digital age, security is mission-critical. Our OTP SMS gateway is engineered for maximum speed and reliability, delivering authentication codes globally in under 3 seconds. With redundant routing and intelligent failover systems, we ensure your users are never kept waiting for access.",
    icon: "fas fa-key",
    video: "/images/new/Otp video.mp4",
    features: [
      { icon: "fas fa-bolt", title: "Sub-3s Delivery", desc: "Our high-priority routes are dedicated to time-sensitive authentication codes." },
      { icon: "fas fa-shield-virus", title: "Global Security Path", desc: "Verified delivery across international borders with full regulatory compliance." },
      { icon: "fas fa-code-branch", title: "Developer-First API", desc: "Clean, well-documented API with SDKs available for all major programming languages." },
      { icon: "fas fa-redo", title: "Auto-Failover Logic", desc: "If a primary route fails, our system instantly switches to a secondary path for guaranteed delivery." }
    ],
    process: [
      { step: "01", title: "API Configuration", desc: "Integrate our secure endpoints into your application's authentication flow." },
      { step: "02", title: "DLT Registration", desc: "We handle the complexities of DLT template registration for uninterrupted service." },
      { step: "03", title: "Real-time Testing", desc: "Verify your implementation in our sandbox environment before going live." },
      { step: "04", title: "Live Monitoring", desc: "Keep track of delivery latency and successful authentication rates via our dashboard." }
    ],
    benefits: ["✅ Millisecond delivery global", "✅ 99.99% uptime guarantee", "✅ Direct carrier connections", "✅ Detailed audit trails"],
    images: ["/images/new/OTP-SMS.webp", "/images/new/OTP-SMS-Step-by-step.webp", "/images/new/Two-factor-authentication-2FA.webp", "/images/new/unlimited-otp-sender-image-from-shree-tripada-01.webp"],
    ctaText: "Secure App"
  },
  'transactional-sms': {
    h1: "Transactional SMS Alerts — Reliable Business Notifications",
    title: "Transactional SMS",
    subtitle: "Deliver mission-critical business alerts, order updates, and confirmations instantly.",
    desc: "Keep your customers informed at every step of their journey. Transactional SMS is used for essential notifications like order confirmations, shipping updates, and account alerts. Our service ensures these critical messages arrive instantly, regardless of the recipient's DND status.",
    icon: "fas fa-shield-alt",
    video: "/images/new/Sms Video.mp4",
    features: [
      { icon: "fas fa-check-double", title: "DND Bypass", desc: "Legal bypass for transactional content ensures your customers always receive their vital updates." },
      { icon: "fas fa-plug", title: "ERP/CRM Integration", desc: "Easily connect with your existing business software to trigger automatic alerts." },
      { icon: "fas fa-tachometer-alt", title: "High Throughput", desc: "Our infrastructure handles massive volumes of concurrent transactions without Latency." },
      { icon: "fas fa-file-invoice", title: "Detailed Invoicing", desc: "Track every single transactional message with comprehensive usage and delivery logs." }
    ],
    process: [
      { step: "01", title: "Template Setup", desc: "Define your transactional message templates for various business triggers." },
      { step: "02", title: "DLT Verification", desc: "We ensure your templates are correctly registered for transactional delivery." },
      { step: "03", title: "Trigger Integration", desc: "Set up the logic to auto-fire messages based on specific user actions." },
      { step: "04", title: "Delivery Oversight", desc: "Monitor success rates and latency through our advanced reporting dashboard." }
    ],
    benefits: ["✅ 24/7 service availability", "✅ Superior delivery rates", "✅ Automatic routing logic", "✅ Full regulatory support"],
    images: ["/images/new/transactional-sms.webp", "/images/new/transactional-sms-vs-otp-sms-for-business-01.webp", "/images/new/Payment-alerts.webp", "/images/new/smsg-low-cost-high-return-communications-with-transactional-sms-use-case.svg"],
    ctaText: "Get Started"
  },
  'web-design': {
    h1: "Web & App Development — High-Performance Digital Experiences",
    title: "Web Development",
    subtitle: "We build lightning-fast, SEO-optimized web applications designed for conversion and scale.",
    desc: "Your digital presence is your most valuable asset. We focus on building modern web experiences that are not only visually stunning but also technically superior. Using cutting-edge technologies like Next.js, we ensure your site is fast, secure, and ready to grow with your business.",
    icon: "fas fa-laptop-code",
    video: "/images/new/ADS2.mp4",
    features: [
      { icon: "fas fa-code", title: "Clean, Scalable Code", desc: "We write efficient, modular code that's easy to maintain and built for long-term growth." },
      { icon: "fas fa-search-dollar", title: "SEO-First Engineering", desc: "Performance optimization and search visibility are baked into our development lifecycle." },
      { icon: "fas fa-lock", title: "Enterprise Security", desc: "Robust protection against web vulnerabilities, ensuring your data and users stay safe." },
      { icon: "fas fa-rocket", title: "Core Web Vitals", desc: "We optimize for speed to ensure your site hits top performance scores across all devices." }
    ],
    process: [
      { step: "01", title: "Strategic Discovery", desc: "We analyze your business goals to define the perfect technical architecture." },
      { step: "02", title: "Agile Development", desc: "Iterative building with regular updates, ensuring the product evolves exactly as needed." },
      { step: "03", title: "Rigorous QA", desc: "Extensive testing across devices and browsers to ensure a flawless user experience." },
      { step: "04", title: "Launch & Growth", desc: "Continuous monitoring and updates to keep your application at the peak of performance." }
    ],
    benefits: ["✅ Future-proof technologies", "✅ Mobile-first responsive design", "✅ Optimized for conversion", "✅ Ongoing technical support"],
    images: ["/images/new/680a1b80b7a094ef37ed03b5_Frame 1805.webp", "/images/new/unnamed.webp", "/images/new/Frame-1.webp", "/images/new/680a085726eaba22160edee4_Frame 1871.webp"],
    ctaText: "Start Build"
  },
  'graphic-design': {
    h1: "Digital Branding & Identity — Visual Storytelling for Modern Brands",
    title: "Digital Branding",
    subtitle: "Elevate your brand with award-winning design and cohesive visual identity systems.",
    desc: "Design is the silent ambassador of your brand. Our creative team crafts visual narratives that build immediate trust and recognition. From impactful logos to comprehensive social media identities, we create the visuals that define your position in the market.",
    icon: "fas fa-palette",
    video: "/images/new/ADS.mp4",
    features: [
      { icon: "fas fa-vector-square", title: "Logo & Brand Mark", desc: "Unique, scalable identities that represent your core values across all platforms." },
      { icon: "fas fa-swatchbook", title: "Color & Typography", desc: "Scientifically chosen palettes and fonts that evoke the right emotions in your audience." },
      { icon: "fas fa-object-ungroup", title: "Consistency Guidelines", desc: "Comprehensive brand books to ensure your visual identity remains unified globally." },
      { icon: "fas fa-magic", title: "Creative Campaigns", desc: "High-impact assets for social media, advertising, and marketing materials." }
    ],
    process: [
      { step: "01", title: "Creative Intake", desc: "We dive deep into your brand voice, history, and future aspirations." },
      { step: "02", title: "Conceptualization", desc: "Iterative design phase exploring various visual directions for your brand." },
      { step: "03", title: "Refined Execution", desc: "Polishing the chosen concepts into high-fidelity final assets." },
      { step: "04", title: "Full Asset Delivery", desc: "You receive all source files and exports optimized for both digital and print." }
    ],
    benefits: ["✅ 100% custom creatives", "✅ Comprehensive brand equity", "✅ High-res print ready", "✅ Rapid revision cycle"],
    images: ["/images/new/images (3).webp", "/images/new/67de09cdde4d25cc629cace8_Frame 627.webp", "/images/new/67de09cde8303b99c5e129e4_Frame 628.webp", "/images/new/67de09cdd0d30f0945cf00a1_Frame 1867.webp"],
    ctaText: "Get Design"
  },
  'meta-ads': {
    h1: "Meta & Facebook Ads Management — Data-Driven Performance",
    title: "Meta Ads",
    subtitle: "Scale your revenue with high-ROI Meta ad campaigns designed for precision and results.",
    desc: "Don't just spend on ads—invest in growth. Our Meta Ads experts specialize in crafting data-driven strategies for Facebook and Instagram. From creative design to precision audience targeting, we manage every aspect of your campaign to ensure maximum ROAS.",
    icon: "fab fa-facebook",
    video: "/images/new/ADS3.mp4",
    features: [
      { icon: "fas fa-bullseye", title: "Laser Targeting", desc: "We identify and reach your most profitable audiences with behavioral and interest mapping." },
      { icon: "fas fa-pencil-ruler", title: "Performance Creatives", desc: "Ad designs specifically engineered to stop the scroll and drive clicks." },
      { icon: "fas fa-funnel-dollar", title: "Funnel Optimization", desc: "Strategic remarketing and conversion tracking to maximize every ad dollar spent." },
      { icon: "fas fa-microscope", title: "Daily Optimization", desc: "Continuous monitoring and bid adjustments to keep your CPA at its lowest possible." }
    ],
    process: [
      { step: "01", title: "Deep Audit", desc: "We analyze your current performance and identifying scaling opportunities." },
      { step: "02", title: "Strategic Setup", desc: "Configuration of pixel, tracking, and campaign naming conventions for clear reporting." },
      { step: "03", title: "Creative Launch", desc: "Deploying high-impact ads across multiple ad sets for data gathering." },
      { step: "04", title: "Scale Phase", desc: "Scaling budget on winning combinations while continuously testing new hooks." }
    ],
    benefits: ["✅ Dedicated account manager", "✅ Transparent ROI reporting", "✅ Creative A/B testing", "✅ Full pixel configuration"],
    images: ["/images/new/meta-2.webp", "/images/new/Meta-Ads-What-types-of-ads-are-available-blog-image.--scaled.webp", "/images/new/680a1b81b51aca53d898923a_Frame 1804-2.webp", "/images/new/682456f5d1fcc9b5c1f6929d_Frame 1865-p-1600.webp"],
    ctaText: "Deploy Ads"
  },
  'voice-solutions': {
    h1: "Voice & IVR Solutions — Professional Business Communication",
    title: "Voice Solutions",
    subtitle: "Enhance your professional image with automated IVR, missed call services, and voice broadcasts.",
    desc: "Communicate with a human touch at digital scale. Our voice solutions provide everything from professional IVR menus to automated voice reminders. Build a sophisticated brand presence that handles high call volumes effortlessly while providing a seamless caller experience.",
    icon: "fas fa-phone",
    video: "/images/new/ADS2.mp4",
    features: [
      { icon: "fas fa-sitemap", title: "Multi-Level IVR", desc: "Create sophisticated call routing menus to guide customers to the right department instantly." },
      { icon: "fas fa-phone-slash", title: "Missed Call Marketing", desc: "Boost lead generation by allowing customers to show interest with a simple zero-cost missed call." },
      { icon: "fas fa-bullhorn", title: "Voice Broadcasting", desc: "Send pre-recorded audio messages to thousands of customers simultaneously for alerts and promotions." },
      { icon: "fas fa-headset", title: "Virtual Number", desc: "Get a dedicated professional number to manage all your business communications effortlessly." }
    ],
    process: [
      { step: "01", title: "Call Flow Design", desc: "We map your ideal customer calling experience and department routing logic." },
      { step: "02", title: "Script Recording", desc: "Professional voice-over or high-quality AI speech for your IVR and broadcasts." },
      { step: "03", title: "System Configuration", desc: "Setting up the virtual numbers and cloud-based call management infrastructure." },
      { step: "04", title: "Launch & Analytics", desc: "Go live and track call duration, department traffic, and missed call conversions." }
    ],
    benefits: ["✅ Professional brand image", "✅ Automated call handling", "✅ Scalable cloud infrastructure", "✅ Detailed call recording"],
    images: ["/images/new/Route-Mobile_Products_Voice_IVR_Banner-copy.webp", "/images/new/images (6).webp", "/images/new/images (7).webp", "/images/new/images (8).webp"],
    ctaText: "Request Quote"
  },
  'rcs-messaging': {
    h1: "RCS Business Messaging — The Next Generation of Texting",
    title: "RCS Messaging",
    subtitle: "Upgrade to verified, high-impact rich media messages directly in the native messaging app.",
    desc: "RCS (Rich Communication Services) is the evolution of SMS. It brings the power of app-like experiences—including carousels, maps, and payment buttons—directly into the native messaging inbox of your customers' Android devices. Verified sender IDs build instant trust and drive significantly higher engagement.",
    icon: "fas fa-comment-dots",
    video: "/images/new/Sms Video.mp4",
    features: [
      { icon: "fas fa-check-circle", title: "Verified Branding", desc: "Every message is delivered from a verified business profile, including your company logo." },
      { icon: "fas fa-images", title: "Rich Media Gallery", desc: "Showcase products with high-resolution images, videos, and interactive carousels." },
      { icon: "fas fa-terminal", title: "Action Buttons", desc: "Guide users with suggested replies and one-click actions like 'Open Maps' or 'Track Order'." },
      { icon: "fas fa-chart-area", title: "Read Receipts", desc: "Advanced tracking including read receipts and button click metrics for precise analysis." }
    ],
    process: [
      { step: "01", title: "Brand Verification", desc: "We assist with the official Google brand registration for the RCS ecosystem." },
      { step: "02", title: "Message Design", desc: "Creating rich media templates with integrated buttons and carousel logic." },
      { step: "03", title: "Fallback Logic", desc: "Setting up automatic SMS fallback to ensure reach when RCS is unavailable." },
      { step: "04", title: "Campaign Deploy", desc: "Execute high-impact rich messaging campaigns and monitor user interactions." }
    ],
    benefits: ["✅ 5x higher engagement", "✅ Verified blue tick trust", "✅ No app download required", "✅ Native rich-media experience"],
    images: ["/images/new/rcs1.webp", "/images/new/V1_SMS-vs-RCS_980x460px-1024x481.webp", "/images/new/680a085693e0014238588223_Frame 1875.webp", "/images/new/680a08561620645eca9fc69b_Frame 1874.webp"],
    ctaText: "Upgrade to RCS"
  },
  'ai-workflows': {
    h1: "AI-Driven Business Workflows — Automate Your Success",
    title: "AI Workflows",
    subtitle: "Streamline your operations with intelligent automation that syncs your CRM and communications.",
    desc: "Move faster with business processes that run themselves. Our AI workflow automation connects your website, CRM, and messaging platforms into a single intelligent ecosystem. Eliminate repetitive tasks, reduce response times, and ensure no lead ever falls through the cracks.",
    icon: "fas fa-brain",
    video: "/images/new/Background wave gradient.mp4",
    features: [
      { icon: "fas fa-link", title: "Seamless Integration", desc: "Connect your entire tech stack—from Google Sheets to Salesforce—with custom AI logic." },
      { icon: "fas fa-magic", title: "Intelligent Triggering", desc: "Advanced logic that understands user intent and fires the personalized action." },
      { icon: "fas fa-database", title: "Live Data Sync", desc: "Keep all your platforms perfectly synchronized in real-time with automated updates." },
      { icon: "fas fa-chart-network", title: "Dynamic Routing", desc: "Automatically route leads and queries based on priority, location, or user behavior." }
    ],
    process: [
      { step: "01", title: "Process Mapping", desc: "We identify the bottlenecks in your current manual business processes." },
      { step: "02", title: "Automation Design", desc: "Architecting the technical flow between your different software platforms." },
      { step: "03", title: "AI Integration", desc: "Deploying the intelligent triggers and custom scripts to run your workflows." },
      { step: "04", title: "Continuous Refine", desc: "Monitoring the automated flows and refining them for maximum speed and accuracy." }
    ],
    benefits: ["✅ Zero manual data entry", "✅ Instant lead responses", "✅ Error-free processing", "✅ 24/7 autonomous operation"],
    images: ["/images/new/673d214247579fc17d125657_01 - Dynamic Content.webp", "/images/new/684ba8c14f7e2d3b7021b6f2_Frame 4273209-p-1600.webp", "/images/new/Automation.webp", "/images/new/680a1b80b7a094ef37ed03b5_Frame 1805.webp"],
    ctaText: "Automate Today"
  },
  'meta-whatsapp-api': {
    h1: "Official Meta WhatsApp API — Enterprise Messaging at Scale",
    title: "Meta WhatsApp API",
    subtitle: "Build on the official framework for high-volume business messaging and verification.",
    desc: "Access the most robust WhatsApp implementation available. The official Meta API provides the stability, security, and scalability required by growing enterprises. From high-throughput broadcasting to sophisticated multi-agent management, build your entire customer communication strategy on a rock-solid foundation.",
    icon: "fab fa-whatsapp-square",
    video: "/images/new/Whatsapp Demo.mp4",
    features: [
      { icon: "fas fa-check-double", title: "Verified Green Tick", desc: "We assist with the official business verification to get your brand the coveted green tick." },
      { icon: "fas fa-bolt", title: "High Usage Limits", desc: "Scale beyond standard business account limits to reach millions of customers reliably." },
      { icon: "fas fa-puzzle-piece", title: "CRM Deep Connect", desc: "Natively track every message and customer interaction directly within your existing CRM." },
      { icon: "fas fa-user-shield", title: "GDPR Compliance", desc: "Security and privacy protocols built to international standards for enterprise data protection." }
    ],
    process: [
      { step: "01", title: "Facebook Audit", desc: "Preparation of your Facebook Business Manager and Meta Developer account." },
      { step: "02", title: "API Configuration", desc: "Technical setup of the Phone Number and WABA (WhatsApp Business Account)." },
      { step: "03", title: "Interface Setup", desc: "Connecting the API to your chosen messaging dashboard or custom software." },
      { step: "04", title: "Compliance Check", desc: "Final verification of message templates and opt-in processes for official launch." }
    ],
    benefits: ["✅ Trusted business verification", "✅ Massive broadcast limits", "✅ Guaranteed API stability", "✅ Full session management"],
    images: ["/images/new/689c301c1ae7b481d0e33317_whatsapp chatbot.webp", "/images/new/WhatsApp-Bluetick.webp", "/images/new/WhatsApp-Chatbot-Automate.webp", "/images/new/689c33d44ce1f2e463c4a8ac_Whatsapp chatbot builder-p-1600.webp"],
    ctaText: "Link API"
  }
};

const DEFAULT_SERVICE = {
    h1: "Next-Gen Communication Infrastructure — Engineered for Scale",
    title: "Premium Digital Service",
    subtitle: "High-performance marketing, messaging, and development solutions built to scale your enterprise.",
    desc: "Ads Indiaa provides comprehensive digital and communication tools ranging from WhatsApp API and Bulk SMS to Graphic Design and Meta Ads. We focus on ROI-driven campaigns and rock-solid infrastructure that grows with your business.",
    icon: "fas fa-rocket",
    video: "/images/new/Background wave gradient.mp4",
    features: [
      { icon: "fas fa-check-circle", title: "Enterprise Grade", desc: "Every campaign and design is vetted for top-tier performance and reliability." },
      { icon: "fas fa-bolt", title: "Rapid Deployment", desc: "We respect your speed-to-market and deliver high-speed configurations." },
      { icon: "fas fa-headset", title: "Expert Support", desc: "Our tactical team is available 24/7 to solve your integration challenges." },
      { icon: "fas fa-chart-line", title: "Growth Focused", desc: "We optimize for meaningful KPIs: conversions, leads, and actual revenue growth." }
    ],
    process: [
      { step: "01", title: "Tactical Consultation", desc: "We dive deep into your operational requirements and goals." },
      { step: "02", title: "Architectural Planning", desc: "We map out the perfect digital infrastructure and strategy." },
      { step: "03", title: "Seamless Execution", desc: "Our lead engineers deploy your campaign or build your product." },
      { step: "04", title: "Scale Phase", desc: "Review performance analytics and scale winning configurations." }
    ],
    benefits: ["✅ ISO Certified Infrastructure", "✅ End-to-end Deployments", "✅ Real-time Performance Logs", "✅ 1,000,000+ Daily Capacity"],
    images: ["/images/new/680a08557fde502beb620434_Frame 1873.webp", "/images/new/680a0856a93b549cccfea4b4_Frame 1876.webp", "/images/new/67de09cdd0d30f0945cf00a1_Frame 1867.webp", "/images/new/680a08561620645eca9fc69b_Frame 1874.webp"],
    ctaText: "Deploy Now"
};

// Icon bg colors for variety
const ICON_BG = ["bg-blue-50 text-blue-600", "bg-violet-50 text-violet-600", "bg-indigo-50 text-indigo-600", "bg-sky-50 text-sky-600"];

export default function ServiceDetail({ params }) {
  const { slug } = use(params);
  const service = servicesData[slug] || { ...DEFAULT_SERVICE, title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden font-inter text-slate-900">
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-40 pb-28 px-4 overflow-hidden border-b border-slate-50">
        {/* Background Blobs */}
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] mb-8 tracking-tight text-slate-900">
                {service.h1.split('—')[0].trim()}
                {service.h1.includes('—') && (
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    {service.h1.split('—')[1].trim()}
                  </span>
                )}
              </h1>
              
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12">
                {service.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  href="/contact-us" 
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-2xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="uppercase tracking-widest text-[10px] font-black">{service.ctaText}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-sm transition-all duration-300"
                >
                  <span className="uppercase tracking-widest text-[10px] font-black">View All Services</span>
                </Link>
              </div>
            </motion.div>

            {/* Right: Video Stream */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 w-full aspect-[4/3] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-[0_40px_100px_-20px_rgba(30,58,138,0.1)] bg-slate-50">
                <video 
                  src={service.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                ></video>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-10 left-10 p-5 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl flex items-center gap-4 shadow-xl">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-0.5">Trusted By</p>
                    <p className="text-slate-900 font-bold text-sm leading-none">5,000+ Enterprises</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-50 rounded-full blur-3xl -z-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OVERVIEW SECTION ── */}
      <section className="py-32 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border-8 border-slate-50 aspect-[4/5] lg:aspect-square group"
            >
              <Image
                src={service.images[0]}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 text-blue-600 font-bold mb-6">
                  <div className="w-10 h-[2px] bg-blue-600 rounded-full" />
                  <span className="uppercase tracking-[0.2em] text-[10px] font-black">Service Overview</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.2] tracking-tight">
                  Accelerate your business <br />
                  <span className="text-blue-600">with ease.</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium max-w-lg">
                  {service.desc}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="font-bold text-slate-700 text-sm tracking-tight leading-tight pt-1">{benefit.replace('✅ ', '')}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-32 px-4 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Premium <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Enterprise-grade features engineered for total reliability and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-white rounded-[2.5rem] border border-slate-100/60 hover:border-blue-200 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.08)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed font-medium opacity-80">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION (LIGHT) ── */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-blue-600 font-black mb-6">
                <span className="w-6 h-1 bg-blue-600 rounded-full" />
                <span className="text-[10px] uppercase tracking-[0.3em]">Operational Flow</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Precision <br />
                <span className="text-blue-600">Onboarding</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium text-lg max-w-md lg:text-right">
              A streamlined, 4-step deployment methodology ensuring rapid market entry and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-0" />

            {service.process.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border-4 border-[#F8FAFF] shadow-lg flex items-center justify-center text-blue-600 font-black text-xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {p.step}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium opacity-80">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODERN GALLERY (4-FRAME BALANCED) ── */}
      <section className="py-32 px-4 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Experience <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">In Action</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg">A visual journey through our {service.title} specialized solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.images.slice(0, 4).map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12, scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Innovative Gradient Boarder Wrapper */}
                <div className="p-[3px] bg-gradient-to-br from-blue-400/30 to-violet-500/30 rounded-[2.5rem] group-hover:from-blue-500 group-hover:to-violet-600 transition-all duration-500 shadow-xl overflow-hidden">
                  <div className="relative aspect-square bg-white rounded-[2.3rem] overflow-hidden flex items-center justify-center p-4">
                    <Image 
                      src={img} 
                      alt={`${service.title} view ${i + 1}`} 
                      fill 
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </div>

                {/* Floating Index */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center text-[10px] font-black text-blue-600 group-hover:rotate-12 transition-transform">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL LIGHT CTA ── */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50/50 to-violet-50/50 rounded-[4rem] p-16 md:p-24 text-center border-2 border-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8">Ready to grow?</div>
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
                  Let's engineer <br />
                  <span className="text-blue-600">your next win.</span>
                </h2>
                <Link href="/contact-us" className="inline-flex items-center justify-center gap-4 px-14 py-6 bg-slate-900 text-white font-black rounded-[2.5rem] hover:bg-blue-600 transition-all duration-300 shadow-2xl group">
                  <span className="uppercase tracking-widest text-[11px]">{service.ctaText}</span>
                  <Zap size={18} fill="currentColor" className="group-hover:scale-125 transition-transform" />
                </Link>
                
                <p className="mt-12 text-slate-400 text-sm font-bold flex items-center justify-center gap-4">
                  <ShieldCheck size={18} className="text-blue-500" />
                  No card required. Free technical audit.
                </p>
              </div>

              {/* Decorative side shape */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-blue-100/30 rounded-full blur-[80px] -ml-24" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-violet-100/30 rounded-full blur-[80px] -mr-24" />
            </motion.div>
        </div>
      </section>

      <style jsx global>{`
        header {
          background-color: white !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05) !important;
          border-bottom: 1px solid #f1f5f9 !important;
        }
      `}</style>
    </main>
  );
}
