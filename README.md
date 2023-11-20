# grandcolline.com

シンプルな静的ページ (Astro + TailWind CSS + MDX)

## URL

- https://www.grandcolline.com

## Build

```bash
# install package
$ pnpm install

# build
$ pnpm run build
```

## Development

開発は、GitHub Codespaces を使うと楽です.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/grandcolline/grandcolline.com)

```bash
# Running Dev Server
$ pnpm run dev
```

また、[VS Code](https://code.visualstudio.com/) / [Docker](https://www.docker.com/) / [Remote Development](https://github.com/Microsoft/vscode-remote-release) を使えば、ローカルで Codespaces と同じように開発ができます.

<details>
<summary>もし、他の方法で開発をするなら @devcontainer/cli を使うこともできます</summary>

```bash
# Setup Docker Container
$ devcontainer up --workspace-folder .

# Running Dev Server
$ devcontainer exec --workspace-folder . pnpm run dev
```

</details>
