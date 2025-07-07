// import { useState } from 'react';
// import { FiMenu, FiX, FiChevronDown, FiExternalLink } from 'react-icons/fi';

// const BerkshireHathaway = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const toggleSubmenu = (menu) => {
//     setOpenSubmenu(openSubmenu === menu ? null : menu);
//   };

//   const navItems = [
//     {
//       name: 'About',
//       submenu: [
//         { name: 'Our Companies', link: '#' },
//         { name: 'Corporate Governance', link: '#' },
//         { name: 'Sustainability', link: '#' },
//       ],
//     },
//     {
//       name: 'News',
//       submenu: [
//         { name: 'Press Releases', link: '#' },
//         { name: 'Annual Reports', link: '#' },
//         { name: 'Warren Buffett Letters', link: '#' },
//       ],
//     },
//     {
//       name: 'Investors',
//       submenu: [
//         { name: 'Stock Information', link: '#' },
//         { name: 'Financial Reports', link: '#' },
//         { name: 'Events & Presentations', link: '#' },
//       ],
//     },
//     {
//       name: 'Contact',
//       link: '#contact',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             {/* Logo */}
//             <div className="flex items-center">
//               <div className="text-3xl font-bold text-blue-900">BERKSHIRE HATHAWAY INC.</div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               {navItems.map((item) => (
//                 <div key={item.name} className="relative group">
//                   {item.submenu ? (
//                     <>
//                       <button
//                         onClick={() => toggleSubmenu(item.name)}
//                         className="flex items-center text-gray-700 hover:text-blue-900 transition-colors font-medium"
//                       >
//                         {item.name}
//                         <FiChevronDown className="ml-1" />
//                       </button>
//                       <div
//                         className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ${
//                           openSubmenu === item.name ? 'block' : 'hidden group-hover:block'
//                         }`}
//                       >
//                         {item.submenu.map((subItem) => (
//                           <a
//                             key={subItem.name}
//                             href={subItem.link}
//                             className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900"
//                           >
//                             {subItem.name}
//                           </a>
//                         ))}
//                       </div>
//                     </>
//                   ) : (
//                     <a
//                       href={item.link}
//                       className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
//                     >
//                       {item.name}
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Mobile menu button */}
//             <button
//               className="md:hidden text-gray-700 focus:outline-none"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white py-4 px-4 shadow-md">
//             {navItems.map((item) => (
//               <div key={item.name} className="mb-2">
//                 {item.submenu ? (
//                   <>
//                     <button
//                       onClick={() => toggleSubmenu(item.name)}
//                       className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
//                     >
//                       {item.name}
//                       <FiChevronDown
//                         className={`transition-transform ${
//                           openSubmenu === item.name ? 'transform rotate-180' : ''
//                         }`}
//                       />
//                     </button>
//                     {openSubmenu === item.name && (
//                       <div className="pl-4 mt-1 space-y-2">
//                         {item.submenu.map((subItem) => (
//                           <a
//                             key={subItem.name}
//                             href={subItem.link}
//                             className="block py-1 text-gray-600 hover:text-blue-900"
//                           >
//                             {subItem.name}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <a
//                     href={item.link}
//                     className="block py-2 text-gray-700 font-medium"
//                   >
//                     {item.name}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Building Value for Shareholders</h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
//             A diversified holding company with subsidiaries engaged in insurance, utilities, energy, manufacturing, and retailing.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="#investors"
//               className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
//             >
//               Investor Information
//             </a>
//             <a
//               href="#companies"
//               className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition-colors"
//             >
//               Our Subsidiaries
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-50 p-8 rounded-lg text-center">
//               <div className="text-4xl font-bold text-blue-900 mb-2">$700B+</div>
//               <div className="text-gray-600">Market Capitalization</div>
//             </div>
//             <div className="bg-gray-50 p-8 rounded-lg text-center">
//               <div className="text-4xl font-bold text-blue-900 mb-2">60+</div>
//               <div className="text-gray-600">Subsidiary Companies</div>
//             </div>
//             <div className="bg-gray-50 p-8 rounded-lg text-center">
//               <div className="text-4xl font-bold text-blue-900 mb-2">1965</div>
//               <div className="text-gray-600">Founded Under Current Leadership</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Companies */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Featured Subsidiaries</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { name: 'GEICO', industry: 'Insurance', description: 'One of the largest auto insurers in the United States.' },
//               { name: 'BNSF Railway', industry: 'Transportation', description: 'One of the largest freight railroad networks in North America.' },
//               { name: 'Berkshire Hathaway Energy', industry: 'Energy', description: 'A global energy company with operations in renewable generation.' },
//               { name: 'Fruit of the Loom', industry: 'Apparel', description: 'Manufacturer of basic clothing including underwear and activewear.' },
//               { name: 'Dairy Queen', industry: 'Food', description: 'International chain of soft serve ice cream and fast food restaurants.' },
//               { name: 'See\'s Candies', industry: 'Confectionery', description: 'Premium chocolates and confections since 1921.' },
//             ].map((company) => (
//               <div key={company.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//                 <div className="h-48 bg-blue-800 flex items-center justify-center">
//                   <span className="text-white text-2xl font-bold">{company.name}</span>
//                 </div>
//                 <div className="p-6">
//                   <div className="text-sm text-blue-600 font-medium mb-1">{company.industry}</div>
//                   <h3 className="text-xl font-bold mb-3">{company.name}</h3>
//                   <p className="text-gray-600">{company.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Annual Meeting Section */}
//       <section className="py-16 bg-blue-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
//               <h2 className="text-3xl font-bold mb-6">Annual Shareholders Meeting</h2>
//               <p className="text-lg mb-6">
//                 Join us for the annual gathering of Berkshire Hathaway shareholders, featuring Warren Buffett and Charlie Munger.
//               </p>
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-start">
//                   <div className="bg-blue-700 rounded-full p-2 mr-4">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Date</h3>
//                     <p>May 6, 2023</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-700 rounded-full p-2 mr-4">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Location</h3>
//                     <p>CHI Health Center, Omaha, Nebraska</p>
//                   </div>
//                 </div>
//               </div>
//               <a
//                 href="#"
//                 className="inline-block bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
//               >
//                 Meeting Details
//               </a>
//             </div>
//             <div className="lg:w-1/2">
//               <div className="bg-gray-800 aspect-video rounded-lg overflow-hidden">
//                 {/* Placeholder for video embed */}
//                 <div className="h-full flex items-center justify-center">
//                   <div className="text-center">
//                     <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <p className="mt-2 text-gray-400">2022 Annual Meeting Highlights</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* News Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest News</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Berkshire Hathaway Reports Fourth Quarter Earnings',
//                 date: 'February 25, 2023',
//                 excerpt: 'Berkshire Hathaway Inc. today reported its fourth quarter 2022 earnings with operating earnings of $6.7 billion.',
//                 category: 'Financial Results',
//               },
//               {
//                 title: 'Berkshire Hathaway Energy Completes Solar Project',
//                 date: 'February 18, 2023',
//                 excerpt: 'The new solar facility in Nevada will provide power to approximately 60,000 homes annually.',
//                 category: 'Energy',
//               },
//               {
//                 title: 'Annual Letter to Shareholders Released',
//                 date: 'February 4, 2023',
//                 excerpt: 'Warren Buffett\'s much-anticipated annual letter discusses market outlook and company performance.',
//                 category: 'Corporate',
//               },
//             ].map((newsItem, index) => (
//               <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
//                 <div className="h-48 bg-gray-100 flex items-center justify-center">
//                   <span className="text-gray-400">News Image</span>
//                 </div>
//                 <div className="p-6">
//                   <div className="text-sm text-blue-600 font-medium mb-2">{newsItem.category}</div>
//                   <h3 className="text-xl font-bold mb-3">{newsItem.title}</h3>
//                   <p className="text-gray-500 text-sm mb-4">{newsItem.date}</p>
//                   <p className="text-gray-600 mb-4">{newsItem.excerpt}</p>
//                   <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
//                     Read More <FiExternalLink className="ml-1" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <a
//               href="#"
//               className="inline-block border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-900 hover:text-white transition-colors"
//             >
//               View All News
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-8">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Berkshire Hathaway</h3>
//               <p className="text-gray-400">
//                 A conglomerate holding company overseeing and managing subsidiaries engaged in diverse business activities.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Subsidiaries</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Investor Relations</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Corporate Governance</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Investors</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-white">Stock Information</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Financial Reports</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Annual Meeting</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">SEC Filings</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white">Dividend History</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Contact</h3>
//               <address className="not-italic text-gray-400">
//                 <p>3555 Farnam Street</p>
//                 <p>Omaha, NE 68131</p>
//                 <p className="mt-2">Phone: (402) 346-1400</p>
//                 <p>Email: info@berkshirehathaway.com</p>
//               </address>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-400 mb-4 md:mb-0">
//               © {new Date().getFullYear()} Berkshire Hathaway Inc. All rights reserved.
//             </div>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <span className="sr-only">Facebook</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <span className="sr-only">Twitter</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <span className="sr-only">LinkedIn</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <span className="sr-only">YouTube</span>
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default BerkshireHathaway;


