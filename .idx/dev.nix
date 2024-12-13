# 了解有关如何使用 Nix 配置环境的更多信息
# 请参阅：https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # 指定使用的 nixpkgs 渠道
  channel = "stable-24.05"; # 或者 "unstable"
  # 使用 https://search.nixos.org/packages 查找可用包
  packages = [
    pkgs.nodejs_20
  ];
  # 在工作区中设置环境变量
  env = { };
  idx = {
    # 在 https://open-vsx.org/ 上查找所需的扩展，并使用 "publisher.id"
    extensions = [
      # "vscodevim.vim"
      "bradlc.vscode-tailwindcss"
      "esbenp.prettier-vscode"
    ];
    workspace = {
      # 当首次使用此 `dev.nix` 文件创建工作区时执行的操作
      onCreate = {
        # npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
        # 默认情况下打开以下文件（如果存在）：
        # default.openFiles = [ "src/App.tsx" "src/App.ts" "src/App.jsx" "src/App.js" ];
      };
      # 要在每次启动或重新启动工作区时运行某些操作，请使用 `onStart` 钩子
    };
    # 启用预览并自定义配置
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}
