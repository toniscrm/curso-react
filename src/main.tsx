// import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import router from "./routes"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <App />
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)

