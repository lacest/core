defmodule Web.Router do
   use Plug.Router

   require Logger

   plug Plug.Logger
   plug :match
   plug :dispatch

   get "/" do
       Plug.Static.call(conn, Plug.Static.init([at: "/", from: "websites/what/public"]))
   end
end