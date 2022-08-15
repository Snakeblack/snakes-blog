---
title: 'Personaliza tu terminal en Linux/Unix con zsh'
date: '2022-08-11'
tags: ['guia', 'terminal', 'shell', 'zsh', 'ohmyzsh', 'plugins', 'lsd', 'batcat', 'fzf']
draft: false
summary: 'Guía para personalizar la terminal de Linux/Unix con ZSH, OhMyZSH, lsd, batcat y más.'
---

# Personaliza tu terminal en Linux / Unix con zsh

Para personalizar la terminal de Linux/Unix con ZSH y OhMyZSH, debemos tener instalado zsh y ohmyzsh.

Para instalar zsh, ejecutamos el comando:

```Shell
sudo apt install zsh
```

Despues de instalar zsh, ejecutamos el comando:

```Shell
chsh -s /usr/bin/zsh
```

Reinicia la terminal para que se aplique el cambio.

Para instalar ohmyzsh, ejecutamos el comando:

```Shell
wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
sh install.sh
```

## Plugins

Para personalizar la terminal, debemos configurar los plugins. Para ello debemos de editar el archivo `.zshrc`:

```Shell
vi ~/.zshrc
```

Y añadir o eliminar los plugins que deseemos, ademas de distintas configuraciones.

Por ejemplo, podria verse asi:

```Shell
plugins=(
  git
  bundler
  dotenv
  macos
  rake
  rbenv
  ruby
)
```

## Temas

Robby's Theme es el tema predeterminado. No es el más elegante. No es el más simple. Es justo el adecuado (para algunos). Una vez que encuentres un tema que te gustaría usar, deberás editar el archivo `~/.zshrc`. Verá una variable de entorno (todas en mayúsculas) que se ve así:

```Shell
ZSH_THEME="robbyrussell"
```

