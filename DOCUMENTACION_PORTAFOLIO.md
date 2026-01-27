# 📚 GUÍA DEL PORTAFOLIO

## Jose Fernando Moreno Meneses - Web Developer

---

## 🎯 LO QUE NECESITAS HACER

### 1. CONFIGURAR EMAILJS (Para recibir correos)

**Archivo a editar:** `/app/frontend/src/components/Contact.jsx`

**Pasos:**

1. Ve a https://www.emailjs.com y crea cuenta gratis
2. En "Email Services" → "Add New Service" → Selecciona "Gmail" → Conecta tu cuenta
   - Copia el **Service ID** (ej: `service_abc123`)
3. En "Email Templates" → "Create New Template" → Usa esta plantilla:
   ```
   Asunto: Nuevo mensaje de {{from_name}}
   
   Nombre: {{from_name}}
   Email: {{from_email}}
   
   Mensaje:
   {{message}}
   ```
   - Copia el **Template ID** (ej: `template_xyz789`)
4. En "Account" → "API Keys"
   - Copia tu **Public Key** (ej: `abcdefghijklmnop`)

5. Abre `Contact.jsx` y edita las líneas 30-32:
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_abc123';    // ← Tu Service ID
   const EMAILJS_TEMPLATE_ID = 'template_xyz789';  // ← Tu Template ID
   const EMAILJS_PUBLIC_KEY = 'abcdefghijklmnop';  // ← Tu Public Key
   ```

---

### 2. AGREGAR LINKS DE TUS PROYECTOS

**Archivo a editar:** `/app/frontend/src/data/mock.js`

Busca el array `projects` y edita los campos `liveDemo` y `code`:

```javascript
// Ejemplo: Proyecto Overload
{
  id: 1,
  title: "Overload",
  // ... otros campos ...
  
  liveDemo: "https://overload.vercel.app",     // ← URL de tu demo en vivo
  code: "https://github.com/j290/overload",    // ← URL de tu repo en GitHub
}

// Ejemplo: Proyecto sin demo (EFFITECH - empresarial)
{
  id: 2,
  title: "EFFITECH",
  // ... otros campos ...
  
  liveDemo: null,    // null = muestra "Private Project"
  code: null,        // null = oculta botón de GitHub
  isCompany: true    // true = muestra badge "Enterprise"
}
```

---

### 3. CAMBIAR TU INFORMACIÓN PERSONAL

**Archivo:** `/app/frontend/src/data/mock.js`

```javascript
export const personalInfo = {
  name: "Jose Fernando",
  lastName: "Moreno Meneses",
  role: "Frontend / Web Developer",
  tagline: "React, modern UI, real-world projects.",
  email: "jfmm8995@gmail.com",
  linkedin: "https://linkedin.com/in/jose-fernando-moreno-meneses-3a519a33a",
  github: "https://github.com/j290"
};
```

---

### 4. CAMBIAR SKILLS

**Archivo:** `/app/frontend/src/data/mock.js`

```javascript
export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React"],
  ui: ["Responsive design", "Minimal interfaces"],
  backend: ["APIs", "Auth", "Data handling"],
  tools: ["Git", "GitHub", "Figma", "Vercel"]
};
```

---

## 🚀 SUBIR A RENDER

### Paso 1: Subir a GitHub

```bash
git init
git add .
git commit -m "Mi portafolio"
git remote add origin https://github.com/j290/mi-portfolio.git
git push -u origin main
```

### Paso 2: En Render.com

1. Crea cuenta en https://render.com (gratis con GitHub)
2. "New +" → "Static Site"
3. Conecta tu repo de GitHub
4. Configura:
   - **Build Command:** `cd frontend && yarn install && yarn build`
   - **Publish Directory:** `frontend/build`
5. Clic en "Create Static Site"

¡Listo! Tu portafolio estará en vivo en minutos.

---

## 📁 ARCHIVOS IMPORTANTES

| Archivo | Qué editar |
|---------|-----------|
| `frontend/src/data/mock.js` | Tu info, proyectos, skills |
| `frontend/src/components/Contact.jsx` | Credenciales de EmailJS |
| `frontend/src/components/Hero.jsx` | Texto del hero |
| `frontend/src/components/About.jsx` | Texto del about |

---

## 🎨 COLORES

| Color | Código | Uso |
|-------|--------|-----|
| Fondo oscuro | `#1a1c1b` | Background |
| Cards | `#302f2c` | Tarjetas |
| Verde lima | `#d9fb06` | Botones/acentos |
| Texto claro | `#dfddd6` | Títulos |
| Texto gris | `#888680` | Descripciones |

---

**¡Éxito con tu portafolio!** 🚀
