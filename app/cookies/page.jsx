"use client";
import Link from "next/link";
import React from "react";

export default function CookiePolicy() {
    return (
        <section className="relative min-h-screen bg-slate-900 text-slate-200 py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-serif text-white mb-8 text-center">
                    Cookie Policy
                </h1>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    This Cookie Policy explains how U.B Services & Consultancy uses
                    cookies and similar technologies on our website.
                </p>

                {/* Sections */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            1. What Are Cookies?
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            Cookies are small text files stored on your device when you visit
                            a website. They help us improve your browsing experience and
                            deliver personalized content.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            2. How We Use Cookies
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We use cookies to:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 leading-relaxed mt-2">
                            <li>Remember your preferences and settings</li>
                            <li>Improve site functionality and performance</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Deliver relevant marketing and promotional content</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            3. Types of Cookies We Use
                        </h2>
                        <ul className="list-disc list-inside text-slate-300 leading-relaxed">
                            <li>
                                <span className="font-semibold">Essential Cookies:</span>{" "}
                                Required for basic site functionality.
                            </li>
                            <li>
                                <span className="font-semibold">Performance Cookies:</span>{" "}
                                Track site usage to help us improve user experience.
                            </li>
                            <li>
                                <span className="font-semibold">Functional Cookies:</span>{" "}
                                Remember user choices and preferences.
                            </li>
                            <li>
                                <span className="font-semibold">Advertising Cookies:</span>{" "}
                                Used to deliver personalized ads and promotions.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            4. Managing Cookies
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            You can manage or disable cookies through your browser settings.
                            Please note that disabling cookies may affect the functionality of
                            our website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                            5. Updates to This Policy
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            We may update this Cookie Policy from time to time. Any changes
                            will be posted on this page with a revised date.
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
