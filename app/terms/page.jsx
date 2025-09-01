"use client";
import React from "react";
import Link from "next/link";

export default function TermsOfService() {
    return (
        <section className="relative min-h-screen bg-slate-900 text-slate-200 py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-serif text-white mb-8 text-center">
                    Terms of Service
                </h1>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    These Terms of Service govern your use of U.B Services & Consultancy’s
                    website and services. By accessing or using our site, you agree to
                    these terms.
                </p>

                {/* Sections */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            By using our services, you confirm that you are at least 18 years
                            old and agree to comply with these terms and all applicable laws
                            and regulations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            2. Services Provided
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We provide consulting, design, and hospitality-related solutions.
                            The scope of services will be outlined in written agreements made
                            with each client.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            3. User Responsibilities
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            You agree not to misuse our services, share false information, or
                            engage in activities that could damage our reputation or disrupt
                            our operations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            4. Intellectual Property
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            All content, branding, and materials on this website are the
                            property of U.B Services & Consultancy. You may not copy,
                            distribute, or reproduce them without prior permission.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            5. Limitation of Liability
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We are not liable for any direct, indirect, or incidental damages
                            arising from the use of our services or website. Your use is at
                            your own risk.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            6. Governing Law
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            These Terms are governed by the laws of India. Any disputes will
                            be subject to the jurisdiction of courts in Kolkata, West Bengal.
                        </p>
                    </div>
                </div>

                {/* Last Updated */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-slate-400">
                        Last Revised: August 31, 2025
                    </p>
                </div>
                <div className="mt-6 text-center">
                    <Link href="/" className="text-amber-400 hover:underline">
                        Go Back →
                    </Link>
                </div>
            </div>
        </section>
    );
}
