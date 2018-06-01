# LocalEmailer

This project stands up simple a web form intended to send you (or others) email reminders. It is important to note that this form is not secured in any way and, if exposed outside of a trusted network, could be abused.

![Alt text](/desktop.png?raw=true "Desktop View")

![Alt text](/mobile.png?raw=true "Mobile View")

## Configuration

There are two configuration files that you need to create.

### Client Configuration (.env.client.ts)

Sample: [.env.client.sample.ts](.env.client.sample.ts)

This file controls what is seen by the user. The labels for the buttons which represent possible recipients are configured here. The values of the selected buttons' labels are sent to the backend API when an email is submitted.

### Server Configuration (.env)

Sample: [.env.sample](.env.sample)

This file contains connection information for the email server to be used and account information for the address from which the mail will come. It also includes a map whose keys are the labels configured in .env.client and whose values are the recipient email addresses corresponding to those labels.

## Serving

A [docker file](Dockerfile) is included in this repository for ease of use. If you would prefer to run the server locally, you will need to run the following commands:
```
npm install
npm run build
npm run start
```

## Development

Some convenience commands are included in [package.json](package.json), `npm run start-watch` and `npm run build-watch`. These should both be run in individual terminal windows and should restart and rebuild the server whenever changes in the source files are detected.