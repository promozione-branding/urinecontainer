
"use client";

import React from "react";
import { Construction, RefreshCw, Mail } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
          <Construction className="h-10 w-10 text-yellow-600" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-8 text-gray-600">
          We are currently working on something amazing. Our website is
          temporarily unavailable while we make some improvements.
        </p>

        <p className="mt-3 text-sm sm:text-base text-gray-500">
          We&apos;ll be back shortly. Thank you for your patience!
        </p>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-gray-200" />

        {/* Contact */}
       

        {/* Footer */}
        <p className="mt-12 text-xs text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </main>
  );
}

