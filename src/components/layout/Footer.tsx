import { Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import VisaIcon from '@/components/icons/VisaIcon';


const footerLinks = {
  'Information': [
    { name: 'About Us', href: '/about' }, { name: 'Information', href: '/info' },
    { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms & Conditions', href: '/terms' },
  ],
  'Service': [
    { name: 'About Us', href: '/about' }, { name: 'Information', href: '/info' },
    { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms & Conditions', href: '/terms' },
  ],
  'My Account': [
    { name: 'About Us', href: '/about' }, { name: 'Information', href: '/info' },
    { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms & Conditions', href: '/terms' },
  ],
  'Our Offers': [
    { name: 'About Us', href: '/about' }, { name: 'Information', href: '/info' },
    { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms & Conditions', href: '/terms' },
  ],
};

const Footer = () => {
  return (
    <footer className="pt-16">
      <div className="container mx-auto px-4">
        <div className="bg-footer-bg font-proxima p-8 rounded-lg">
          
          {/* Upper Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* E-Comm Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/footer-logo.svg" alt="E-Comm Logo" width={39} height={36} />
                <h3 className="font-poppins font-bold text-[18px] text-heading-text">E-Comm</h3>
              </div>
              <p className="font-proxima text-[12px] text-heading-text leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever. Since the 1500s, when an unknown printer.
              </p>
            </div>
            {/* Follow Us Column */}
            <div>
              <h3 className="font-poppins font-medium text-[18px] text-heading-text mb-4">Follow Us</h3>
              <p className="font-proxima text-[12px] text-heading-text mb-4 leading-relaxed">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-facebook-blue"><Facebook size={20} /></a>
                <a href="#" className="text-twitter-blue"><Twitter size={20} /></a>
              </div>
            </div>
            {/* Contact Us Column */}
            <div>
              <h3 className="font-poppins font-medium text-[18px] text-heading-text mb-4">Contact Us</h3>
              <address className="font-poppins font-normal text-[14px] text-heading-text not-italic">
                E-Comm, 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
              </address>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-poppins font-medium text-[18px] text-heading-text mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="font-poppins font-normal text-[14px] text-link-text hover:text-blue-600 hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          
          <div className="h-[1.08px] bg-[#F6F7F8] mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="font-proxima text-[14px] text-copyright-text mb-4 md:mb-0">&copy; 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className="flex items-center space-x-2">
              <Image src="/payment-mastercard.svg" alt="Amex" width={40} height={25} />
              <Image src="/payment-amex.svg" alt="Mastercard" width={40} height={25} />
              <Image src="/payment-paypal.svg" alt="Paypal" width={40} height={25} />
              <VisaIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;