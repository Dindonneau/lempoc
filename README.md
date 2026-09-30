# lempoc

A small email-sequence app built with Meteor 3, React and TypeScript.

The goal is to use Meteor the way it is meant to be used: server-authoritative
and reactive end to end. No `autopublish`, no `insecure` — every read goes
through an explicit publication, every write through a validated method.

## Stack

- Meteor 3.5
- React 18
- TypeScript
- MongoDB

## Getting started

```bash
meteor npm install
meteor run
```

The app is served on http://localhost:3000.

> Use `meteor npm`, not `npm`: it runs against the Node version bundled with Meteor.
