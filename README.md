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

1. Install yarn [here](https://classic.yarnpkg.com/en/docs/install)
2. Run `yarn` in the root directory
3. Clone `.env.template` and rename the new file as `.env`
4. Add the relevant config details for next-auth, Google OAuth credentials, and GitHub OAuth credentials
5. Add your local MySQL connection string (syntax: `mysql://USER:PASSWORD@HOST:PORT/DATABASE`)
6. Run `yarn dev` to get the server running

### Misc

- Run `npx prisma studio` to get the prisma client up and running
