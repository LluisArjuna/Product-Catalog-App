# Product Catalog App – Generador de Pressupostos Digitals

Aplicació web SPA desenvolupada amb **Angular** per visualitzar un llistat de llibres.

---

## 🚀 Objectiu del projecte

Permetre als clients potencials:

- Seleccionar serveis digitals
- Configurar una web a mida
- Introduir les seves dades
- Obtenir un pressupost desglossat automàticament
- Accedir al pressupost mitjançant una URL única
- Consultar un històric de pressupostos generats

L’objectiu és reduir temps comercial, millorar conversió i oferir transparència en els costos.

---

## 🛠️ Tecnologies utilitzades

- Angular (Standalone Components)
- TypeScript
- Signals / Reactive Forms
- LocalStorage (persistència MVP)
- CSS (Mobile-first design)

---

## 🖥️ System Requirements

### Required Software

1️⃣ Node.js

2️⃣ npm

3️⃣ Angular CLI

```bash
npm install -g @angular/cli
```

### Project Installation

Clone the repository:

```bash
git clone https://github.com/LluisArjuna/Product-Catalog-App.git
cd Product-Catalog-App
```

### Project Execution

```bash
ng serve --open
```

---

### Test Execution

```bash
ng test --open
```

---

## 📦 Estructura del projecte

```bash
src/app/
├── data/ → dades locals amb els productes
├── components/ → Components reutilitzables UI
├── interfaces/ → Models i tipus
├── layouts/ → Navbar, Footer, Layout principal
├── pages/ → Vistes amb routing
├── logic/ → Lògica de negoci i persistència
```
