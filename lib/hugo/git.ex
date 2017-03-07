defmodule Hugo.Git do
    alias Hugo.Website

    defp git_path do
        Application.get_env(:lacest, :git_binary)
    end

    def download_theme(%Website{path: website_path, theme_url: theme}) do
        System.cmd(git_path(), [
            "clone",
            "--depth", 
            "1", 
            "--recursive",
            theme,
            Path.join([Website.full_path(website_path), "themes", Path.basename(theme)]),
        ])
    end
end