import React, { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp, Users, FileText, Calendar, Mail, Phone, MapPin, ExternalLink, BarChart3, Building, Globe, Star, ArrowRight, Play, Award, Target } from 'lucide-react';

const BerkshireHathaway = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Building },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'news', label: 'News', icon: Calendar },
    { id: 'subsidiaries', label: 'Subsidiaries', icon: Globe },
    { id: 'about', label: 'About', icon: Users },
  ];

  const bannerSlides = [
    {
      title: "2024 Annual Report",
      subtitle: "Outstanding Performance Across All Sectors",
      description: "Berkshire Hathaway delivered exceptional results with record-breaking revenue and continued expansion across key industries.",
      cta: "Read Full Report",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: TrendingUp
    },
    {
      title: "Warren Buffett's Letter",
      subtitle: "Wisdom for Long-Term Investors",
      description: "The 2024 shareholder letter offers invaluable insights into market conditions and investment philosophy.",
      cta: "Read Letter",
      gradient: "from-amber-600 via-orange-600 to-red-600",
      icon: FileText
    },
    {
      title: "BNSF Railway Excellence",
      subtitle: "America's Transportation Leader",
      description: "Our railway subsidiary continues to set industry standards in safety, efficiency, and environmental stewardship.",
      cta: "Learn More",
      gradient: "from-purple-600 via-violet-600 to-indigo-600",
      icon: Target
    }
  ];

  const quickLinks = [
    { title: 'Annual Reports', desc: 'Comprehensive annual shareholder reports with detailed financial analysis', href: '#', color: 'from-emerald-500 to-teal-600', icon: FileText },
    { title: 'Quarterly Reports', desc: 'Latest quarterly earnings and performance updates', href: '#', color: 'from-blue-500 to-indigo-600', icon: BarChart3 },
    { title: 'Shareholder Letters', desc: 'Warren Buffett\'s famous letters to shareholders', href: '#', color: 'from-amber-500 to-orange-600', icon: Mail },
    { title: 'Press Releases', desc: 'Recent company announcements and industry news', href: '#', color: 'from-purple-500 to-violet-600', icon: Calendar },
    { title: 'SEC Filings', desc: 'Official regulatory filings and compliance documents', href: '#', color: 'from-rose-500 to-pink-600', icon: Building },
    { title: 'Proxy Statements', desc: 'Annual meeting and corporate governance information', href: '#', color: 'from-cyan-500 to-blue-600', icon: Users },
  ];

  const subsidiaries = [
    { name: 'GEICO', industry: 'Insurance', color: 'from-emerald-400 to-teal-500' },
    { name: 'BNSF Railway', industry: 'Transportation', color: 'from-blue-400 to-indigo-500' },
    { name: 'Berkshire Hathaway Energy', industry: 'Energy', color: 'from-amber-400 to-orange-500' },
    { name: 'Dairy Queen', industry: 'Food & Beverage', color: 'from-pink-400 to-rose-500' },
    { name: 'Duracell', industry: 'Consumer Goods', color: 'from-red-400 to-pink-500' },
    { name: 'Fruit of the Loom', industry: 'Apparel', color: 'from-green-400 to-emerald-500' },
    { name: 'Clayton Homes', industry: 'Housing', color: 'from-purple-400 to-violet-500' },
    { name: 'NetJets', industry: 'Aviation', color: 'from-cyan-400 to-blue-500' },
    { name: 'Precision Castparts', industry: 'Manufacturing', color: 'from-gray-400 to-slate-500' },
    { name: 'See\'s Candies', industry: 'Confectionery', color: 'from-yellow-400 to-amber-500' },
    { name: 'Marmon Group', industry: 'Industrial', color: 'from-indigo-400 to-purple-500' },
    { name: 'McLane Company', industry: 'Distribution', color: 'from-teal-400 to-cyan-500' }
  ];

  const stats = [
    { label: 'Market Cap', value: '$900B+', icon: TrendingUp, color: 'from-emerald-500 to-teal-600' },
    { label: 'Employees', value: '380K+', icon: Users, color: 'from-blue-500 to-indigo-600' },
    { label: 'Subsidiaries', value: '60+', icon: Building, color: 'from-purple-500 to-violet-600' },
    { label: 'Countries', value: '25+', icon: Globe, color: 'from-amber-500 to-orange-600' },
  ];

  const achievements = [
    { title: 'Fortune 500 #6', desc: 'Ranked 6th in Fortune 500 companies', icon: Award },
    { title: '50+ Years Growth', desc: 'Consistent value creation since 1965', icon: TrendingUp },
    { title: 'AAA Credit Rating', desc: 'Highest possible credit rating', icon: Star },
    { title: 'Global Presence', desc: 'Operations across 25+ countries', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white bg-opacity-95 backdrop-blur-xl shadow-2xl border-b border-gray-200 border-opacity-50' : 'bg-white bg-opacity-90 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl tracking-tight">BH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Berkshire Hathaway
                </h1>
                <p className="text-sm text-gray-600">Investment Excellence</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 shadow-md'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-slate-100 hover:shadow-sm'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
                <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
                <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm w-full h-full" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute top-20 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-xl p-6 shadow-2xl border-b border-gray-200 border-opacity-50">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-4 w-full p-4 text-left hover:bg-gradient-to-r hover:from-gray-50 hover:to-slate-50 rounded-xl transition-all"
                >
                  <Icon size={22} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Hero Banner Section */}
      <section className="pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.3),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className={`bg-gradient-to-r ${bannerSlides[currentSlide].gradient} rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-1000 transform`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  {/* <bannerSlides[currentSlide].icon className="w-8 h-8" /> */}
                  <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    Latest Update
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {bannerSlides[currentSlide].title}
                </h2>
                <h3 className="text-xl md:text-2xl font-light mb-6 text-white opacity-90">
                  {bannerSlides[currentSlide].subtitle}
                </h3>
                <p className="text-lg mb-8 text-white opacity-80 leading-relaxed">
                  {bannerSlides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                    <span>{bannerSlides[currentSlide].cta}</span>
                    <ArrowRight size={20} />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2">
                    <Play size={20} />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                <div className="w-64 h-64 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                    {/* <bannerSlides[currentSlide].icon className="w-16 h-16 text-white" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Building Value
              </span>
              <br />
              <span className="text-gray-900">for Shareholders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a diversified holding company owning businesses engaged in a variety of activities. 
              Our goal is to build long-term value for shareholders through prudent capital allocation and 
              exceptional business operations.
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievements Section */}
          <div className="bg-gradient-to-r from-gray-900 to-slate-900 rounded-3xl p-8 md:p-12 mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                    <p className="text-gray-300 text-sm">{achievement.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Quick Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${link.color} mb-6`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{link.desc}</p>
                    <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors">
                      <span className="font-medium">View Details</span>
                      <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Subsidiaries Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 mr-4">
                <Building className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Subsidiaries</h3>
            </div>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
              We own a diverse portfolio of businesses across multiple industries, each operating with independence 
              while contributing to our overall success and creating value for shareholders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subsidiaries.map((subsidiary, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className={`relative bg-gradient-to-r ${subsidiary.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                    <h4 className="font-bold text-lg mb-2">{subsidiary.name}</h4>
                    <p className="text-sm opacity-90">{subsidiary.industry}</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warren Buffett Quote */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white from-opacity-10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white bg-opacity-10 backdrop-blur-md mb-6">
              <span className="text-3xl">💡</span>
            </div>
          </div>
          <blockquote className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed">
            "Time is the friend of the wonderful business, the enemy of the mediocre."
          </blockquote>
          <cite className="text-emerald-100 text-xl font-medium">Warren Buffett, CEO & Chairman</cite>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">BH</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Berkshire Hathaway Inc.</h3>
                  <p className="text-gray-400">Investment Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                A diversified holding company dedicated to building long-term value for shareholders 
                through prudent capital allocation and exceptional business operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="text-gray-300">3555 Farnam Street, Omaha, NE 68131</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span className="text-gray-300">(402) 346-1400</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="text-gray-300">berkshire@berkshirehathaway.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-emerald-400">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center space-x-2"><ChevronRight size={16} /><span>Annual Reports</span></a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center space-x-2"><ChevronRight size={16} /><span>Quarterly Reports</span></a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center space-x-2"><ChevronRight size={16} /><span>Shareholder Letters</span></a></li>
                <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center space-x-2"><ChevronRight size={16} /><span>Press Releases</span></a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-teal-400">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors flex items-center space-x-2"><ChevronRight size={16} /><span>About Us</span></a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors flex items-center space-x-2"><ChevronRight size={16} /><span>Leadership</span></a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors flex items-center space-x-2"><ChevronRight size={16} /><span>Subsidiaries</span></a></li>
                <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors flex items-center space-x-2"><ChevronRight size={16} /><span>Investor Relations</span></a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 1978-2025 Berkshire Hathaway Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BerkshireHathaway;