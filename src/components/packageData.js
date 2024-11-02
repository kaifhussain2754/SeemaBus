import { duration } from "@mui/material";

const packageData = [
  {
    id: 1,
    title: "4-Day Manali and Kullu Adventure Itinerary",
    image: "/manali.jpg",  // Add actual image URL here
    description: `Day 1: Arrival in Manali
    Arrive in Manali, either by road or air (nearest airport: Bhuntar Airport, Kullu). Check in to your hotel or resort in Manali. Spend the evening exploring the local markets and enjoying local cuisine. Overnight stay in Manali.

    Day 2: Manali Sightseeing
    After breakfast, visit the Hadimba Temple, Manu Temple, and the old Manali village. Explore the Club House for recreational activities. Enjoy a leisurely stroll along the Mall Road and do some shopping. Overnight stay in Manali.

    Day 3: Rohtang Pass or Solang Valley and Kullu
    Option 1: Rohtang Pass If Rohtang Pass is accessible (usually open from May to October), take a day trip to Rohtang Pass, known for its scenic beauty and adventure activities. Engage in snow activities, like snowmobiling and skiing. In the evening, return to Manali and then proceed to Kullu.
    Option 2: Solang Valley If Rohtang Pass is closed or you prefer not to go there, visit Solang Valley for adventure activities. Enjoy paragliding, zorbing, and more. In the evening, head to Kullu.

    Day 4: Kullu Sightseeing and Departure
    In Kullu, visit Kullu Shawl Factory, Kullu Vaishno Devi Temple, and explore the local markets. Enjoy river rafting in the Beas River, if you're interested in adventure. After exploring Kullu, return to Manali. Check out from your hotel in Manali and depart for your onward journey.`,
    duration: "4 Days / 3 Nights",
    price: "N/A"
  },
  {
    id: 2,
    title: "5-Day Kerala Backwater and Hill Station Tour",
    image: "/kerela.jpg",  // Add actual image URL here
    description: `Day 1: Arrival in Cochin (Kochi)
Arrive at Cochin International Airport, where you will check in to your hotel and unwind. In the evening, consider attending a captivating Kathakali dance performance or exploring the charming Fort Kochi area.

Day 2: Cochin Sightseeing
Embark on a sightseeing tour of Cochin, visiting notable attractions such as Fort Kochi, St. Francis Church, and the Dutch Palace. Don't miss the opportunity to see the iconic Chinese fishing nets. Stroll through the scenic Jew Town and stop by the historic Paradesi Synagogue.

Day 3: Journey to Munnar
Drive to Munnar, a picturesque hill station, which takes approximately 4-5 hours. Along the way, make stops at the stunning Cheeyappara and Valara Waterfalls. Upon arrival, check in to your Munnar hotel and enjoy a leisurely evening.

Day 4: Exploring Munnar
Spend the day discovering Munnar's breathtaking tea plantations and visit the Tea Museum. Explore Mattupetty Dam and Echo Point, and enjoy a scenic drive through the Anamudi hills and Eravikulam National Park, home to the endangered Nilgiri Tahr.

Day 5: Departure
After checking out from your Munnar hotel, drive to Alleppey (Alappuzha) or Kumarakom for an unforgettable backwater houseboat cruise (approximately 4-5 hours). Relax on the houseboat while savoring traditional Kerala cuisine. Conclude your day with an overnight stay on the houseboat or at a serene lakeside resort.`,
    duration: "5 Days / 4 Nights",
    price: "N/A"
  },
  {
    id: 3,
    title: "Rajasthan Heritage Tour",
    image: "/rajasthantour.jpg",  // Add actual image URL here
    description: `Day 1: Arrival in Jaipur
    Arrive in Jaipur and check into your hotel. Explore the City Palace, Jantar Mantar, and the Hawa Mahal. Overnight stay in Jaipur.

    Day 2: Jaipur and Pushkar
    Visit the Amber Fort and enjoy an elephant ride. Drive to Pushkar in the evening. Visit the Pushkar Lake and Brahma Temple. Overnight stay in Pushkar.

    Day 3: Udaipur Sightseeing
    Travel to Udaipur, the city of lakes. Visit Lake Pichola, City Palace, and Jagdish Temple. Enjoy a boat ride in the evening. Overnight stay in Udaipur.

    Day 4: Departure from Udaipur
    After breakfast, check out and depart from Udaipur for your onward journey.`,
    duration: "4 Days / 3 Nights",
    price: "N/A"
  },
  {
    id: 4,
    title: "Himachal Adventure Tour",
    image: "/himachal.jpg",  // Add actual image URL here
    description: `Day 1: Arrival in Shimla
    Arrive in Shimla and explore the Mall Road, Christ Church, and Jakhoo Temple. Overnight stay in Shimla.

    Day 2: Kufri and Chail
    Visit Kufri for snow activities like skiing and snowboarding. Continue to Chail for sightseeing. Overnight stay in Shimla.

    Day 3: Manali and Solang Valley
    Travel to Manali and visit Solang Valley for adventure sports like paragliding. Overnight stay in Manali.

    Day 4: Departure from Manali
    After breakfast, check out and depart for your onward journey.`,
    duration: "4 Days / 3 Nights",
    price: "N/A"
  },
  {
    id: 5,
    title: "Leh Ladakh Itinerary",
    image: "/ladakh.jpg",  // Add actual image URL here
    description: `Day 1: Arrival in Leh
Arrive at Kushok Bakula Rimpochee Airport in Leh. Take the day to acclimatize to the high altitude, as Leh is situated at approximately 11,500 feet. Rest and relax to allow your body to adjust.

Day 2: Leh Local Sightseeing
Explore local attractions, including Leh Palace, Shey Palace, and Thiksey Monastery. Take some time to wander through local markets for souvenirs while further acclimatizing to the altitude.

Day 3: Nubra Valley
Embark on a drive to Nubra Valley, which takes about 4-5 hours. Upon arrival, visit Diskit Monastery and the stunning Hunder Sand Dunes. Don’t miss the opportunity for a camel ride on the unique double-humped Bactrian camels.

Day 4: Pangong Lake
Drive to the breathtaking Pangong Lake, approximately a 5-6 hour journey. Enjoy the stunning vistas of the lake and spend the night in accommodations near the lake, whether in a camp or a guesthouse.

Day 5: Return to Leh
Make your way back to Leh from Pangong Lake. On your journey, stop at Hemis Monastery and revisit Thiksey Monastery. Spend the remainder of the day relaxing in Leh or explore any attractions you may have missed on the first day.

Optional Day 6:
If you have an extra day, consider exploring nearby destinations like Tso Moriri Lake or visiting additional monasteries in the region.ˀ`,
    duration: "4 Days / 3 Nights",
    price: "N/A"
  },
  {
    id: 6,
    title: "Char Dham Yatra Itinerary",
    image: "/4 dham.png",  // Add actual image URL here
    description: `Day 1: Arrival in Dehradun or Haridwar
Arrive in Dehradun or Haridwar, the starting point for your Char Dham Yatra. Check in to your hotel and relax after your journey. If you arrive in Haridwar, be sure to attend the Ganga Aarti ceremony at Har Ki Pauri.

Day 2: Haridwar/Rishikesh to Yamunotri
Depart from Haridwar or Rishikesh and travel to Yamunotri, the first Dham. Reach Jankichatti, the base for your trek to Yamunotri. Depending on your preference, trek to Yamunotri or hire a pony or doli service. Visit the Yamunotri Temple, take a holy dip in the Yamuna River, and offer your prayers. Afterward, return to Jankichatti and drive back to your hotel.

Day 3: Yamunotri to Gangotri
Leave for Gangotri, the second Dham, via Uttarkashi. Upon arrival, visit the Gangotri Temple, dedicated to Goddess Ganga, and take a holy dip in the Bhagirathi River. Spend the night at your hotel in Uttarkashi or Harsil.

Day 4: Uttarkashi/Harsil to Kedarnath
Travel from Uttarkashi or Harsil to Kedarnath, the third Dham. Arrive at Gaurikund, the starting point for the trek to Kedarnath. Trek to Kedarnath or opt for a pony/doli service to reach the Kedarnath Temple, one of the holiest Shiva shrines. Enjoy an overnight stay in Kedarnath or nearby accommodations.

Day 5: Kedarnath to Badrinath
Depart for Badrinath, the fourth and final Dham. Visit the Badrinath Temple, dedicated to Lord Vishnu, and take a holy dip in the Tapt Kund. Explore nearby attractions, including Mana Village and the Vyas Cave. Spend the night at your hotel in Badrinath.

Day 6: Badrinath to Dehradun/Haridwar
Drive back to Dehradun or Haridwar, concluding your Char Dham Yatra. You may spend the evening exploring these cities or attending another Ganga Aarti ceremony.

Day 7: Departure
Check out from your hotel and depart for your onward journey.`,
    duration: "7 Days / 6 Nights",
    price: "N/A"
  },
  {
    id: 7,
    title: "5-Day Kashmir Tour Itinerary",
    image: "/kashmir.jpg",  // Add actual image URL here
    description: `Day 1: Arrival in Srinagar
Upon your arrival at Srinagar Airport, you will be greeted by our representative, who will assist you with the transfer to your hotel or deluxe houseboat. In the afternoon, enjoy a relaxing shikara ride on Dal Lake, where you can explore the floating vegetable gardens. This serene ride offers excellent birdwatching opportunities, with various species such as Kingfisher, Little Bittern, and Common Pariah Kites. Overnight stay in your hotel or deluxe houseboat.

Day 2: Srinagar to Gulmarg
After a delicious breakfast, check out of your hotel and drive to Gulmarg via Tangmarg Road, covering approximately 50 km. Gulmarg, renowned for its lush hills adorned with colorful flowers, is a true paradise for nature lovers. Upon arrival, check in at your hotel and take some time to relax. Consider taking a gondola ride (at your own expense) for breathtaking views of the fir-clad slopes. Spend the evening leisurely exploring enchanting valleys and mountain streams before settling in for the night at your hotel.

Day 3: Gulmarg to Pahalgam
After breakfast, check out from your hotel in Gulmarg and head to Pahalgam, located in Anantnag District. Pahalgam, known as the "Village of Shepherds," is a popular tourist destination with stunning views and an elevation of 8,989 feet. You can unwind in your hotel or engage in activities like white-water rafting (at direct cost). Pahalgam serves as the entry point to the sacred Amarnath Cave, a significant site for Hindus. Explore local attractions like Aru Valley, Betaab Valley, and Chandanwari. Enjoy a leisurely evening and a comfortable overnight stay in Pahalgam.

Day 4: Pahalgam to Srinagar
After a hearty breakfast, check out from the hotel and drive back to Srinagar via NH-1A and NH-501. Upon arrival, embark on an excursion to the Grand Mughal Gardens, including Chashme Shahi, Nishat Bagh, and Shalimar Bagh. Spend the rest of the day at your leisure, taking in the beauty of Srinagar before enjoying another comfortable overnight stay.

Day 5: Departure from Srinagar
After a scrumptious breakfast, check out from your hotel and transfer to Srinagar Airport for your onward journey.`,
    duration: "4 Days / 3 Nights",
    price: "₹45000"
  },
  {
    id: 8,
    title: 'Agra Tour Package',
    image: '/tajmahal.jpg',
    description: `Day 1: Arrival in Agra
Arrive in Agra via train or car from nearby cities such as Delhi or Jaipur. After checking in to your hotel and freshening up, kick off your Agra tour with a visit to the Taj Mahal, one of the Seven Wonders of the World. Take your time to admire the stunning white marble monument and its gardens. Enjoy lunch at a local restaurant, indulging in delicious Mughlai cuisine. In the afternoon, explore the Agra Fort, a UNESCO World Heritage Site, known for its magnificent architecture and rich history. As the evening approaches, head to Mehtab Bagh for a breathtaking view of the Taj Mahal at sunset. Return to your hotel for an overnight stay.

Day 2: Agra Sightseeing and Departure
After breakfast, embark on a visit to Fatehpur Sikri, another UNESCO World Heritage Site and the former Mughal capital. Discover its impressive palaces and forts before heading back to Agra for lunch. In the afternoon, visit the Tomb of Itimad-ud-Daulah, often referred to as the "Baby Taj," which features intricate marble inlay work. If time permits, take a stroll through the local markets for shopping and to find souvenirs. Finally, depart from Agra for your onward journey by train, car, or flight.`,
duration: '2 Days / 1 Night',
price: '',
  },

  {
    id: 9,
    title: '4-Day Golden Triangle Tour: Jaipur, Agra, and Delhi',
    image: '/goldentriagle.jpeg',
    description: `Day 1 - Arrival in Jaipur
Upon your arrival at the airport or railway station, you will be picked up and transferred to your hotel. After enjoying breakfast, embark on a sightseeing tour of Jaipur, visiting notable attractions such as Birla Mandir, Albert Hall, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal, and Amer Fort. Return to your hotel for an overnight stay.

Day 2 - Jaipur to Agra
After breakfast and hotel check-out, travel to Agra. En route, stop to explore Fatehpur Sikri. Upon arriving in Agra, visit the iconic Taj Mahal and the Red Fort before heading to your hotel for an overnight stay.

Day 3 - Agra to Delhi
Enjoy breakfast and check out of the hotel before proceeding to Delhi. Explore key sites including Red Fort, India Gate, Qutub Minar, Lotus Temple, and Akshardham Temple. After a day of sightseeing, check in to your hotel for the night.

Day 4 - Departure
After checking out of the hotel, you will be dropped off at your designated destination.`,

duration: '4 Days / 3 Nights',
price: 'N/A',
  }
];

export default packageData;
