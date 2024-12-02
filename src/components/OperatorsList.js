import React from 'react';
import OperatorListItem from "@/components/OperatorListItem";

const operatorsData = [
    {
        logo: '/images/blue-star-ferries.png',
        name: 'Blue Star Ferries',
        reviewCount: '1,342',
        description: 'Blue Star Ferries is currently the biggest ferry company in Greece.\n' +
            'It is a member of Attica Group, one of the most significant companies in the Greek shipping industry.\n' +
            'Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star was established in November 1992, its passengers mainly in the Adriatic and Ionian Sea between Greece and Italy. Later on, from 1980 until 2000 the company developed rapidly and started bringing into action ferries both in Greece and abroad.',
        shortDescription: 'Blue Star Ferries is currently the biggest ferry company in Greece.\n' +
            'It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades. \n',
        location: [{ name: 'Greece', flag: '/images/greece.jpg' }],
        vesselsNumber: 8,
        ferryTypes: '8 normal',
        popularVessels: 'Blue Star Delos, Blue Star Naxos',
        moreInfoLink: '#',
        icons: 4,
        halfStar: 1,
    },
    {
        logo: '/images/seajets.png',
        name: 'Seajets',
        reviewCount: '2,467',
        description: 'Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. \n' +
            'The company\'s passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots. \n' +
            'Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrion), other parts of the mainland (Thessaloniki, Kavala, Peloponnese) and Crete (Rethymno and Heraklion) to the islands of the Cyclades (Mykonos, Santorini, Paros, Naxos and more), the connections are available on a daily basis.',
        shortDescription: 'Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. \n' +
            'The company\'s passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots. \n',
        location: [{ name: 'Greece', flag: '/images/greece.jpg' }],
        vesselsNumber: 17,
        ferryTypes: '10 normal and 7 high-speed ferries',
        popularVessels: 'WorldChampion jet, Seajet 2',
        moreInfoLink: '#',
        icons: 2,
        halfStar: 1,
    },
    {
        logo: '/images/anek-superfast.png',
        name: 'Anek-Superfast',
        reviewCount: '667',
        description: 'Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries. \n ' +
            'The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology. \n' +
            'The ferry lines available by the companies connect not only Athens to Crete (Piraeus to Heraklion and Chania) but also makes the route from Italy to Greece (from Ancona, Bari and Venice to Patra, Corfu and Igoumenitsa). \n' +
            'Anek-Superfast uses 6 ferries of various sizes in total that can carry from 900 to 2200 passengers, depending on the vessel. Their speed also varies, from 21 to 31 knots. All of them have garages for cars and motorbikes, with the capacity to carry from 170 to 900 vehicles per vessel. \n' +
            'The ferries offer many facilities, from restaurants and cafe-bars to shops and play areas for children. Some of them also provide additional entertainment facilities. Moreover, various types of cabins and seats are available, as well as special cabins and kennels for pets.',
        shortDescription: 'Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries. \n ' +
            'The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology. \n',
        location: [
            { name: 'Greece', flag: '/images/greece.jpg' },
            { name: 'Italy', flag: '/images/italy.jpg' }
        ],
        vesselsNumber: 6,
        ferryTypes: 'Normal Ferries',
        popularVessels: 'Superfast XII, Superfast XI',
        moreInfoLink: '#',
        icons: 2,
        halfStar: 1,
    },
];

const OperatorList = () => {
    return (
        <div>
            {operatorsData.map((operator) => (
                <OperatorListItem key={operator.name} {...operator} />
            ))}
        </div>
    );
};

export default OperatorList;
