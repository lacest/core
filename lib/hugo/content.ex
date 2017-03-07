defmodule Hugo.Content do
    defstruct [:path]

    def new(path), do: %Hugo.Content{path: path}
end