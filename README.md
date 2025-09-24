# 🚀 Mi Portafolio Personal# Astro Starter Kit: Basics



[![Astro](https://img.shields.io/badge/Astro-5.13.9-FF5D01?logo=astro&logoColor=white)](https://astro.build)

[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)



Un portafolio moderno y responsivo desarrollado con **Astro** y **TailwindCSS**, diseñado para mostrar mis habilidades como desarrollador Full Stack.> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!



## ✨ Características## 🚀 Project Structure



- 🎨 **Diseño moderno y responsivo** con TailwindCSSInside of your Astro project, you'll see the following folders and files:

- 🌙 **Modo oscuro/claro** con toggle automático

- ⚡ **Rendimiento optimizado** con Astro```text

- 📱 **Completamente responsivo** para todos los dispositivos/

- 🎯 **Componentes modulares** y reutilizables├── public/

- 🔧 **TypeScript** para mejor desarrollo│   └── favicon.svg

- 📧 **Formulario de contacto** funcional├── src

- 🎭 **Iconos vectoriales** con Astro Icon│   ├── assets

│   │   └── astro.svg

## 🏗️ Estructura del Proyecto│   ├── components

│   │   └── Welcome.astro

```│   ├── layouts

/│   │   └── Layout.astro

├── public/│   └── pages

│   └── favicon.svg│       └── index.astro

├── src/└── package.json

│   ├── assets/```

│   │   ├── icons/

│   │   └── images/To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

│   ├── components/

│   │   ├── Badge.astro## 🧞 Commands

│   │   ├── Contacto.astro

│   │   ├── Footer.astroAll commands are run from the root of the project, from a terminal:

│   │   ├── Header.astro

│   │   ├── Hero.astro| Command                   | Action                                           |

│   │   ├── Projects.astro| :------------------------ | :----------------------------------------------- |

│   │   ├── Skills.astro| `npm install`             | Installs dependencies                            |

│   │   ├── Timeline.astro| `npm run dev`             | Starts local dev server at `localhost:4321`      |

│   │   └── ThemeToggle.astro| `npm run build`           | Build your production site to `./dist/`          |

│   ├── layouts/| `npm run preview`         | Preview your build locally, before deploying     |

│   │   └── Layout.astro| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

│   ├── pages/| `npm run astro -- --help` | Get help using the Astro CLI                     |

│   │   └── index.astro

│   └── styles/## 👀 Want to learn more?

│       └── global.css

├── astro.config.mjsFeel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[TailwindCSS](https://tailwindcss.com/)** - Framework de CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)** - Componente de iconos para Astro
- **[Iconify](https://iconify.design/)** - Biblioteca de iconos

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18.0 o superior
- npm, yarn o pnpm

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/josedantearroyo/MyPortfolio.git
   cd portafolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abre tu navegador**
   
   Visita `http://localhost:4321` para ver tu portafolio en vivo.

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción localmente |

## 🎨 Personalización

### Colores y Tema

El tema se puede personalizar editando el archivo `tailwind.config.mjs`:

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        // Personaliza tus colores aquí
      }
    }
  }
}
```

### Componentes

Cada sección del portafolio es un componente modular ubicado en `src/components/`:

- **Hero.astro** - Sección principal con presentación
- **Skills.astro** - Habilidades técnicas
- **Projects.astro** - Proyectos destacados
- **Timeline.astro** - Experiencia profesional
- **Contacto.astro** - Formulario de contacto

### Iconos

Los iconos se gestionan con Astro Icon. Para añadir nuevos iconos:

```astro
---
import { Icon } from 'astro-icon/components'
---

<Icon name="tabler:brand-github" />
<Icon name="simple-icons:javascript" />
```

## 🌐 Despliegue

### Netlify

1. Conecta tu repositorio a Netlify
2. Configuración de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Vercel

1. Conecta tu repositorio a Vercel
2. La configuración se detecta automáticamente

### GitHub Pages

```bash
npm run build
# Sube el contenido de la carpeta dist/
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

**José Dante Arroyo**
- 🌐 Portfolio: [tu-dominio.com](https://tu-dominio.com)
- 📧 Email: tu-email@ejemplo.com
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [@josedantearroyo](https://github.com/josedantearroyo)

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!