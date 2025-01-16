import React from 'react';
import { Twitter, Youtube, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/share?url=https://gartype.game',
    color: 'hover:bg-blue-400'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com',
    color: 'hover:bg-red-600'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com',
    color: 'hover:bg-pink-600'
  }
];

export function SocialShare() {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block p-3 bg-gray-800 rounded-full transition-colors ${social.color}`}
          title={`Share on ${social.name}`}
        >
          <social.icon className="w-5 h-5 text-white" />
        </a>
      ))}
    </div>
  );
}