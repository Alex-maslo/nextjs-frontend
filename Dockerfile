# 1. Обираємо офіційний Node.js 22 Alpine образ
FROM node:22-alpine

# 2. Робоча директорія всередині контейнера
WORKDIR /app

# 3. Копіюємо package.json та package-lock.json
COPY package*.json ./

# 4. Встановлюємо всі залежності
RUN npm install

# 5. Копіюємо весь код
COPY . .

# 6. Збираємо Next.js проект
RUN npm run build

# 7. Відкриваємо порт 3000
EXPOSE 3000

# 8. Запускаємо Next.js у продакшн режимі
CMD ["npm", "start"]