Para que todo se vea correctamente tendremos que usar una fuente especifica, que podras encontrar en [el repositorio de Nerd Fonts.](https://github.com/ryanoasis/nerd-fonts).

Uno de los plugins para temas más conocido es el `powerlevel10k`, que se puede instalar con el comando:

```Shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

y cambiar el tema a `powerlevel10k`.

```Shell
ZSH_THEME="powerlevel10k/powerlevel10k"
```

en el archivo .zshrc.

## LSD

LSD es un plugin que sustituye a la funcionalidad de ls por una que muestra los archivos y directorios de forma más amigable.

Para poder instalarlo podemos usar los siguientes comandos dependiendo del S.O.

<table>
  <thead>
    <tr>
      <th>OS/Distro</th>
      <th>Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Archlinux</td>
      <td><code>pacman -S lsd</code></td>
    </tr>
    <tr>
      <td>Fedora</td>
      <td><code>dnf install lsd</code></td>
    </tr>
    <tr>
      <td>Gentoo</td>
      <td><code>sudo emerge sys-apps/lsd</code></td>
    </tr>
    <tr>
      <td>macOS</td>
      <td><code>brew install lsd</code> o <code>sudo port install lsd</code></td>
    </tr>
    <tr>
      <td>NixOS</td>
      <td><code>nix-env -iA nixos.lsd</code></td>
    </tr>
    <tr>
      <td>FreeBSD</td>
      <td><code>pkg install lsd</code></td>
    </tr>
    <tr>
      <td>NetBSD or any <code>pkgsrc</code> platform</td>
      <td><code>pkgin install lsd</code> o <code>cd /usr/pkgsrc/sysutils/lsd &amp;&amp; make install</code></td>
    </tr>
    <tr>
      <td>Windows</td>
      <td><code>scoop install lsd</code></td>
    </tr>
    <tr>
      <td>Android (via Termux)</td>
      <td><code>pkg install lsd</code></td>
    </tr>
    <tr>
      <td>Ubuntu/Debian based distro</td>
      <td><code>sudo dpkg -i lsd_0.22.0_amd64.deb</code> abtener el archivo <code>.deb</code> en su <a href="https://github.com/Peltoche/lsd/releases">github</a></td>
    </tr>
    <tr>
      <td>Solus</td>
      <td><code>eopkg it lsd</code></td>
    </tr>
    <tr>
      <td>Void Linux</td>
      <td><code>sudo xbps-install lsd</code></td>
    </tr>
  </tbody>
</table>

Para poder usarlo en sustitución de la funcionalidad de ls, debemos de añadir un alias en el archivo `.zshrc`:

```Shell
alias ls='lsd'
```

Para más información visita la documentación en su [github](https://github.com/Peltoche/lsd).

## Bat

Bat es un plugin que permite mostrar el contenido de un archivo de texto, como hace el comando cat, pero con una forma más amigable.

Para instalarlo podemos usar los siguientes comandos dependiendo del S.O.

<table>
  <thead>
    <tr>
      <th>OS/Distro</th>
      <th>Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ubuntu/Debian based distro</td>
      <td><code>sudo apt install bat</code> o <code>Shellsudo dpkg -i bat_0.18.3_amd64.deb</code></td>
    </tr>
    <tr>
      <td>Arch Linux</td>
      <td><code>sudo pacman -S bat</code></td>
    </tr>
    <tr>
      <td>Fedora</td>
      <td><code>dnf install bat</code></td>
    </tr>
    <tr>
      <td>Gentoo</td>
      <td><code>sudo emerge sys-apps/bat</code></td>
    </tr>
    <tr>
      <td>macOS</td>
      <td><code>brew install bat</code> o <code>sudo port install bat</code></td>
    </tr>
    <tr>
      <td>Void Linux</td>
      <td><code>sudo xbps-install bat</code></td>
    </tr>
    <tr>
      <td>Termux</td>
      <td><code>pkg install bat</code></td>
    </tr>
    <tr>
      <td>FreeBSD</td>
      <td><code>pkg install bat</code></td>
    </tr>
    <tr>
      <td>Windows</td>
      <td><code>scoop install bat</code> o <code>choco install bat</code></td>
    </tr>
  </tbody>
</table>

Para poder usarlo en sustitución de la funcionalidad de cat, debemos de añadir un alias en el archivo `.zshrc`:

```Shell
alias cat='bat'
```

Para más información visita la documentación en su [github](https://github.com/sharkdp/bat).

## Fzf

Fzf, las siglas de Fast Zipper File Search, es un plugin que permite buscar archivos y directorios rapido y de forma recursiva.

Para instalarlo podemos usar los siguientes comandos dependiendo del S.O.

<table>
  <thead>
    <tr>
      <th>OS/Distro</th>
      <th>Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MacOS</td>
      <td><code>brew install fzf</code> or <code>sudo port install fzf</code></td>
    </tr>
    <tr>
      <td>Ubuntu/Debian based distro</td>
      <td><code>sudo apt install fzf</code></td>
    </tr>
    <tr>
      <td>Arch Linux</td>
      <td><code>sudo pacman -S fzf</code></td>
    </tr>
    <tr>
      <td>Fedora</td>
      <td><code>dnf install fzf</code></td>
    </tr>
    <tr>
      <td>Gentoo</td>
      <td><code>sudo emerge sys-apps/fzf</code></td>
    </tr>
    <tr>
      <td>Void Linux</td>
      <td><code>sudo xbps-install fzf</code></td>
    </tr>
    <tr>
      <td>Alpine Linux</td>
      <td><code>sudo apk add fzf</code></td>
    </tr>
    <tr>
      <td>Windows</td>
      <td><code>scoop install fzf</code> o <code>choco install fzf</code></td>
    </tr>
  </tbody>
</table>

Para poder usarlo puedes ejecutar el comando `fzf`.

Tambien puedes ejecutar el comando concatenando el comando `fzf` con el comando `find` para buscar archivos y directorios.

```Shell
find * -type f | fzf > selected
```

Para más información visita la documentación en su [github](https://github.com/junegunn/fzf).
