"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronUp,
  Mail,
  HelpCircle,
  FileText,
  MessageSquare,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Terms() {
  const headerRef = useRef(null);
  const particlesRef = useRef(null);
  const [activeTab, setActiveTab] = useState("terms");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header on page load
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate sections as they come into view
    gsap.utils.toArray(".section-title").forEach((section, i) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: i * 0.1,
      });
    });

    // Animate FAQ items
    gsap.utils.toArray(".faq-item").forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: i * 0.1,
      });
    });

    // Create particle effect
    if (particlesRef.current) {
      const canvas = particlesRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
            Math.random() * 50 + 50
          )}, ${Math.floor(Math.random() * 150 + 100)}, ${
            Math.random() * 0.5 + 0.1
          })`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        });
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particleCount; i++) {
          const p = particles[i];

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
          if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        }
      }

      animate();

      // Handle resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-200 pb-20 relative overflow-hidden mt-24">
      {/* Particle background */}
      <canvas
        ref={particlesRef}
        className="fixed inset-0 w-full h-full pointer-events-none opacity-30"
      />

      {/* Header with animated gradient */}
      <div ref={headerRef} className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 opacity-70" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=1200')] bg-cover opacity-10 mix-blend-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-6 p-2 bg-purple-900/30 backdrop-blur-sm rounded-full">
            <FileText className="h-10 w-10 text-purple-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Terms & Conditions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Welcome to Growwik Media! These terms and conditions outline the
            rules and regulations for using our services.
          </p>

          {/* Navigation tabs */}
          <div className="mt-10">
            <Tabs
              defaultValue="terms"
              className="w-full max-w-md mx-auto"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-2 bg-gray-900/50 backdrop-blur-sm">
                <TabsTrigger
                  value="terms"
                  className="data-[state=active]:bg-purple-900/50"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Terms
                </TabsTrigger>
                <TabsTrigger
                  value="faqs"
                  className="data-[state=active]:bg-purple-900/50"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  FAQs
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-invert max-w-none mb-10"
        >
          <p className="text-white pt-3 text-lg">
            By engaging with our services, whether you are an influencer,
            brand/business, team member, or partner, you agree to abide by these
            terms.
          </p>
        </motion.div>

        {/* Terms Content */}
        <AnimatePresence mode="wait">
          {activeTab === "terms" && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion type="single" collapsible className="space-y-6">
                {/* Section 1: General Terms */}
                <AccordionItem
                  value="section-1"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        1
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        General Terms
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Acceptance of Terms
                      </h3>
                      <p>
                        By utilizing our services, you acknowledge and agree to
                        these terms and conditions.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">Amendments</h3>
                      <p>
                        Growwik Media reserves the right to update these terms
                        at any time. Continued use of our services indicates
                        acceptance of any modifications.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">Eligibility</h3>
                      <p>
                        Our services are available to individuals and entities
                        legally capable of entering into contracts.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Confidentiality
                      </h3>
                      <p>
                        Unauthorized sharing of campaign-related or
                        business-sensitive information is strictly prohibited.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Intellectual Property
                      </h3>
                      <p>
                        Unless otherwise agreed upon, content created for
                        campaigns remains the property of the brand.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Service Limitations
                      </h3>
                      <p>
                        We do not guarantee specific campaign results, as
                        influencer marketing outcomes are subject to external
                        variables.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 2: Terms for Influencers */}
                <AccordionItem
                  value="section-2"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        2
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Terms for Influencers
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">No Hidden Fees</h3>
                      <p>
                        Growwik Media does not charge influencers a commission.
                        If any team member demands a percentage cut, report it
                        immediately at Contact@growwik.com.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Payment Structure
                      </h3>
                      <p>
                        Payments will be disbursed as per the agreed-upon terms
                        once all campaign deliverables are met.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Campaign Exit Policy
                      </h3>
                      <p>
                        If an influencer withdraws post-content creation or
                        after draft submission, payment may be withheld, and
                        they may be ineligible for future campaigns.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Content Usage Rights
                      </h3>
                      <p>
                        Brands typically retain rights to content created for
                        campaigns unless an alternative agreement is made.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Transparency & Ethics
                      </h3>
                      <p>
                        We ensure fair compensation and adherence to pre-agreed
                        payment structures.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 3: Terms for Brands & Businesses */}
                <AccordionItem
                  value="section-3"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        3
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Terms for Brands & Businesses
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Service Offerings
                      </h3>
                      <p>
                        Growwik Media provides end-to-end influencer marketing
                        solutions, including campaign planning, influencer
                        sourcing, content creation, and performance tracking.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">Payment Terms</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          A 25-50% advance payment is required upon influencer
                          confirmation.
                        </li>
                        <li>
                          Full payment must be completed before campaign
                          execution unless explicitly agreed otherwise.
                        </li>
                        <li>
                          More than three content revision requests may incur
                          additional charges.
                        </li>
                        <li>
                          Campaign cancellations after influencer selection or
                          content creation may result in partial refunds,
                          subject to service fee deductions.
                        </li>
                        <li>
                          After content posting or draft approval, brands remain
                          responsible for full influencer payment, even in case
                          of campaign cancellation.
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">Client Conduct</h3>
                      <p>
                        Brands are prohibited from directly approaching
                        influencers introduced via Growwik Media. Repeated
                        violations may result in service termination.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Facilitator Role
                      </h3>
                      <p>
                        Growwik Media may mediate disputes to ensure a fair
                        resolution.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 4: Payment Methods */}
                <AccordionItem
                  value="section-4"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        4
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Payment Methods
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <p>We accept payments via:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>UPI (Unified Payments Interface)</li>
                      <li>Bank Transfer</li>
                      <li>
                        Cryptocurrency (Handled on a case-by-case basis due to
                        regulatory considerations)
                      </li>
                    </ul>
                    <p>
                      For crypto payments, prior approval is required to ensure
                      compliance with financial regulations.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 5: Refund & Cancellation Policy */}
                <AccordionItem
                  value="section-5"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        5
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Refund & Cancellation Policy
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium text-white">
                          Planning & Influencer Selection Stage
                        </span>{" "}
                        – Refundable, with potential deductions for
                        administrative costs.
                      </li>
                      <li>
                        <span className="font-medium text-white">
                          Content Creation Stage
                        </span>{" "}
                        – Partial refunds may apply, depending on work
                        completed.
                      </li>
                      <li>
                        <span className="font-medium text-white">
                          Post-Creation & Submission Stage
                        </span>{" "}
                        – Limited refund options due to invested time and
                        effort.
                      </li>
                      <li>
                        <span className="font-medium text-white">
                          After Posting/Draft Approval
                        </span>{" "}
                        – Refunds are not possible; full payment remains due.
                      </li>
                    </ul>
                    <p>
                      Refunds are evaluated on a case-by-case basis, considering
                      the circumstances of both the client and the influencer.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 6: Guidelines for Team Members & Partners */}
                <AccordionItem
                  value="section-6"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        6
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Guidelines for Team Members & Partners
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Workplace Conduct
                      </h3>
                      <p>
                        Team members and partners must uphold professional
                        ethics to foster smooth collaboration.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Zero-Tolerance for Corruption
                      </h3>
                      <p>
                        Unauthorized commissions or payments from influencers or
                        brands are strictly forbidden. Report any such
                        activities to Contact@growwik.com.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Conflict of Interest
                      </h3>
                      <p>
                        Team members must not engage in competing activities
                        against Growwik Media.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 7: Dispute Resolution & Compliance */}
                <AccordionItem
                  value="section-7"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        7
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Dispute Resolution & Compliance
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Dispute Resolution
                      </h3>
                      <p>
                        Initial disputes will be addressed through dialogue. If
                        unresolved, legal avenues may be pursued.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Legal Jurisdiction
                      </h3>
                      <p>
                        These terms are governed by the legal framework under
                        which Growwik Media operates.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 8: Privacy & Data Protection */}
                <AccordionItem
                  value="section-8"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        8
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Privacy & Data Protection
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">Data Security</h3>
                      <p>
                        Client, influencer, and team member information is
                        safeguarded. No personal data is shared without explicit
                        consent.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Cookies & Analytics
                      </h3>
                      <p>
                        Our platform may use cookies to enhance user experience
                        and evaluate service performance.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 9: Content Usage & Portfolio Rights */}
                <AccordionItem
                  value="section-9"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        9
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Content Usage & Portfolio Rights
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Brand & Influencer Case Studies
                      </h3>
                      <p>
                        Growwik Media reserves the right to document
                        collaborations as case studies, subject to mutual
                        agreement.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium text-white">
                        Social Media & Portfolio Inclusion
                      </h3>
                      <p>
                        Completed projects may be showcased in our portfolio or
                        on social media, with client approval.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Section 10: Collaboration Policy */}
                <AccordionItem
                  value="section-10"
                  className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="section-title px-6 py-4 hover:bg-gray-800/50 transition-all group">
                    <div className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/50 mr-3 group-hover:bg-purple-800 transition-colors">
                        10
                      </span>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        Collaboration Policy
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 space-y-4">
                    <p>
                      Growwik Media selectively collaborates with brands and
                      businesses that align with our values and operational
                      capabilities. We do not accept collaborations involving:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Illegal or unethical activities (e.g., scams, fraud,
                        misleading promotions).
                      </li>
                      <li>
                        Adult, gambling, or controversial content that may
                        violate community guidelines.
                      </li>
                      <li>
                        Political or religious endorsements that could lead to
                        bias or reputational risks.
                      </li>
                      <li>
                        Financial schemes that do not meet transparency
                        standards.
                      </li>
                      <li>
                        Unrealistic marketing claims that mislead audiences.
                      </li>
                    </ul>
                    <p>
                      If you are unsure whether your campaign aligns with our
                      policies, contact us at Contact@growwik.com for
                      clarification.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          )}

          {/* FAQs Content */}
          {activeTab === "faqs" && (
            <motion.div
              key="faqs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-purple-800/30 mb-8">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-purple-400" />
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-300">
                  Find quick answers to common questions about working with
                  Growwik Media.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="faq-1"
                  className="faq-item border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-all">
                    <h3 className="text-lg font-medium text-white text-left">
                      Does Growwik Media take a percentage from influencer
                      payments?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300">
                    <p>
                      No, we do not take commissions from influencers. Report
                      any violations immediately.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-2"
                  className="faq-item border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-all">
                    <h3 className="text-lg font-medium text-white text-left">
                      Can a brand request a refund after campaign initiation?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300">
                    <p>
                      Refunds are possible in the early stages but become
                      limited after content creation. Post-publication, refunds
                      are not available.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-3"
                  className="faq-item border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-all">
                    <h3 className="text-lg font-medium text-white text-left">
                      How are payments processed for brands?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300">
                    <p>
                      Payments require an advance (25-50%) and must be completed
                      before campaign execution.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-4"
                  className="faq-item border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-all">
                    <h3 className="text-lg font-medium text-white text-left">
                      What happens if an influencer exits mid-campaign?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300">
                    <p>
                      If an influencer withdraws after content creation,
                      necessary actions will be taken, and refunds may not be
                      available.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-5"
                  className="faq-item border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-all">
                    <h3 className="text-lg font-medium text-white text-left">
                      Can a client directly contact an influencer?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300">
                    <p>
                      No, all communications must go through Growwik Media.
                      Direct outreach is a policy violation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-6"
                  className="faq-item border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-all">
                    <h3 className="text-lg font-medium text-white text-left">
                      Does Growwik Media accept all collaboration requests?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300">
                    <p>
                      No, we selectively accept collaborations that align with
                      our vision and operational capabilities. We do not work
                      with unethical, misleading, or sensitive content
                      categories.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-7"
                  className="faq-item border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-all">
                    <h3 className="text-lg font-medium text-white text-left">
                      How can I work with Growwik Media?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300">
                    <p>
                      If you are interested in collaborating, reach out to us at
                      Contact@growwik.com.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 p-6 border border-purple-800/30 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
                <p className="text-gray-300 italic">
                  By engaging with Growwik Media, you agree to these terms. For
                  inquiries, contact us at Contact@growwik.com.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
            <div className="bg-black rounded-full p-2">
              <Mail className="h-6 w-6 text-purple-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Need Assistance?
          </h3>
          <p className="text-gray-400 mb-4">
            Have questions about our terms? We&apos;re here to help.
          </p>
            <a href="mailto:contact@growwik.com" aria-label="Send us an email">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none">
              <Mail className="h-4 w-4 mr-2" />
              Contact@growwik.com
          </Button>
            </a>

          <p className="text-gray-400 mt-8">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </motion.div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-900/80 text-white shadow-lg hover:bg-purple-800 transition-colors z-50"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Terms;
