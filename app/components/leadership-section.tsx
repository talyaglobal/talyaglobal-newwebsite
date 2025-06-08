'use client'

import { Linkedin, Mail, Award, Building2, GraduationCap } from 'lucide-react'

export function LeadershipSection() {
  const leaders = [
    {
      name: 'Sarah Chen',
      position: 'Chief Executive Officer & Founder',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Sarah founded TalyaGlobal with a vision to create sustainable value through strategic investments. With over 20 years of experience in private equity and investment banking.',
      education: 'MBA Harvard Business School, BS Stanford University',
      experience: '20+ years',
      specialization: 'Strategic Planning, M&A',
      achievements: [
        'Forbes 40 Under 40 Financiers',
        'Led $5B+ in successful transactions',
        'Board member of 8+ companies'
      ]
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Investment Officer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Michael oversees investment strategy and portfolio management. His expertise spans technology, healthcare, and emerging markets with a track record of exceptional returns.',
      education: 'MBA Wharton, MS MIT',
      experience: '18+ years',
      specialization: 'Portfolio Management, Technology',
      achievements: [
        'Top 1% performer at Goldman Sachs',
        'Generated 25%+ IRR over 10 years',
        'Expert in tech valuations'
      ]
    },
    {
      name: 'Emily Thompson',
      position: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Emily leads operational excellence across our portfolio companies. She specializes in scaling operations, digital transformation, and sustainable business practices.',
      education: 'MBA Kellogg, BS UC Berkeley',
      experience: '15+ years',
      specialization: 'Operations, Digital Transformation',
      achievements: [
        'Scaled 5+ companies to $100M+ revenue',
        'McKinsey Principal for 8 years',
        'Sustainability advocate'
      ]
    },
    {
      name: 'David Kim',
      position: 'Head of Capital Markets',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'David manages investor relations and capital raising activities. His deep understanding of global markets helps secure optimal funding for our investment strategies.',
      education: 'MBA London Business School, BS NYU Stern',
      experience: '16+ years',
      specialization: 'Capital Markets, Investor Relations',
      achievements: [
        'Raised $2B+ in institutional capital',
        'Former Morgan Stanley MD',
        'CFA Charter holder'
      ]
    },
  ]

  const advisors = [
    { name: 'James Wilson', role: 'Former CEO, Fortune 500 Tech Company' },
    { name: 'Dr. Lisa Parker', role: 'Healthcare Innovation Expert' },
    { name: 'Robert Chang', role: 'Global Markets Strategist' },
    { name: 'Maria Santos', role: 'ESG & Sustainability Leader' },
  ]

  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-background-secondary to-white">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team combines decades of investment expertise with operational excellence, 
            driving superior results for our investors and portfolio companies.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {leaders.map((leader, index) => (
            <div 
              key={leader.name}
              className="tsmart-card p-8 hover:scale-105 transition-all duration-300 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors duration-200">
                    {leader.name}
                  </h3>
                  <div className="text-secondary-600 font-semibold mb-4">{leader.position}</div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{leader.bio}</p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center justify-center md:justify-start">
                      <Building2 className="h-4 w-4 text-primary-500 mr-2" />
                      <span className="text-gray-600">{leader.experience}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <GraduationCap className="h-4 w-4 text-primary-500 mr-2" />
                      <span className="text-gray-600">{leader.specialization}</span>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Education:</strong> {leader.education}
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary-900 mb-2 text-sm">Key Achievements</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {leader.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start">
                          <Award className="h-3 w-3 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start space-x-3">
                    <button className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors duration-200">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary-900 mb-8">Advisory Board</h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our distinguished advisory board provides strategic guidance and industry expertise 
            across all major sectors of our investment focus.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <div 
                key={advisor.name}
                className="tsmart-card p-6 text-center hover:scale-105 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="font-bold text-primary-900 mb-2">{advisor.name}</h4>
                <p className="text-sm text-gray-600">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="tsmart-card p-8 md:p-12 bg-gradient-to-r from-primary-50 to-secondary-50 text-center">
          <h3 className="text-3xl font-bold text-primary-900 mb-6">Our Philosophy</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            We believe that exceptional investment performance comes from combining rigorous analytical frameworks 
            with deep operational expertise. Our team works collaboratively to identify opportunities, 
            mitigate risks, and create sustainable value for all stakeholders.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-secondary-600 mb-2">Integrity</div>
              <p className="text-gray-600">Ethical leadership and transparent communication in all our relationships</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-600 mb-2">Excellence</div>
              <p className="text-gray-600">Commitment to delivering superior results through disciplined execution</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-600 mb-2">Innovation</div>
              <p className="text-gray-600">Embracing new technologies and methodologies to stay ahead of the market</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}