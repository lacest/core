use Mix.Config

config :lacest,
    hugo_binary: Path.expand("./system/hugo"),
    git_binary: Path.expand("./system/git"),
    websites_directory: Path.expand("./websites")