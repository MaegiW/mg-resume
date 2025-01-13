import React from "react";
import { Heart, Mailbox, PhoneCall, GithubLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Contact Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="p-4 bg-gray-700 rounded-lg">
              <div className="flex justify-center items-center mb-2 gap-2">
                <Mailbox
                  className="flex items-center"
                  size={25}
                  color="#60a5fa"
                  weight="duotone"
                />
                <h3 className="font-semibold ">Email</h3>
              </div>
              <a
                href="mailto:example@email.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                example@email.com
              </a>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <div className="flex justify-center items-center mb-2 gap-2">
                <PhoneCall size={25} color="#60a5fa" weight="duotone" />
                <h3 className="font-semibold ">Phone</h3>
              </div>
              <a
                href="tel:+886912345678"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                0912-345-678
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            <div className="flex justify-center items-center mb-2 gap-2">
              <GithubLogo size={25} color="#60a5fa" weight="duotone" />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm flex  justify-center items-center">
          <p>© {new Date().getFullYear()} Maggie Wang - All rights reserved.</p>
          <Heart size={18} color="#60a5fa" weight="duotone" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
