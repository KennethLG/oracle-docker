FROM node:14

RUN apt-get update && apt-get install -y libaio1 wget unzip
WORKDIR /usr/src/app

RUN wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip && \
    unzip instantclient-basiclite-linuxx64.zip && rm -f instantclient-basiclite-linuxx64.zip && \
    cd /usr/src/app/instantclient* && rm -f *jdbc* *occi* *mysql* *mql1* *ipc1* *jar uidrvci genezi adrci && \
    echo /usr/src/app/instantclient* > /etc/ld.so.conf.d/oracle-instantclient.conf && ldconfig

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]