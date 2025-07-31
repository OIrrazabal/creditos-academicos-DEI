
# 🎓 Sistema de Consulta de Créditos Académicos DEI

Sistema web desarrollado en Google Apps Script para consultar y visualizar los créditos académicos de estudiantes del Departamento de Electrónica e Informática (DEI) de la Universidad Católica "Nuestra Señora de la Asunción". Este proyecto contiene únicamente el módulo de consulta para estudiantes y administrativos.

## 📋 Descripción

Esta aplicación permite a estudiantes y administrativos consultar de manera rápida y visual el progreso de créditos académicos requeridos para la graduación en las carreras de ingeniería del DEI.

### ✨ Características principales

- 🔍 **Búsqueda dual**: Por matrícula o apellido
- 📊 **Visualización intuitiva**: Barras de progreso por categoría
- 📱 **Diseño responsivo**: Optimizado para dispositivos móviles
- 🎨 **Interfaz moderna**: Diseño atractivo con gradientes y animaciones
 - 📝 **Exportación a PDF**: Generación de informes en formato A4 vertical
 - 📚 **Información completa**: Detalles de cada categoría de créditos
 - 🕘 **Historial de búsquedas**: Búsquedas recientes guardadas localmente

## 🎯 Funcionalidades

### Para Estudiantes
- Consulta rápida de estado de créditos
- Indicadores visuales de progreso (20 créditos totales)
- Verificación de suficiencia en inglés
- Exportación de informes en formato PDF
- Información detallada de cada categoría
 

## 📂 Estructura del Proyecto

```
CreditosDEIGoogle/
├── Page.html          # Interfaz principal del usuario
├── JavaScript.html    # Código JavaScript del lado del cliente
├── codigo.js          # Lógica del servidor (Apps Script)
├── linkURL.js         # Lógica adicional para enlaces
├── appsscript.json    # Configuración del proyecto Google Apps Script
└── README.md          # Documentación del proyecto
```

## 🎨 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6
- **Backend**: Google Apps Script
- **Framework CSS**: Bootstrap 5.3.0
- **Bibliotecas JS**: jsPDF, html2canvas para exportación a PDF
- **Arquitectura**: Separación cliente-servidor, código modular
- **Fuentes**: Google Fonts (Segoe UI)
- **Iconos**: Emojis Unicode para mejor compatibilidad

## 🚀 Instalación y Configuración

### Requisitos previos
- Cuenta de Google
- Acceso a Google Apps Script
- Permisos para Google Sheets (base de datos)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/OIrrazabal/creditos-academicos-DEI.git
   ```

2. **Configurar Google Apps Script**
   - Crear nuevo proyecto en [script.google.com](https://script.google.com)
   - Subir archivos del proyecto
   - Configurar acceso a la hoja de cálculo de créditos

3. **Configurar permisos**
   - Autorizar acceso a Google Sheets
   - Configurar permisos de lectura de datos

4. **Desplegar como aplicación web**
   - Ir a "Implementar" > "Nueva implementación"
   - Tipo: "Aplicación web"
   - Acceso: Según requerimientos institucionales

## 🔧 Configuración de Desarrollo

### Usando clasp CLI
```bash
# Instalar clasp globalmente
npm install -g @google/clasp

# Autenticar con Google
clasp login

# Clonar proyecto existente
clasp clone [SCRIPT_ID]

# Desarrollar localmente y subir cambios
clasp push
```

### Variables de entorno
- Configurar acceso a hojas de cálculo de datos
 

## 📱 Responsive Design

El sistema está optimizado para:
- 📱 **Móviles**: iPhone, Android (375px+)
- 📱 **Tablets**: iPad, Android tablets (768px+)
- 💻 **Desktop**: Pantallas grandes (1200px+)

### Características responsive
- Tipografía fluida con `clamp()`
- Barras de progreso adaptativas
- Tablas con scroll horizontal en móviles
- Interfaz táctil optimizada

## 🎨 Guía de Estilo

### Colores principales
```css
--primary-color: #1E2F8C    /* Azul DEI */
--hover-color: #152266      /* Azul DEI oscuro */
--secondary-color: #e9ecef  /* Gris claro */
--success-color: #28a745    /* Verde éxito */
--warning-color: #ffc107    /* Amarillo advertencia */
--danger-color: #dc3545     /* Rojo error */
```

### Tipografía
- Familia: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Pesos: 400 (normal), 600 (semi-bold), 700 (bold)
- Tamaños responsivos con clamp()

## 🔒 Seguridad y Privacidad

- ✅ Datos estudiantiles protegidos
- ✅ Acceso controlado por Google Auth
- ✅ Sin almacenamiento local de datos sensibles
- ✅ Historial de búsquedas solo en localStorage
- ✅ Comunicación HTTPS exclusivamente


## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

**Última actualización**: Julio 2025  
**Desarrollado con** ❤️ **por**: OI 2025
