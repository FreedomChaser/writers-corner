create table users_and_stories (users_and_storiesID serial primary key, userID serial REFERENCES users(userID), storyID serial REFERENCES stories(storyID))
