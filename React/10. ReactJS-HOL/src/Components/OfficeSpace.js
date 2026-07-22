import React from 'react';

function OfficeSpace() {
  // A single office object to display Name, Rent and Address
  const featuredOffice = {
    id: 0,
    name: 'Prestige Business Hub',
    rent: 75000,
    address: 'MG Road, Bengaluru',
    image: 'https://picsum.photos/id/1029/400/250'
  };

  // A list of office objects to loop through and display more data
  const officeList = [
    {
      id: 1,
      name: 'Green Park Offices',
      rent: 45000,
      address: 'Whitefield, Bengaluru',
      image: 'https://picsum.photos/id/1031/400/250'
    },
    {
      id: 2,
      name: 'Tech Tower Suites',
      rent: 82000,
      address: 'Hitech City, Hyderabad',
      image: 'https://picsum.photos/id/1040/400/250'
    },
    {
      id: 3,
      name: 'Riverside Co-Work',
      rent: 58000,
      address: 'Powai, Mumbai',
      image: 'https://picsum.photos/id/1050/400/250'
    },
    {
      id: 4,
      name: 'Sunrise Corporate Park',
      rent: 91000,
      address: 'Salt Lake, Kolkata',
      image: 'https://picsum.photos/id/1060/400/250'
    },
    {
      id: 5,
      name: 'Blue Sky Workspaces',
      rent: 39000,
      address: 'Anna Nagar, Chennai',
      image: 'https://picsum.photos/id/1074/400/250'
    }
  ];

  // Returns an inline CSS style object; using a JavaScript expression
  // inside JSX to decide the rent color -
  // Red if below 60000, Green if 60000 or above
  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div style={{ maxWidth: '750px', margin: '30px auto', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      {/* Element to display the heading of the page */}
      <h1 style={{ textAlign: 'center', color: '#1e3a5f' }}>
        Office Space Rental App
      </h1>

      {/* Featured office - displayed using an object and JSX attributes */}
      <div style={{
        border: '1px solid #d9e2ec',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '30px',
        backgroundColor: '#f4f8fb',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <h2>Featured Office</h2>
        {/* Attribute to display the image of the office space */}
        <img
          src={featuredOffice.image}
          alt={featuredOffice.name}
          width="400"
          style={{ borderRadius: '8px' }}
        />
        <p><strong>Name:</strong> {featuredOffice.name}</p>
        <p>
          <strong>Rent:</strong>{' '}
          <span style={getRentStyle(featuredOffice.rent)}>
            &#8377;{featuredOffice.rent}/month
          </span>
        </p>
        <p><strong>Address:</strong> {featuredOffice.address}</p>
      </div>

      {/* List of office objects, looped through using map() to display more data */}
      <h2>Available Office Spaces</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {officeList.map((office) => (
          <div
            key={office.id}
            style={{
              border: '1px solid #d9e2ec',
              borderRadius: '10px',
              padding: '15px',
              width: '300px',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={office.image}
              alt={office.name}
              width="270"
              style={{ borderRadius: '8px' }}
            />
            <h3>{office.name}</h3>
            <p>
              Rent:{' '}
              <span style={getRentStyle(office.rent)}>
                &#8377;{office.rent}/month
              </span>
            </p>
            <p>Address: {office.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfficeSpace;
