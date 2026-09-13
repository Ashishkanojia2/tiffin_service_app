
FROM node:22.22.3-alpine

COPY tsconfig.json tsconfig.json
COPY react-native.config.js react-native.config.js
COPY App.tsx App.tsx
COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src

RUN npm install
CMD ["npx", "react-native", "start", "--reset-cache"]

