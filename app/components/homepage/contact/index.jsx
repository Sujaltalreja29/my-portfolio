// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail, MdPhone } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="flex flex-col lg:flex-row gap-8 my-12 lg:my-16 relative mt-24 text-white">
      {/* Left Side - Contact Form */}
      <div className="w-full lg:w-1/2 bg-[#1a1c26] p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
        <ContactForm />
      </div>
      
      {/* Right Side - Contact Information */}
      <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
        
        <div className="space-y-8">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="bg-[#252734] p-3 rounded-lg flex items-center justify-center min-w-[50px] min-h-[50px]">
              <MdPhone className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <a 
                href={`tel:${personalData.phone || "+91-9998537189"}`}
                className="text-lg hover:text-purple-500 transition-colors duration-300"
              >
                {personalData.phone || "+91-9998537189"}
              </a>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="bg-[#252734] p-3 rounded-lg flex items-center justify-center min-w-[50px] min-h-[50px]">
              <MdAlternateEmail className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <a 
                href={`mailto:${personalData.email || "sujaltlrj@gmail.com"}`}
                className="text-lg hover:text-purple-500 transition-colors duration-300"
              >
                {personalData.email || "sujaltlrj@gmail.com"}
              </a>
            </div>
          </div>
          
          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <div className="bg-[#252734] p-3 rounded-lg flex items-center justify-center min-w-[50px] min-h-[50px]">
              <BiLogoLinkedin className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <a 
                href={personalData.linkedIn || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-purple-500 transition-colors duration-300"
              >
                {personalData.linkedIn ? personalData.linkedIn.replace('https://', '') : 'linkedin.com/in/username'}
              </a>
            </div>
          </div>
          
          {/* GitHub */}
          <div className="flex items-center gap-4">
            <div className="bg-[#252734] p-3 rounded-lg flex items-center justify-center min-w-[50px] min-h-[50px]">
              <FaGithub className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">GitHub</p>
              <a 
                href={personalData.github || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-purple-500 transition-colors duration-300"
              >
                {personalData.github ? personalData.github.replace('https://', '') : 'github.com/username'}
              </a>
            </div>
          </div>
          
          {/* LeetCode */}
          <div className="flex items-center gap-4">
            <div className="bg-[#252734] p-3 rounded-lg flex items-center justify-center min-w-[50px] min-h-[50px]">
              <SiLeetcode className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-gray-400 text-sm">LeetCode</p>
              <a 
                href={personalData.leetcode || "https://leetcode.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-purple-500 transition-colors duration-300"
              >
                {personalData.leetcode ? personalData.leetcode.replace('https://', '') : 'leetcode.com/username'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;