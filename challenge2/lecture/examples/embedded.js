new_comment = {
  author: "Kyle",
  date: new Date(),
  text: "great book",
  votes: 5
};

db.posts.update(
  { text: "Destination Moon" },
  {
    '$push': { comments: new_comment },
    '$inc': { comments_count: 1 }
  }
);

db.posts.find({ 'comments.author': "Kyle" });

db.posts.find({ 'comments.votes': { $gt: 50 } });
