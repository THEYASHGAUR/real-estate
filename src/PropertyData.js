

const propertyData = [
    {
        location: 'New Delhi',
        id: 1,
        imageUrl: '/assets/img1.jpg',
        price: '$2000/month',
        bhk: 2,
        pincode: '12345',
        amenities: ['Swimming Pool', 'Gym', 'Parking'],
        area: '1000 sqft',
        description: 'Modern 2 BHK apartment in prime area...',
        contact: 'agent@example.com',
    },
    {
        location: 'Mumbai',
        id: 2,
        imageUrl: '/assets/img2.jpg',
        price: '$1700/month',
        bhk: 1,
        pincode: '67890',
        amenities: ['Balcony', 'Parking'],
        area: '500 sqft',
        description: 'Cozy 1 BHK flat with scenic views...',
        contact: 'agent@example.com',
    },
    {
        id: 3,
        imageUrl: '/assets/img3.jpg',
        price: '$2000/month',
        bhk: 3,
        location:'Banglore',
        pincode: '45678',
        amenities: ['Gym', 'Parking', 'Security'],
        area: '1000 sqft',
        description: 'Spacious 3 BHK apartment near the park...',
        contact: 'agent@example.com',
    },
    {
        id: 4,
        imageUrl: '/assets/img4.jpg',
        price: '$3000/month',
        bhk: 3,
        location: 'New Delhi',
        pincode: '45678',
        amenities: ['Swimming Pool', 'Gym', 'Parking', 'Balcony'],
        area: '1000 sqft',
        description: 'Luxurious 3 BHK penthouse in the heart of the city...',
        contact: 'agent@example.com',
    },
    {
        id: 5,
        imageUrl: '/assets/img5.jpg',
        price: '$2000/month',
        bhk: 2,
        location: 'Mumbai',
        pincode: '78901',
        amenities: ['Swimming Pool', 'Parking'],
        area: '1000 sqft',
        description: 'Modern 2 BHK apartment with great views...',
        contact: 'agent@example.com',
    },
    // Entry 32
    {
        id: 6,
        imageUrl: '/assets/img6.jpg',
        price: '$1700/month',
        bhk: 4,
        location: 'Banglore',
        pincode: '23456',
        amenities: ['Lake View', 'Gym', 'Parking'],
        area: '500 sqft',
        description: 'Charming 1 BHK flat near the lake...',
        contact: 'agent@example.com',
    },
    {
        id: 7,
        imageUrl: '/assets/img7.jpg',
        price: '$2000/month',
        bhk: 3,
        location: 'Mumbai',
        pincode: '56789',
        amenities: ['Garden', 'Play Area', 'Parking'],
        area: '1000 sqft',
        description: 'Spacious 3 BHK house with a lovely garden...',
        contact: 'agent@example.com',
    },
    // Entry 34
    {
        id: 8,
        imageUrl: '/assets/img8.jpg',
        price: '$2000/month',
        bhk: 2,
        location: 'New Delhi',
        pincode: '34567',
        amenities: ['Mountain View', 'Parking'],
        area: '2000 sqft',
        description: 'Scenic 2 BHK apartment on a hill...',
        contact: 'agent@example.com',
    },
    {
        id: 9,
        imageUrl: '/assets/img9.jpg',
        price: '$2000/month',
        bhk: 3,
        location: 'New Delhi',
        pincode: '45678',
        amenities: ['Swimming Pool', 'Gym', 'Parking'],
        area: '3000 sqft',
        description: 'Modern 3 BHK townhouse in a peaceful neighborhood...',
        contact: 'agent@example.com',
    },
    {
        id: 10,
        imageUrl: '/assets/img10.jpg',
        price: '$2000/month',
        bhk: 5,
        location: 'Banglore',
        pincode: '56789',
        amenities: ['Ocean View', 'Parking'],
        area: '4000 sqft',
        description: '2 BHK apartment with a stunning ocean view...',
        contact: 'agent@example.com',
    },
    // Entry 37
    {
        id: 11,
        imageUrl: '/assets/img11.jpg',
        price: '$1700/month',
        bhk: 4,
        location:'Mumbai',
        pincode: '67890',
        amenities: ['Riverside View', 'Parking'],
        area: '500 sqft',
        description: 'Cozy 1 BHK flat with a view of the river...',
        contact: 'agent@example.com',
    },
    {
        id: 12,
        imageUrl: '/assets/img5.jpg',
        price: '$3000/month',
        bhk: 3,
        location: 'Banglore',
        pincode: '78901',
        amenities: ['Park', 'Gym', 'Parking'],
        area: '1000 sqft',
        description: 'Spacious 3 BHK house with access to a park...',
        contact: 'agent@example.com',
    },
    {
        location: 'Mumbai',
        id: 13,
        imageUrl: '/assets/img10.jpg',
        price: '$1000/month',
        bhk: 5,
        pincode: '23456',
        amenities: ['Garden', 'Parking'],
        area: '2000 sqft',
        description: '2 BHK apartment with a serene garden...',
        contact: 'agent@example.com',
    },
    {
        location: 'New Delhi',
        id: 14,
        imageUrl: '/assets/img9.jpg',
        price: '$2000/month',
        bhk: 3,
        pincode: '34567',
        amenities: ['City View', 'Gym', 'Parking'],
        area: '3000 sqft',
        description: '3 BHK apartment with breathtaking city views...',
        contact: 'agent@example.com',
    },
    {
        location: 'Pune',
        id: 15,
        imageUrl: '/assets/img5.jpg',
        price: '$1000/month',
        bhk: 1,
        pincode: '45678',
        amenities: ['Forest View', 'Parking'],
        area: '500 sqft',
        description: '1 BHK cottage surrounded by nature...',
        contact: 'agent@example.com',
    },
    {
        location: 'Banglore',
        id: 16,
        imageUrl: '/assets/img8.jpg',
        price: '$2000/month',
        bhk: 3,
        pincode: '56789',
        amenities: ['Sunset View', 'Parking'],
        area: '4000 sqft',
        description: '3 BHK apartment with panoramic sunset views...',
        contact: 'agent@example.com',
    },
    {
        location: 'Haryana',
        id: 17,
        imageUrl: '/assets/img5.jpg',
        price: '$2000/month',
        bhk: 2,
        pincode: '67890',
        amenities: ['Meadow View', 'Parking'],
        area: '1000 sqft',
        description: '2 BHK apartment with a scenic meadow view...',
        contact: 'agent@example.com',
    },
    // Entry 44
    {
        location: 'Pune',
        id: 18,
        imageUrl: '/assets/img5.jpg',
        price: '$1700/month',
        bhk: 1,
        pincode: '78901',
        amenities: ['Countryside View'],
        area: '500 sqft',
        description: 'Quaint 1 BHK cabin in a serene countryside...',
        contact: 'agent@example.com',
    },
    {
        location: 'Haryana',
        id: 19,
        imageUrl: '/assets/img6.jpg',
        price: '$2000/month',
        bhk: 3,
        pincode: '23456',
        amenities: ['Greenery View', 'Gym', 'Parking'],
        area: '500 sqft',
        description: '3 BHK villa surrounded by lush greenery...',
        contact: 'agent@example.com',
    },
    // Entry 46
    {
        location: 'Punjab',
        id: 20,
        imageUrl: '/assets/img8.jpg',
        price: '$2000/month',
        bhk: 2,
        pincode: '34567',
        amenities: ['Hilltop View', 'Parking'],
        area: '1000 sqft',
        description: '2 BHK apartment with panoramic hilltop views...',
        contact: 'agent@example.com',
    },
    {
        location: 'New Delhi',
        id: 21,
        imageUrl: '/assets/img2.jpg',
        price: '$1700/month',
        bhk: 3,
        pincode: '45678',
        amenities: ['Oceanfront View', 'Swimming Pool', 'Parking'],
        area: '2000 sqft',
        description: '3 BHK apartment right by the ocean...',
        contact: 'agent@example.com',
    },

    {
        location: 'Pune',
        id: 22,
        imageUrl: '/assets/img3.jpg',
        price: '$1700/month',
        bhk: 4,
        pincode: '56789',
        amenities: ['Vintage Charm', 'Parking'],
        area: '500 sqft',
        description: 'Charming 1 BHK apartment with vintage character...',
        contact: 'agent@example.com',
    },
    {
        location: 'Pune',
        id: 23,
        imageUrl: '/assets/img7.jpg',
        price: '$3000/month',
        bhk: 3,
        pincode: '67890',
        amenities: ['Mountain View', 'Gym', 'Parking'],
        area: '2000 sqft',
        description: '3 BHK retreat with stunning mountain views...',
        contact: 'agent@example.com',
    },

    {
        location: 'Haryana',
        id: 24,
        imageUrl: '/assets/img9.jpg',
        price: '$1700/month',
        bhk: 5,
        pincode: '78901',
        amenities: ['Courtyard', 'Parking'],
        area: '2000 sqft',
        description: '2 BHK apartment with a serene courtyard...',
        contact: 'agent@example.com',
    },
    {
        location: 'Pune',
        id: 25,
        imageUrl: '/assets/img4.jpg',
        price: '$2000/month',
        bhk: 3,
        pincode: '23456',
        amenities: ['Park View', 'Gym', 'Parking'],
        area: '4000 sqft',
        description: '3 BHK apartment with parkside views...',
        contact: 'agent@example.com',
    },

    {
        location: 'Haryana',
        id: 26,
        imageUrl: '/assets/img11.jpg',
        price: '$2000/month',
        bhk: 2,
        pincode: '34567',
        amenities: ['River View', 'Parking'],
        area: '4000 sqft',
        description: '2 BHK apartment with riverside views...',
        contact: 'agent@example.com',
    },
    {
        location: 'Haryana',
        id: 27,
        imageUrl: '/assets/img8.jpg',
        price: '$2000/month',
        bhk: 2,
        pincode: '45678',
        amenities: ['Lake View', 'Gym', 'Parking'],
        area: '1000 sqft',
        description: '2 BHK apartment with picturesque lake views...',
        contact: 'agent@example.com',
    },
    
    {
        location: 'Pune',
        id: 28,
        imageUrl: '/assets/img9.jpg',
        price: '$1700/month',
        bhk: 1,
        pincode: '56789',
        amenities: ['Countryside View', 'Garden'],
        area: '500 sqft',
        description: '1 BHK cottage in a peaceful countryside...',
        contact: 'agent@example.com',
    },
    {
        location: 'Punjab',
        id: 29,
        imageUrl: '/assets/img3.jpg',
        price: '$3000/month',
        bhk: 3,
        pincode: '67890',
        amenities: ['Meadow View', 'Parking'],
        area: '1000 sqft',
        description: '3 BHK house with beautiful meadow views...',
        contact: 'agent@example.com',
    },
    {
        location: 'Pune',
        id: 30,
        imageUrl: '/assets/img1.jpg',
        price: '$4000/month',
        bhk: 2,
        pincode: '78901',
        amenities: ['Hillside View', 'Parking'],
        area: '2000 sqft',
        description: '2 BHK apartment with stunning hillside views...',
        contact: 'agent@example.com',
    }

];

export default propertyData;
