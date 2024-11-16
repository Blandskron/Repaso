# Repaso de Instalación y Configuración de Proyecto Django

Este repositorio cubre los pasos básicos para crear y configurar un proyecto Django desde cero utilizando un entorno virtual en Python. A continuación se detallan los pasos realizados:

## 1. Crear un Entorno Virtual

Para mantener las dependencias aisladas y evitar conflictos con otras instalaciones de Python, primero creamos un entorno virtual utilizando el módulo `venv`.

```bash
py -m venv venv
```

- **Explicación**:
  - Este comando crea un entorno virtual llamado `venv` dentro de la carpeta actual. Esto permite tener un espacio aislado para instalar las dependencias necesarias para el proyecto sin afectar el sistema global.

## 2. Activar el Entorno Virtual

Una vez creado el entorno virtual, es necesario activarlo para trabajar dentro de él.

En Windows, usamos el siguiente comando:

```bash
venv\Scripts\activate
```

- **Explicación**:
  - Al activar el entorno virtual, el prompt de la línea de comandos cambiará y mostrará `(venv)`, lo que indica que el entorno está activo y cualquier paquete que instalemos se hará dentro de este entorno.

## 3. Instalar Django

Con el entorno virtual activado, instalamos Django, que es el framework que utilizaremos para desarrollar nuestra aplicación web.

```bash
pip install django
```

- **Explicación**:
  - Este comando utiliza `pip` para instalar la última versión de Django en nuestro entorno virtual. Django es un framework de desarrollo web en Python que facilita la creación de aplicaciones web robustas y escalables.

## 4. Crear un Proyecto Django

Una vez instalado Django, creamos un nuevo proyecto con el siguiente comando:

```bash
django-admin startproject adelanto
```

- **Explicación**:
  - Este comando crea un nuevo proyecto Django llamado `adelanto` en el directorio actual. Dentro del proyecto se crean archivos esenciales como `manage.py` y una carpeta con la configuración del proyecto.

## 5. Cambiar al Directorio del Proyecto

Después de crear el proyecto, cambiamos al directorio del mismo para comenzar a trabajar en él:

```bash
cd adelanto
```

- **Explicación**:
  - Usamos el comando `cd` (cambiar directorio) para entrar a la carpeta que contiene el proyecto Django recién creado.

## 6. Ejecutar el Servidor de Desarrollo

Por último, iniciamos el servidor de desarrollo de Django para verificar que todo está funcionando correctamente.

```bash
python manage.py runserver
```

- **Explicación**:
  - El servidor de desarrollo se ejecuta y escucha las solicitudes en `http://127.0.0.1:8000/` por defecto. Si todo está configurado correctamente, deberías ver una página de bienvenida de Django en tu navegador.

---

## Resumen de Comandos Ejecutados

1. Crear entorno virtual:
   ```bash
   py -m venv venv
   ```

2. Activar entorno virtual:
   ```bash
   venv\Scripts\activate
   ```

3. Instalar Django:
   ```bash
   pip install django
   ```

4. Crear proyecto Django:
   ```bash
   django-admin startproject adelanto
   ```

5. Cambiar a la carpeta del proyecto:
   ```bash
   cd adelanto
   ```

6. Ejecutar servidor de desarrollo:
   ```bash
   python manage.py runserver
   ```

---

## Conclusión

En este repaso, configuramos un entorno de desarrollo Python utilizando un entorno virtual, instalamos Django, creamos un nuevo proyecto Django y ejecutamos el servidor de desarrollo para asegurarnos de que todo estaba funcionando correctamente. Estos pasos son esenciales para comenzar a trabajar en proyectos web con Django.

Si necesitas más detalles o tienes dudas sobre algún paso, no dudes en contactarme.