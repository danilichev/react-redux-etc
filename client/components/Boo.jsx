import React from 'react';
import faker from 'faker';

const getReview = (date, isViewed = false, isMarked = false) => ({
  _id: faker.random.uuid(),
  author: {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
  },
  date,
  rating: faker.random.number({ min: 1, max: 5 }),
  text: faker.lorem.paragraph(),
  isViewed,
  isMarked,
});

const getReviews = () => {
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const now = new Date();
  const yesterday = new Date(now - millisecondsInDay);
  const fourDaysAgo = new Date(now - millisecondsInDay * 4);

  const reviews = [];

  const viewedReviewsNumber = faker.random.number({ min: 10, max: 20 });
  
  for (let i = 0; i < viewedReviewsNumber; i++) {
    reviews.push(getReview(
      faker.date.between(fourDaysAgo, yesterday), 
      true,
      faker.random.boolean(),
    ));
  }

  const unviewedReviewsNumber = faker.random.number({ min: 2, max: 4 });

  for (let i = 0; i < unviewedReviewsNumber; i++) {
    reviews.push(getReview(
      faker.date.between(yesterday, now), 
      false,
    ));
  }

  return reviews;
}

// console.log({ review: getReview(new Date(), true, false) });
console.log({ review: getReviews() });


const Boo = () => <div>Boo!</div>;

export default Boo;