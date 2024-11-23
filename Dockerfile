# Bắt đầu với image chính thức của Node.js
FROM node:20-alpine

# Thiết lập thư mục làm việc cho container
WORKDIR /app

# Sao chép package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Thiết lập các build arguments
ARG NODE_ENV
ARG PORT
ARG KEY_PAYMENT
ARG INFURA_URL
ARG TOKEN_ADDRESS

# Biến môi trường cho container runtime
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT
ENV KEY_PAYMENT=$KEY_PAYMENT
ENV INFURA_URL=$INFURA_URL
ENV TOKEN_ADDRESS=$TOKEN_ADDRESS

# Biên dịch mã NestJS (nếu cần)
RUN npm run build

# Mở cổng
EXPOSE $PORT

# Chạy ứng dụng NestJS
CMD ["npm", "run", "start:prod"]
