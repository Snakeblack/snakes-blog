---
title: 'Personaliza tu terminal en Linux/Unix con zsh'
date: '2022-08-11'
tags: ['guia', 'terminal', 'shell', 'prompt', 'zsh', 'ohmyzsh', 'plugins', 'lsd', 'batcat', 'fzf']
draft: false
summary: 'Guía para personalizar la terminal de Linux/Unix con ZSH, OhMyZSH, lsd, batcat y más'.
---

# Personaliza tu terminal en Linux/Unix con zsh

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

| OS/Distro                       | Command                                                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Archlinux                       | `pacman -S lsd`                                                                                                   |
| Fedora                          | `dnf install lsd`                                                                                                 |
| Gentoo                          | `sudo emerge sys-apps/lsd`                                                                                        |
| macOS                           | `brew install lsd` or `sudo port install lsd`                                                                     |
| NixOS                           | `nix-env -iA nixos.lsd`                                                                                           |
| FreeBSD                         | `pkg install lsd`                                                                                                 |
| NetBSD or any `pkgsrc` platform | `pkgin install lsd` or `cd /usr/pkgsrc/sysutils/lsd && make install`                                              |
| Windows                         | `scoop install lsd`                                                                                               |
| Android (via Termux)            | `pkg install lsd`                                                                                                 |
| Ubuntu/Debian based distro      | `sudo dpkg -i lsd_0.22.0_amd64.deb` get `.deb` file from [release page](https://github.com/Peltoche/lsd/releases) |
| Solus                           | `eopkg it lsd`                                                                                                    |
| Void Linux                      | `sudo xbps-install lsd`                                                                                           |

Para poder usarlo en sustitución de la funcionalidad de ls, debemos de añadir un alias en el archivo `.zshrc`:

```Shell
alias ls='lsd'
```

Para más información visita la documentación en su [github](https://github.com/Peltoche/lsd).

## Bat

Bat es un plugin que permite mostrar el contenido de un archivo de texto, como hace el comando cat, pero con una forma más amigable.

Para instalarlo podemos usar los siguientes comandos dependiendo del S.O.

| OS/Distro                  | Command                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------- |
| Ubuntu/Debian based distro | `sudo apt install bat` o `Shellsudo dpkg -i bat_0.18.3_amd64.deb # adapt version number and architecture` |
| Arch Linux                 | `sudo pacman -S bat`                                                                                      |
| Fedora                     | `dnf install bat`                                                                                         |
| Gentoo                     | `sudo emerge sys-apps/bat`                                                                                |
| macOS                      | `brew install bat` or `sudo port install bat`                                                             |
| Void Linux                 | `sudo xbps-install bat`                                                                                   |
| Termux                     | `pkg install bat`                                                                                         |
| FreeBSD                    | `pkg install bat`                                                                                         |
| Windows                    | `scoop install bat` o `choco install bat`                                                                 |

Para poder usarlo en sustitución de la funcionalidad de cat, debemos de añadir un alias en el archivo `.zshrc`:

```Shell
alias cat='bat'
```

Para más información visita la documentación en su [github](https://github.com/sharkdp/bat).

## Fzf

Fzf, las siglas de Fast Zipper File Search, es un plugin que permite buscar archivos y directorios rapido y de forma recursiva.

Para instalarlo podemos usar los siguientes comandos dependiendo del S.O.

| OS/Distro                  | Command                                       |
| -------------------------- | --------------------------------------------- |
| MacOS                      | `brew install fzf` or `sudo port install fzf` |
| Ubuntu/Debian based distro | `sudo apt install fzf`                        |
| Arch Linux                 | `sudo pacman -S fzf`                          |
| Fedora                     | `dnf install fzf`                             |
| Gentoo                     | `sudo emerge sys-apps/fzf`                    |
| Void Linux                 | `sudo xbps-install fzf`                       |
| Alpine Linux               | `sudo apk add fzf`                            |
| Windows                    | `scoop install fzf` o `choco install fzf`     |

Para poder usarlo puedes ejecutar el comando `fzf`.

Tambien puedes ejecutar el comando concatenando el comando `fzf` con el comando `find` para buscar archivos y directorios.

```Shell
find * -type f | fzf > selected
```

Para más información visita la documentación en su [github](https://github.com/junegunn/fzf).
