---
title: 'Primer post - Haz tu post'
date: '2022-07-14'
tags: ['guía', 'post', 'blog', 'markdown', 'pull-request']
draft: false
summary: 'En este primer post del blog enseñare como vosotros también podéis postear en este blog realizando una serie de pasos que indicare.'
---

# Bienvenidos!

Este post esta pensado para poder compartir las cosas que voy aprendiendo relacionado a la informática y sobre todo al desarrollo y la programación. También me gustaría crear **guías o ayudas** para completar los proyectos de [42 Madrid](https://42madrid.com). Como es normal nunca hay una sola opción de desarrollo, es decir, no hay formas perfectas, pero si mejores que otras, por lo que si tienes algo que comentar, **mejores soluciones**, o si en algún momento he cometido un error en alguna guía o tutorial, puedas hacer una pull-request para cambiar el post y corregirlo, también puedes **usar el bloque de comentarios** que va directamente ligado a las discusiones del mismo repositorio de [este blog en GitHub](https://github.com/snakeblack/snakes-blog/discussions) que se encuentra en la parte de abajo de cada post.

# ¿Como puedo postear en este blog?

1. Para postear en este blog necesitas una cuenta de [GitHub](https://github.com/).

2. Tendrás que hacer un fork [al repositorio](https://github.com/snakeblack/snakes-blog) (que encontraras en la parte superior derecha de la pagina).

3. Tendrás que clonar el repositorio forkeado en tu pc.

4. En el directorio clonado, dirígete a la carpeta `data/blog/` y crea un nuevo archivo con formato markdown.

5. En el archivo creado, escribe el contenido del post siguiendo este formato:

   ```Markdown
   ---
   title: 'Titulo del post'
   date: '2022-07-14'
   tags: ['primertag', 'segundotag', 'tercertag']
   draft: false
   summary: 'Resumen del post'.
   author: 'elnombredelautor' // si tienes un perfil creado.
   ---

   // Contenido del post en formato markdown.

   ```

6. Cuando hayas terminado, sube el archivo a GitHub.

7. Haz un commit con el siguiente formato y después un push al repositorio.

   ```Shell
   git add [nombre del archivo]
   git commit -m "add: [nombre del post] - [autor del post]"
   git push
   ```

8. Vas a tu repositorio de github donde te aparecerá un mensaje de que el post se ha subido correctamente y que puedes hacer un "Compare & pull request", das clic en el.

9. Comentas brevemente el post y haces una pull request.

10. Si el post es aprobado, se publicará en el blog.

# ¿Cómo puedo tener un perfil de autor?

Para crear un perfil de autor, necesitas seguir los mismos pasos que la creación de un post, salvo que tienes que crearlo en la carpeta `data/authors/`.

Tiene que ser en markdown y tiene que tener el siguiente formato:

```Markdown
---
name: 'Nombre del autor'
avatar: '[enlace a la imagen del autor]'
occupation: 'Profesión del autor'
company: 'Empresa del autor'
twitter: 'https://twitter.com/nombre_del_autor'
linkedin: 'https://www.linkedin.com/nombre_del_autor'
---
```

Si no quieres rellenar todos los campos, puedes dejarlo en blanco.

## Conclusiones

Este blog es open source, puedes verlo en [GitHub](https://github.com/snakeblack/snakes-blog), como ya sabes, puedes hacer un fork al repositorio, pero tienes que seguir una series de pasos para poder subir tu post, cumplir las reglas y buenas formas.

Anímate a participar y compartir con otros tus experiencias y conocimientos.

Si tienes alguna duda o sugerencia puedes comentar este blog en la parte inferior del post, dando clic en "Cargar Comentarios".
