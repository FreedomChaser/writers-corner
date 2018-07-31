create table stories_and_plots (stories_and_plotsID serial primary key, storyID serial REFERENCES stories(storyID), plotID serial REFERENCES plots(plotID))
