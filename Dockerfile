# Usa la imagen oficial de Node.js como base
FROM node:18-alpine

# Establecer el directorio de trabajo en /app
WORKDIR /app/api2

# Copiar los archivos de package.json y package-lock.json
COPY ./api2/package*.json ./

# Instalar las dependencias del proyecto
RUN npm install --frozen-lockfile

# Copiar el resto de los archivos del proyecto
COPY ./api2 .

# Construir la aplicación Next.js
RUN npm run build

# Establecer las variables de entorno por defecto para producción
ENV NODE_ENV production

# Exponer el puerto en el que Next.js correrá (por defecto 3000)
EXPOSE 6000

# Comando para correr la aplicación
CMD ["npm", "start"]