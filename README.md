# LifeHack 2022 Website

## Description

Website created for LifeHack 2022 hackathon, where participants can register and earn / view the points they gathered during the event.

Activities that earn points include:

- Early sign-up (website)
- (9th July) Games: Wikipedia Race (1 rep), Don't forget the lyric (1 rep), Crossword Puzzles (fastest fingers first)
- (9th July) Visiting Q&A booths by sponsors
- (16th July) Visiting sponsor booths
- (16th July) Kahoot winners

## Setup Guide

1. Run `yarn` in the root directory
2. Clone `.env.template` and rename the new file as `.env`
3. Add the relevant config details for Next Auth, Google OAuth credentials, and GitHub OAuth credentials
4. Add your local MySQL connection string
5. Run `yarn dev` to get the server running

### Misc

- Run `npx prisma studio` to get the prisma client up and running
