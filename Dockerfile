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

# Biên dịch mã NestJS (nếu cần)
RUN npm run build

# Mở cổng 3000 (cổng mặc định của NestJS)
EXPOSE 3002

# Chạy ứng dụng NestJS
CMD ["npm", "run", "start:prod"]