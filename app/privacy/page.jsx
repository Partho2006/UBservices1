"use client";
import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <section className="relative min-h-screen bg-slate-900 text-slate-200 py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-serif text-white mb-8 text-center">
                    Privacy Policy
                </h1>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    At U.B Services & Consultancy, we are committed to protecting your
                    privacy. This policy explains how we collect, use, and safeguard your
                    personal information when you use our services.
                </p>

                {/* Sections */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            1. Information We Collect
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We may collect personal details such as your name, email address,
                            phone number, and business information when you contact us,
                            request services, or subscribe to our communications.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            The information we collect is used to provide and improve our
                            services, respond to inquiries, personalize your experience, and
                            communicate updates or promotional content (only if you opt-in).
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            3. Sharing of Information
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We do not sell, rent, or trade your personal data. We may share
                            your information with trusted service providers who help us
                            operate our business, provided they agree to keep it confidential.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            4. Data Security
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We use industry-standard security measures to protect your
                            information. However, no method of transmission or storage is
                            100% secure, so we cannot guarantee absolute protection.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            5. Your Rights
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            You have the right to access, update, or request deletion of your
                            personal data. To exercise these rights, please contact us at{" "}
                            <span className="text-amber-400">
                                ujjalroychowdhury084@gmail.com
                            </span>
                            .
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            6. Updates to This Policy
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We may update this Privacy Policy periodically. Changes will be
                            posted on this page with an updated “Last Revised” date.
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
