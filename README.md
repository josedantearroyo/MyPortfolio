# 🚀 Portafolio Personal - José Dante Arroyo

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-5.13.9-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Un portafolio moderno y elegante desarrollado con las últimas tecnologías web**

[🌐 Ver Demo](https://tu-portafolio.com) • [📱 Responsive Design](#) • [⚡ Optimizado](#)

</div>

---

## ✨ Características Destacadas

🎨 **Diseño Moderno** - Interfaz elegante y profesional con animaciones suaves  
🌙 **Tema Automático** - Se adapta automáticamente a las preferencias del sistema  
⚡ **Alto Rendimiento** - Optimizado con Astro para carga ultrarrápida  
📱 **Totalmente Responsivo** - Perfecto en móviles, tablets y desktop  
🎯 **Componentes Modulares** - Arquitectura escalable y mantenible  
🔧 **TypeScript** - Desarrollo tipado y robusto  
🎭 **Iconos Modernos** - Biblioteca completa con Simple Icons y Tabler Icons  

## 🏗️ Estructura del Proyecto

```
portafolio/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Hero.astro      # Sección de presentación
│   │   ├── Skills.astro    # Habilidades técnicas
│   │   ├── Projects.astro  # Proyectos destacados
│   │   ├── Timeline.astro  # Experiencia profesional
│   │   └── Contacto.astro  # Formulario de contacto
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal
│   ├── assets/
│   │   └── images/         # Imágenes del proyecto
│   └── styles/
│       └── global.css      # Estilos globales
├── public/                  # Archivos estáticos
└── astro.config.mjs        # Configuración de Astro
```

## 🛠️ Stack Tecnológico

| Tecnología | Propósito | Versión |
|------------|-----------|---------|
| **Astro** | Framework principal | v5.13.9 |
| **TailwindCSS** | Estilos y diseño | v4.1.13 |
| **TypeScript** | Tipado estático | Latest |
| **Simple Icons** | Iconografía | Latest |
| **Astro Icon** | Gestión de iconos | Latest |

## 🚀 Inicio Rápido

### 📋 Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### 🔧 Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/josedantearroyo/MyPortfolio.git
cd MyPortfolio

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev

# 4. Abre http://localhost:4321 en tu navegador
```

### 📦 Scripts Disponibles

```bash
npm run dev      # 🚀 Servidor de desarrollo
npm run build    # 📦 Build para producción
npm run preview  # 👀 Previsualizar build
```

## 🎨 Personalización

### 🎯 Secciones Principales

- **Hero** - Presentación personal con imagen y enlaces sociales
- **Skills** - Habilidades técnicas con iconos interactivos
- **Projects** - Proyectos destacados con enlaces a demos y código
- **Experience** - Timeline de experiencia profesional
- **Contact** - Formulario de contacto funcional

### 🎨 Temas y Colores

El tema se adapta automáticamente a las preferencias del sistema. Para personalizar colores, edita `tailwind.config.mjs`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // Tus colores personalizados
      }
    }
  }
}
```

## 🌐 Despliegue

### Netlify (Recomendado)
```bash
# Build automático detectado
# Solo conecta tu repositorio
```

### Vercel
```bash
# Deploy automático con cada push
npm run build
```

### Otros Proveedores
```bash
npm run build
# Sube el contenido de ./dist/
```

