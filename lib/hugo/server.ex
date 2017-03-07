defmodule Hugo.Server do
    use GenServer

    alias Hugo.Website
    alias Hugo.Content
    alias Hugo.Command
    alias Hugo.Git

    require Logger

    def start_link do
        GenServer.start_link(__MODULE__, :ok, [name: __MODULE__])
    end

    def init(:ok) do
        {:ok, nil}
    end

    ## Client

    def create_website(path) do
        GenServer.call(__MODULE__, {:new_website, %Website{path: path}})   
    end

    def create_post(website_path, content_path) do
        GenServer.call(__MODULE__, {
            :new_post,
            %Website{path: website_path},
            %Content{path: content_path}
        })
    end

    def download_theme(website_path, theme_url) do
        GenServer.call(__MODULE__, {:download_theme, %Website{path: website_path, theme_url: theme_url}})
    end

    def build_website(website_path) do
        GenServer.call(__MODULE__, {:build_website, %Website{path: website_path}})
    end

    ## Server

    def handle_call({:new_website, website}, _from, _state) do
        {:reply, Command.new(website), nil}
    end

    def handle_call({:new_post, website, content}, _from, _state) do
        {:reply, Command.new_post(website, content), nil}
    end

    def handle_call({:download_theme, website}, _from, _state) do
        {:reply, Git.download_theme(website), nil}
    end

    def handle_call({:build_website, website}, _from, _state) do
        {:reply, Command.build_website(website), nil}
    end
end