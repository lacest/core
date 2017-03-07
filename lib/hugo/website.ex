defmodule Hugo.Website do
  defstruct [:path, :theme_url, :config]
  def new() do
    new(".")
  end
  def new(path), do: %Hugo.Website{path: path}

  def full_path(website_path) do
        Path.join([
            Application.get_env(:lacest, :websites_directory),
            website_path,
        ])
  end

  def load_config(%Hugo.Website{path: path} = website) do
      with {:ok, config} <- File.read(Path.join([full_path(path), "config.toml"])),
           parsed_config <- Tomlex.load(config) do
            %Hugo.Website{website | config: parsed_config}
      end
  end

  def save_config(%Hugo.Website{path: path} = website) do
      # how to convert from a map... to a toml?
  end
end