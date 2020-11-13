FROM node:12.16.1
RUN mkdir e2e-tests

COPY ./ /e2e-tests

WORKDIR /e2e-tests

VOLUME /e2e-tests/results

RUN npm install