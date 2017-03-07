defmodule Hugo.Command do
    alias Hugo.{Website, Content}

    defp hugo_path do
        Application.get_env(:lacest, :hugo_binary)
    end

    def new(%Website{path: path}) do
        wfp = Website.full_path(path)
        System.cmd(hugo_path(), ["new", "site", wfp])
    end

    def new_post(%Website{path: website_path}, %Content{path: content_path}) do
        File.cd!(Website.full_path(website_path), fn ->
            System.cmd(hugo_path(), ["new", content_path])
        end)
    end

    def build_website(%Website{path: website_path}) do
        File.cd!(Website.full_path(website_path), fn ->
            System.cmd(hugo_path(), [])
        end)
    end
end