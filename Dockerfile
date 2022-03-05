FROM fusuf/whatsasena:latest

RUN git clone https://github.com/dulensathsara/Qeen-Alfi-X /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN git clone https://github.com/dulensathsara/Qeen-Alfi-X-Installer
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
