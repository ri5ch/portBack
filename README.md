# Portfolio Personal - Backend

Este es el backend de mi portfolio personal, desarrollado con Node.js + ExpressJS y utilizando MongoDB Atlas como base de datos.  
Se encarga de proveer la API para que el frontend (Angular en Firebase) muestre la información de manera dinámica.

---

## Tecnologías utilizadas
- Node.js
- ExpressJS
- MongoDB Atlas
- Mongoose
- Render (para despliegue)

---

## Endpoints principales
| Método | Ruta           | Descripción |
|--------|----------------|-------------|
| GET    | `/about`       | Devuelve la información personal y bio |
| GET    | `/experience`  | Lista de experiencias laborales |
| GET    | `/education`   | Lista de formaciones académicas |
| GET    | `/projects`    | Lista de proyectos IT |


## Ejemplo de uso:  
```bash
GET https://portafolioback-j8w8.onrender.com/projects

dirgirte a :https://portafolioback-j8w8.onrender.com una vez inciado el servidor probar con https://portafolioback-j8w8.onrender.com/api/projects o api/projects  api/education 
