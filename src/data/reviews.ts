export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  timeAgo: string;
  cakeOrdered: string;
  reviewText: string;
  source: "Google Maps" | "Instagram";
  ownerReply?: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "review-1",
    name: "Sonia Sharma",
    rating: 5,
    timeAgo: "4 months ago",
    cakeOrdered: "Short-Notice Custom Birthday Cake",
    reviewText:
      "The cake was exactly the way we wanted. She is truly a perfectionist and prepared on a short notice. It was delicious. At first glance, it was jaw dropping because we thought there might be difference in the presentation but nope. AMAZING!! Loved it!",
    source: "Google Maps",
    ownerReply: "Thanks Sonia. Appreciate the feedback. See you again!",
  },
  {
    id: "review-2",
    name: "Manpreet Dhaliwal",
    rating: 5,
    timeAgo: "3 months ago",
    cakeOrdered: "Son’s Birthday Celebration Cake",
    reviewText:
      "The cake we got for my son’s birthday was absolutely amazing! 🎂❤️ It looked beautiful, tasted delicious, and was exactly what we hoped for. Everyone loved it, and it made my son’s birthday extra special. Thank you so much for the wonderful cake and great service! We will definitely be ordering from you again. Highly recommend!",
    source: "Google Maps",
    ownerReply: "Thank-you Manpreet. We appreciate the feedback. Hope to see you again.",
  },
  {
    id: "review-3",
    name: "Smriti Kharb",
    rating: 5,
    timeAgo: "3 months ago",
    cakeOrdered: "Special Moment Custom Cake",
    reviewText:
      "The cake was amazing, both in looks and taste. Exactly how we wanted and delivered on time. Highly recommended for your special moments. Thanks Cakes by Sia :)",
    source: "Google Maps",
    ownerReply: "Thankyou Smriti. Glad you liked the cake. Appreciate the feedback.",
  },
  {
    id: "review-4",
    name: "Saleshni Sharma",
    rating: 5,
    timeAgo: "2 months ago",
    cakeOrdered: "Surprise Birthday Cake",
    reviewText:
      "Thank you doing my surprise birthday cake, the cake was super delicious just the way I like it. You adjusted the timing for late pick up, you have did an amazing job.",
    source: "Google Maps",
    ownerReply: "Thank you Saleshni. We appreciate your business. See you again!",
  },
];
