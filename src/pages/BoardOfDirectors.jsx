import React from 'react'

const BoardOfDirectors = () => {
  const boardMembers = [
    {
      name: 'Dr. Kwame Osei',
      title: 'Chairman & Chief Executive',
      bio: 'Visionary leader with 25+ years in microfinance and community development across West Africa.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Amara Mensah',
      title: 'Vice Chair, Operations',
      bio: 'Operations strategist with expertise in scaling fintech platforms and customer-centric growth.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Fatima Al-Rashid',
      title: 'Director, Risk & Compliance',
      bio: 'Regulatory expert ensuring Onit maintains highest standards of governance and security.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Tunde Adeyemi',
      title: 'Director, Technology & Innovation',
      bio: 'Tech pioneer building secure, scalable infrastructure for financial inclusion.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sophie Dupont',
      title: 'Director, Impact & Partnerships',
      bio: 'Social entrepreneur connecting Onit with NGOs and community organizations across Africa.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Jamal Hassan',
      title: 'Independent Director',
      bio: 'Investment advisor and governance expert bringing diverse perspective to board decisions.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    }
  ]

  return (
    <section className="page board-of-directors reveal-auto">
      <div className="container py-12">
        <h1 className="about-title">Board of Directors</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">Meet the experienced leaders and visionaries guiding Onit's mission to expand financial access across Africa.</p>

        <div className="board-grid mt-16">
          {boardMembers.map((member, idx) => (
            <div key={idx} className="board-member-card reveal-auto">
              <div className="member-image" style={{ backgroundImage: `url('${member.image}')` }}></div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoardOfDirectors
