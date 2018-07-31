create table stories_and_characters (stories_and_plotsID serial primary key, storyID serial REFERENCES stories(storyID), characterID serial REFERENCES characters(characterID))
