defmodule Hugo.Supervisor do
    def start_link do
        import Supervisor.Spec, warn: false
        children = [
            worker(Hugo.Server, [])
        ]
        opts = [strategy: :one_for_one, name: Hugo.Supervisor]
        Supervisor.start_link(children, opts)
    end
end